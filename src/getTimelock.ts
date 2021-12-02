import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Timelock__factory } from "types";

import { TimelockInfo } from "./types";

export async function getTimelockInfo(
  hre: HardhatRuntimeEnvironment,
  chainId: number,
  tokenAddress: string,
  name: string
): Promise<TimelockInfo> {
  const { provider } = hre.ethers;
  const timelockContract = Timelock__factory.connect(tokenAddress, provider);

  const waitTime = await timelockContract.waitTime();

  return {
    chainId,
    address: tokenAddress,
    name,
    decimals: 0,
    symbol: "",
    extensions: {
      waitTime: waitTime.toString(),
    },
  };
}
