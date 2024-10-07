import { chainConfig } from "@/app/config";
import {
  createPublicClient,
  createTestClient,
  erc20Abi,
  Hex,
  http,
  parseUnits,
  walletActions,
} from "viem";
import { foundry } from "viem/chains";
import { bakeBread } from "./lib";

export const DEV_ACCOUNT = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const LP_TOKEN_WHALE = "0xc2fB4B3EA53E10c88D193E709A81C4dc7aEC902e" as Hex;
const LP_TOKEN_CONTRACT = "0xf3d8f3de71657d342db60dd714c8a2ae37eac6b4" as Hex;

export const testClient = createTestClient({
  chain: foundry,
  mode: "anvil",
  transport: http(),
}).extend(walletActions);

export const publicClient = createPublicClient({
  chain: foundry,
  transport: http(),
});

async function main() {
  await bakeBread(DEV_ACCOUNT);

  await testClient.impersonateAccount({
    address: DEV_ACCOUNT,
  });

  await testClient.sendTransaction({
    account: DEV_ACCOUNT,
    to: LP_TOKEN_WHALE,
    value: parseUnits("5", 18),
  });

  await testClient.impersonateAccount({
    address: LP_TOKEN_WHALE,
  });

  await testClient.writeContract({
    account: LP_TOKEN_WHALE,
    address: LP_TOKEN_CONTRACT,
    abi: erc20Abi,
    functionName: "transfer",
    args: [DEV_ACCOUNT, parseUnits("1000", 18)],
  });

  //   try {
  //     await publicClient.waitForTransactionReceipt({ hash });
  //   } catch (err) {
  //     console.log(err);
  //   }
}

main();
