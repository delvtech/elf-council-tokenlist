import { Provider } from '@ethersproject/abstract-provider';
import { GSCVault__factory } from 'elf-council-typechain';

import { GSCVaultInfo } from './types';

export async function getGscVaultInfo(
  provider: Provider,
  chainId: number,
  tokenAddress: string,
  name: string
): Promise<GSCVaultInfo> {
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
    symbol: '',
    extensions: {
      coreVoting,
      votingPowerBound: votingPowerBound.toNumber(),
      idleDuration: idleDuration.toNumber(),
    },
  };
}
