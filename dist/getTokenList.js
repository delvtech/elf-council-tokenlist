"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenList = void 0;
const getAirdropInfo_1 = require("src/getAirdropInfo");
const getCoreVotingInfo_1 = require("src/getCoreVotingInfo");
const getGscVaultInfo_1 = require("src/getGscVaultInfo");
const getLockingVaultInfo_1 = require("src/getLockingVaultInfo");
const getOptimisticGrantsInfo_1 = require("src/getOptimisticGrantsInfo");
const getOptimisticRewardsVaultInfo_1 = require("src/getOptimisticRewardsVaultInfo");
const getTimelock_1 = require("src/getTimelock");
const getTreasuryInfo_1 = require("src/getTreasuryInfo");
const getVotingTokenInfo_1 = require("src/getVotingTokenInfo");
async function getTokenList(hre, addressesJson, name) {
    const { chainId, addresses: { elementToken, coreVoting, gscCoreVoting, timeLock, lockingVault, vestingVault, optimisticRewardsVault, airdrop, optimisticGrants, treasury, gscVault, }, } = addressesJson;
    const elementTokenInfo = await (0, getVotingTokenInfo_1.getVotingTokenInfo)(hre, chainId, elementToken);
    const coreVotingInfo = await (0, getCoreVotingInfo_1.getCoreVotingInfo)(hre, chainId, coreVoting, "Element Core Voting Contract");
    const gscCoreVotingInfo = await (0, getCoreVotingInfo_1.getCoreVotingInfo)(hre, chainId, gscCoreVoting, "Element GSC Core Voting Contract");
    const lockingVaultInfo = await (0, getLockingVaultInfo_1.getLockingVaultInfo)(hre, chainId, lockingVault, "Element Locking Vault");
    const vestingVaultInfo = await (0, getLockingVaultInfo_1.getLockingVaultInfo)(hre, chainId, vestingVault, "Element Vesting Vault");
    const gscVaultInfo = await (0, getGscVaultInfo_1.getGscVaultInfo)(hre, chainId, gscVault, "Element Governance Steering Committee Vault");
    const optimisticRewardsVaultInfo = await (0, getOptimisticRewardsVaultInfo_1.getOptimisticRewardsVaultInfo)(hre, chainId, optimisticRewardsVault, "Element Optimistic Rewards Vault");
    const optimisticGrantsInfo = await (0, getOptimisticGrantsInfo_1.getOptimisticGrantsInfo)(hre, chainId, optimisticGrants, "Element Optimistic Grants Vault");
    const airdropInfo = await (0, getAirdropInfo_1.getAirdropInfo)(hre, chainId, airdrop, "Element Airdrop Contract");
    const treasuryInfo = await (0, getTreasuryInfo_1.getTreasuryInfo)(hre, chainId, treasury, "Element Treasury");
    const timelockInfo = await (0, getTimelock_1.getTimelockInfo)(hre, chainId, timeLock, "Element Timelock");
    const tokenList = {
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
exports.getTokenList = getTokenList;
