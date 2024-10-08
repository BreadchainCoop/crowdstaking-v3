"use client";
import { useReadBreadYieldAccrued } from "@/generated";
import { chainConfig } from "./config";
import {
  Connector,
  useAccount,
  useConnect,
  useDisconnect,
  useSwitchChain,
} from "wagmi";
import { useEffect } from "react";
import { Balance } from "./core/components/Balance";
import { ClaimableYield } from "./core/components/ClaimableYield";

export function HomePage() {
  const account = useAccount();
  const { disconnect } = useDisconnect();
  const { connectors } = useConnect();
  const { chains, switchChain } = useSwitchChain();

  return (
    <div>
      {account.status === "connected" ? (
        <div>
          <div className="p-2">
            <span>{account.address}</span>
            <button onClick={() => disconnect()}>disconnect</button>
          </div>

          <div className="p-2">
            <span>{account.chain?.name}</span>
            <button
              className="px-2 py-1 bg-neutral-300 text-neutral-800 rounded"
              onClick={() => switchChain({ chainId: 31337 })}
            >
              switch to foundry
            </button>
          </div>
          <Balance account={account.address} chainId={account.chainId} />
          <ClaimableYield chainId={account.chainId} />
        </div>
      ) : (
        <Connectors connectors={connectors} />
      )}
      <h2>woo</h2>
    </div>
  );
}

function Connectors({ connectors }: { connectors: readonly Connector[] }) {
  const { connect } = useConnect();
  return (
    <div className="flex flex-col gap-2">
      {connectors.map((connector) => (
        <button
          className="px-4 py-2 border-2 border-neutral-400"
          type="button"
          onClick={() => connect({ connector })}
          key={`connector_${connector.name}`}
        >
          {connector.name}
        </button>
      ))}
    </div>
  );
}
