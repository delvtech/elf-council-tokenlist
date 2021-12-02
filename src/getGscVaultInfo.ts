import { HardhatRuntimeEnvironment } from "hardhat/types";
import { GSCVault__factory } from "types";

import { GSCVaultInfo } from "./types";

export async function getGscVaultInfo(
  hre: HardhatRuntimeEnvironment,
  chainId: number,
  tokenAddress: string,
  name: string
): Promise<GSCVaultInfo> {
  const { provider } = hre.ethers;
  const gscVaultContract = GSCVault__factory.connect(tokenAddress, provider);

  const coreVotingPromise = gscVaultContract.coreVoting();
  const votingPowerBoundPromise = gscVaultContract.votingPowerBound();
  const idleDurationPromise = gscVaultContract.idleDuration();

  const [coreVoting, votingPowerBound, idleDuration] = await Promise.all([
    coreVotingPromise,
    votingPowerBoundPromise,
    idleDurationPromise,
  ]);

  return {
    chainId,
    address: tokenAddress,
    name,
    decimals: 0,
    symbol: "",
    extensions: {
      coreVoting,
      votingPowerBound: votingPowerBound.toNumber(),
      idleDuration: idleDuration.toNumber(),
    },
  };
}
