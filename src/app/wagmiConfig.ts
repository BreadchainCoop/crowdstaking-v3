import { http, createConfig } from "wagmi";
import { injected, mock } from "wagmi/connectors";
import { foundry, gnosis, sepolia } from "wagmi/chains";

export type WagmiMockFeatures =
  | {
      connectError?: boolean | Error;
      reconnect?: boolean;
      signMessageError?: Error;
      signTypedDataError?: Error;
      switchChainError?: Error;
    }
  | undefined;

export function getConfig(mockFeatures: WagmiMockFeatures) {
  const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as
    | string
    | undefined;
  if (!projectId)
    throw new Error("NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID not provided");
  return createConfig({
    chains: [
      {
        ...gnosis,
        iconUrl: "gnosis_icon.svg",
      },
      sepolia,
      { ...foundry, id: 31337 },
    ],
    transports: {
      [gnosis.id]: http(),
      [sepolia.id]: http(),
      ["31337"]: http("http://localhost:8545"),
    },
    connectors: [
      injected(),
      mock({
        accounts: ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"],
        features: mockFeatures,
      }),
    ],
  });
}
