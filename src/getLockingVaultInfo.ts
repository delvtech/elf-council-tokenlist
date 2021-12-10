import { Provider } from "@ethersproject/abstract-provider";
import { LockingVault__factory } from "elf-council-typechain";

import { LockingVaultInfo } from "src/types";

export async function getLockingVaultInfo(
  provider: Provider,
  chainId: number,
  tokenAddress: string,
  name: string
): Promise<LockingVaultInfo> {
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
