import { HardhatRuntimeEnvironment } from "hardhat/types";
import { LockingVault__factory } from "types";

import { LockingVaultInfo } from "./types";

export async function getLockingVaultInfo(
  hre: HardhatRuntimeEnvironment,
  chainId: number,
  tokenAddress: string,
  name: string
): Promise<LockingVaultInfo> {
  const { provider } = hre.ethers;
  const lockingVaultContract = LockingVault__factory.connect(
    tokenAddress,
    provider
  );

  const tokenPromise = lockingVaultContract.token();
  const staleBlockLagPromise = lockingVaultContract.staleBlockLag();

  const [token, staleBlockLag] = await Promise.all([
    tokenPromise,
    staleBlockLagPromise,
  ]);

  return {
    chainId,
    address: tokenAddress,
    name,
    decimals: 0,
    symbol: "",
    extensions: {
      token,
      staleBlockLag: staleBlockLag.toNumber(),
    },
  };
}
