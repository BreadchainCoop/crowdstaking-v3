import { ChainConfig, chainConfig } from "@/app/config";
import { useReadBreadBalanceOf } from "@/generated";
import { Hex } from "viem";

export function Balance({
  account,
  chainId,
}: {
  account: Hex;
  chainId: number;
}) {
  console.log("account: ", account);
  console.log("chainId: ", chainId);
  const { BREAD } = chainConfig[chainId];
  console.log("chainConfigs: ", chainConfig);
  const { status, data } = useReadBreadBalanceOf({
    address: BREAD.address,
    args: [account],
  });
  console.log({ data });
  console.log({ status });
  switch (status) {
    case "pending":
      return <div>loading...</div>;
    case "success":
      return <div>BREAD Balance:{Number(data) / 1e18}</div>;
    default:
      return null;
  }
}
