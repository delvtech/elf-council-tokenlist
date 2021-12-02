import { TokenInfo } from "@uniswap/token-lists";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { ERC20Permit__factory } from "types/factories/ERC20Permit__factory";

export async function getVotingTokenInfo(
  hre: HardhatRuntimeEnvironment,
  chainId: number,
  tokenAddress: string
): Promise<TokenInfo> {
  const { provider } = hre.ethers;
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
