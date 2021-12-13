import { Provider } from '@ethersproject/abstract-provider';
import { TokenInfo } from '@uniswap/token-lists';
import { ERC20Permit__factory } from 'elf-council-typechain';

export async function getVotingTokenInfo(
  provider: Provider,
  chainId: number,
  tokenAddress: string
): Promise<TokenInfo> {
  const tokenContract = ERC20Permit__factory.connect(tokenAddress, provider);

  const name = await tokenContract.name();
  const symbol = await tokenContract.symbol();
  const decimals = await tokenContract.decimals();

  return {
    chainId,
    address: tokenAddress,
    symbol,
    decimals,
    name,
  };
}
