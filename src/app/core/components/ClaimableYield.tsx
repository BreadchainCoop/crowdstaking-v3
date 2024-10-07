import { chainConfig } from "@/app/config";
import { useReadBreadYieldAccrued } from "@/generated";

export function ClaimableYield({ chainId }: { chainId: number }) {
  const { BREAD } = chainConfig[chainId];

  const {
    status: breadYieldStatus,
    data: breadYieldData,
    error: breadYieldError,
  } = useReadBreadYieldAccrued({
    address: BREAD.address,
  });

  return breadYieldStatus === "success" ? (
    <h1 className="text-white bg-red-500">{Number(breadYieldData) / 1e18}</h1>
  ) : (
    "...."
  );
}
