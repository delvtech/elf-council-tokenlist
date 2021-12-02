import { formatUnits } from "ethers/lib/utils";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { OptimisticsGrantsContractInfo } from "src/types";
import { ERC20Permit__factory, OptimisticGrants__factory } from "types";

export async function getOptimisticGrantsInfo(
  hre: HardhatRuntimeEnvironment,
  chainId: number,
  tokenAddress: string,
  name: string
): Promise<OptimisticsGrantsContractInfo> {
  const { provider } = hre.ethers;
  const optimisticGrantsContract = OptimisticGrants__factory.connect(
    tokenAddress,
    provider
  );

  const tokenPromise = optimisticGrantsContract.token();
  const solvencyPromise = optimisticGrantsContract.solvency();

  const [token, solvency] = await Promise.all([tokenPromise, solvencyPromise]);
  const tokenContract = ERC20Permit__factory.connect(tokenAddress, provider);
  const tokenDecimals = await tokenContract.decimals();

  return {
    chainId,
    address: tokenAddress,
    name,
    decimals: 0,
    symbol: "",
    extensions: {
      token,
      solvency: formatUnits(solvency, tokenDecimals),
    },
  };
}
