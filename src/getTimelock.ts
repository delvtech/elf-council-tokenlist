import { Provider } from '@ethersproject/abstract-provider';
import { Timelock__factory } from 'elf-council-typechain';

import { TimelockInfo } from './types';

export async function getTimelockInfo(
  provider: Provider,
  chainId: number,
  tokenAddress: string,
  name: string
): Promise<TimelockInfo> {
  const timelockContract = Timelock__factory.connect(tokenAddress, provider);

  const waitTime = await timelockContract.waitTime();

  return {
    chainId,
    address: tokenAddress,
    name,
    decimals: 0,
    symbol: '',
    extensions: {
      waitTime: waitTime.toString(),
    },
  };
}
