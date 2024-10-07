"use client";

import { ReactNode } from "react";
import { WagmiProvider } from "@/app/core/context/WagmiProvider";

export function Providers({ children }: { children: ReactNode }) {
  return <WagmiProvider>{children}</WagmiProvider>;
}
