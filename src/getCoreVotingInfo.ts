import { HardhatRuntimeEnvironment } from "hardhat/types";
import { CoreVotingContractInfo } from "src/types";
import { CoreVoting__factory } from "types";

export async function getCoreVotingInfo(
  hre: HardhatRuntimeEnvironment,
  chainId: number,
  tokenAddress: string,
  name: string
): Promise<CoreVotingContractInfo> {
  const { provider } = hre.ethers;
  const coreVotingContract = CoreVoting__factory.connect(
    tokenAddress,
    provider
  );

  const baseQuorum = await coreVotingContract.baseQuorum();
  const lockDuration = await coreVotingContract.lockDuration();
  const minProposalPower = await coreVotingContract.minProposalPower();
  const extraVoteTime = await coreVotingContract.extraVoteTime();
  const dayInBlocks = await coreVotingContract.DAY_IN_BLOCKS();

  return {
    chainId,
    address: tokenAddress,
    name,
    decimals: 0,
    symbol: "",
    extensions: {
      dayInBlocks: dayInBlocks.toNumber(),
      baseQuorum: baseQuorum.toNumber(),
      lockDuration: lockDuration.toNumber(),
      minProposalPower: minProposalPower.toNumber(),
      extraVoteTime: extraVoteTime.toNumber(),
    },
  };
}
