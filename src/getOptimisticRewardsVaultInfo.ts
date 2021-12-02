import { HardhatRuntimeEnvironment } from "hardhat/types";
import { OptimisticRewards__factory } from "types";

import { OptimisticRewardsVaultInfo } from "./types";

export async function getOptimisticRewardsVaultInfo(
  hre: HardhatRuntimeEnvironment,
  chainId: number,
  tokenAddress: string,
  name: string
): Promise<OptimisticRewardsVaultInfo> {
  const { provider } = hre.ethers;
  const optimisticRewardsVaultContract = OptimisticRewards__factory.connect(
    tokenAddress,
    provider
  );

  const pendingRootPromise = optimisticRewardsVaultContract.pendingRoot();
  const proposalTimePromise = optimisticRewardsVaultContract.proposalTime();
  const proposerPromise = optimisticRewardsVaultContract.proposer();
  const challengePeriodPromise =
    optimisticRewardsVaultContract.challengePeriod();
  const rewardsRootPromise = optimisticRewardsVaultContract.rewardsRoot();
  const lockingVaultPromise = optimisticRewardsVaultContract.lockingVault();
  const tokenPromise = optimisticRewardsVaultContract.token();

  const [
    pendingRoot,
    proposalTime,
    proposer,
    challengePeriod,
    rewardsRoot,
    lockingVault,
    token,
  ] = await Promise.all([
    pendingRootPromise,
    proposalTimePromise,
    proposerPromise,
    challengePeriodPromise,
    rewardsRootPromise,
    lockingVaultPromise,
    tokenPromise,
  ]);

  return {
    chainId,
    address: tokenAddress,
    name,
    decimals: 0,
    symbol: "",
    extensions: {
      pendingRoot,
      proposalTime: proposalTime.toNumber(),
      proposer,
      challengePeriod: challengePeriod.toNumber(),
      rewardsRoot,
      lockingVault,
      token,
    },
  };
}
