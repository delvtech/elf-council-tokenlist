import { TokenList } from "@uniswap/token-lists";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { AddressesJsonFile } from "src/addresses/AddressesJsonFile";
import { getAirdropInfo } from "src/getAirdropInfo";
import { getCoreVotingInfo } from "src/getCoreVotingInfo";
import { getGscVaultInfo } from "src/getGscVaultInfo";
import { getLockingVaultInfo } from "src/getLockingVaultInfo";
import { getOptimisticGrantsInfo } from "src/getOptimisticGrantsInfo";
import { getOptimisticRewardsVaultInfo } from "src/getOptimisticRewardsVaultInfo";
import { getTimelockInfo } from "src/getTimelock";
import { getTreasuryInfo } from "src/getTreasuryInfo";
import { getVotingTokenInfo } from "src/getVotingTokenInfo";

export async function getTokenList(
  hre: HardhatRuntimeEnvironment,
  addressesJson: AddressesJsonFile,
  name: string
): Promise<TokenList> {
  const {
    chainId,
    addresses: {
      elementToken,
      coreVoting,
      gscCoreVoting,
      timeLock,
      lockingVault,
      vestingVault,
      optimisticRewardsVault,
      airdrop,
      optimisticGrants,
      treasury,
      gscVault,
    },
  } = addressesJson;

  const elementTokenInfo = await getVotingTokenInfo(hre, chainId, elementToken);

  const coreVotingInfo = await getCoreVotingInfo(
    hre,
    chainId,
    coreVoting,
    "Element Core Voting Contract"
  );

  const gscCoreVotingInfo = await getCoreVotingInfo(
    hre,
    chainId,
    gscCoreVoting,
    "Element GSC Core Voting Contract"
  );

  const lockingVaultInfo = await getLockingVaultInfo(
    hre,
    chainId,
    lockingVault,
    "Element Locking Vault"
  );

  const vestingVaultInfo = await getLockingVaultInfo(
    hre,
    chainId,
    vestingVault,
    "Element Vesting Vault"
  );

  const gscVaultInfo = await getGscVaultInfo(
    hre,
    chainId,
    gscVault,
    "Element Governance Steering Committee Vault"
  );

  const optimisticRewardsVaultInfo = await getOptimisticRewardsVaultInfo(
    hre,
    chainId,
    optimisticRewardsVault,
    "Element Optimistic Rewards Vault"
  );

  const optimisticGrantsInfo = await getOptimisticGrantsInfo(
    hre,
    chainId,
    optimisticGrants,
    "Element Optimistic Grants Vault"
  );

  const airdropInfo = await getAirdropInfo(
    hre,
    chainId,
    airdrop,
    "Element Airdrop Contract"
  );

  const treasuryInfo = await getTreasuryInfo(
    hre,
    chainId,
    treasury,
    "Element Treasury"
  );

  const timelockInfo = await getTimelockInfo(
    hre,
    chainId,
    timeLock,
    "Element Timelock"
  );

  const tokenList: TokenList = {
    name,
    logoURI: "https://element.fi/logo.svg",
    timestamp: new Date().toISOString(),
    version: {
      major: 0,
      minor: 1,
      patch: 0,
    },
    tokens: [
      elementTokenInfo,
      coreVotingInfo,
      gscCoreVotingInfo,
      lockingVaultInfo,
      vestingVaultInfo,
      gscVaultInfo,
      optimisticRewardsVaultInfo,
      optimisticGrantsInfo,
      airdropInfo,
      treasuryInfo,
      timelockInfo,
    ],
  };

  return tokenList;
}
