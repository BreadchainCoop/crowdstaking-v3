import { BreadABI, DistributorABI } from "@/abi/abi";
import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import { Abi } from "viem";

export default defineConfig({
  out: "src/generated.ts",
  contracts: [
    {
      name: "BREAD",
      abi: BreadABI as Abi,
    },
    {
      name: "DISTRIBUTOR",
      abi: DistributorABI as Abi,
    },
  ],
  plugins: [react()],
});
