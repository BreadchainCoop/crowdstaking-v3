import { BreadABI, DistributorABI } from "@/abi/abi";
import { chainConfig } from "@/app/config";
import {
  Hex,
  createPublicClient,
  createTestClient,
  erc20Abi,
  http,
  parseEther,
  walletActions,
} from "viem";
import { foundry } from "viem/chains";

const config = chainConfig[31337];

export const anvilAccounts: Array<Hex> = [
  // mock wallet 2
  // "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
  "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc",
  "0x90f79bf6eb2c4f870365e785982e1f101e93b906",
  "0x15d34aaf54267db7d7c367839aaf71a00a2c6a65",
  "0x9965507d1a55bcc2695c58ba16fb37d819b0a4dc",
  "0x976ea74026e726554db657fa54763abd0c3a0aa9",
  "0x14dc79964da2c08b23698b3d3cc7ca32193d9955",
  "0x23618e81e3f5cdf7f54c3d65f7fbc0abf5b21e8f",
  "0xa0ee7a142d267c1f36714e4a8f75612f20a79720",
];

export const DEV_ACCOUNT = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

export const testClient = createTestClient({
  chain: foundry,
  mode: "anvil",
  transport: http(),
}).extend(walletActions);

export const publicClient = createPublicClient({
  chain: foundry,
  transport: http(),
});
export async function setClaimer() {
  await testClient.impersonateAccount({
    address: "0x918def5d593f46735f74f9e2b280fe51af3a99ad",
  });

  const addresses = await testClient.getAddresses();

  const hash = await testClient.writeContract({
    account: addresses[addresses.length - 1],
    address: config.BREAD.address,
    abi: BreadABI,
    functionName: "setYieldClaimer",
    args: [config.DISTRIBUTOR.address],
  });

  const transaction = await publicClient.waitForTransactionReceipt({ hash });

  console.log("Claimer set: ", transaction.status);
}

export async function bakeBread(anvilAccount: Hex, value?: number) {
  await testClient.impersonateAccount({
    address: anvilAccount,
  });

  if (!value) value = 5000;

  try {
    const hash = await testClient.writeContract({
      account: anvilAccount,
      address: config.BREAD.address,
      abi: BreadABI,
      functionName: "mint",
      value: parseEther(value.toString()),
      args: [anvilAccount],
    });

    const transaction = await publicClient.waitForTransactionReceipt({ hash });

    console.log(`Bread baked by ${anvilAccount} - ${transaction.status}`);
  } catch (err) {
    console.log(err);
  }
}

export async function balanceOf(anvilAccount: Hex) {
  await testClient.impersonateAccount({
    address: anvilAccount,
  });

  const res = await publicClient.readContract({
    address: config.BREAD.address,
    abi: BreadABI,
    functionName: "balanceOf",
    args: [anvilAccount],
  });

  console.log(`Bread balance of ${anvilAccount} - ${res}`);
}

function generateVote() {
  const vote = Math.floor(Math.random() * 10) + 1;
  console.log(`Vote: ${vote}`);
  return vote;
}

export async function submitVote(anvilAccount: Hex) {
  await testClient.impersonateAccount({
    address: anvilAccount,
  });

  try {
    const hash = await testClient.writeContract({
      address: config.DISTRIBUTOR.address,
      abi: DistributorABI,
      functionName: "castVote",
      account: anvilAccount,
      args: [
        [
          generateVote(),
          generateVote(),
          generateVote(),
          generateVote(),
          generateVote(),
        ],
      ],
    });

    const receipt = await publicClient.waitForTransactionReceipt({ hash });

    if (receipt.status !== "success") {
      console.log(`Failed to vote: ${anvilAccount} - `, Object.keys(receipt));
      // console.log({ receipt });

      const transaction = await publicClient.getTransaction({ hash });

      console.log({ transaction });

      // const callData = {
      //   to: receipt.to,
      //   data: transaction.input,
      //   from: receipt.from,
      //   gas: receipt.gasUsed,
      // };

      await publicClient
        .call({ data: transaction.input, blockNumber: receipt.blockNumber })
        .catch((error) => {
          const revertReason = error.data;
          console.log("Revert error:", error);
          console.log("Revert reason:", revertReason);
        });

      return;
    }

    console.log(`Mock Bread Holder voted: ${anvilAccount} - ${receipt.status}`);
  } catch (err) {
    console.log(err);
  }
}

export async function getCurrentDistribution() {
  const res = await publicClient.readContract({
    address: config.DISTRIBUTOR.address,
    abi: DistributorABI,
    functionName: "getCurrentVotingDistribution",
  });

  console.log(`Current distribution: - ${res}`);
}
