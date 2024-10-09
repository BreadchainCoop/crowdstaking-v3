import { Hex } from "viem";

// output from the foundry DeployLocal script
import DISTRIBUTOR from "../../contracts/out/DISTRIBUTOR.json";
import BUTTERED_BREAD from "../../contracts/out/BUTTERED_BREAD.json";

export type ChainConfig = {
  BREAD: { address: Hex };
  DISTRIBUTOR: { address: Hex };
  BUTTERED_BREAD: { address: Hex };
};

export const chainConfig: {
  [chainId: number]: ChainConfig;
} = {
  // GNOSIS
  100: {
    BREAD: {
      address: "0xa555d5344f6fb6c65da19e403cb4c1ec4a1a5ee3",
    },
    DISTRIBUTOR: {
      address: "0x8ce361602B935680E8DeC218b820ff5056BeB7af",
    },
    BUTTERED_BREAD: {
      address: "0xA15BB66138824a1c7167f5E85b957d04Dd34E468",
    },
  },
  // ANVIL
  31337: {
    BREAD: {
      address: "0xa555d5344f6fb6c65da19e403cb4c1ec4a1a5ee3",
    },
    DISTRIBUTOR: {
      address:
        (DISTRIBUTOR.ADDRESS && (DISTRIBUTOR.ADDRESS as Hex)) ||
        "0x8ce361602B935680E8DeC218b820ff5056BeB7af",
    },
    BUTTERED_BREAD: {
      address:
        (BUTTERED_BREAD.ADDRESS && (BUTTERED_BREAD.ADDRESS as Hex)) ||
        "0xA15BB66138824a1c7167f5E85b957d04Dd34E468",
    },
  },
};
