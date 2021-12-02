import { HardhatRuntimeEnvironment } from "hardhat/types";
import { TreasuryInfo } from "src/types";
import { Treasury__factory } from "types";

export async function getTreasuryInfo(
  hre: HardhatRuntimeEnvironment,
  chainId: number,
  tokenAddress: string,
  name: string
): Promise<TreasuryInfo> {
  const { provider } = hre.ethers;
  const treasuryContract = Treasury__factory.connect(tokenAddress, provider);

  const owner = await treasuryContract.owner();

  return {
    chainId,
    address: tokenAddress,
    name,
    decimals: 0,
    symbol: "",
    extensions: {
      owner,
    },
  };
}
