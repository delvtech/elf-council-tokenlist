import { Airdrop__factory, CoreVoting__factory, GSCVault__factory, LockingVault__factory, OptimisticGrants__factory, ERC20Permit__factory, OptimisticRewards__factory, Timelock__factory, Treasury__factory } from 'elf-council-typechain';
import { formatUnits } from 'ethers/lib/utils';

var addresses = {
	airdrop: "0x90123455668bA2B12CA76962a88c2e1c20B17F62",
	coreVoting: "0x5264a36f4839F45d753701B5BDFc66c3f4ad2F96",
	elementToken: "0xa7E598Ab2c0df4A55feBFDD32ee6Cc64d2aE54eA",
	gscCoreVoting: "0x43161786d23627C02f7D3AFD20489924b491b009",
	gscVault: "0xf29658584ED4EB1FD22521D5A9437B20c9925dd6",
	lockingVault: "0xeA1f4ec61FEe5a7A6EC1A323e1d042282068a4d9",
	optimisticGrants: "0x2e25d3bfACF854c9b80f4A5A66ca0C32950f6c6d",
	optimisticRewardsVault: "0x847D90e827a11Da7c124992905CDf1F03F330fA8",
	timeLock: "0x73E0C9AdF3E0f5535dA3A0b4265Dd73962643426",
	treasury: "0xa465170e7049d1D048ce179Cc0c864d13223a9E2",
	vestingVault: "0x40E10a6C50b2Cf77a804aA9e32D69aEc919E3765"
};
var chainId = 5;
var goerliAddressListJson = {
	addresses: addresses,
	chainId: chainId
};

var name = "Council goerli token list";
var logoURI = "https://element.fi/logo.svg";
var timestamp = "2021-12-06T18:45:02.121Z";
var version = {
	major: 0,
	minor: 1,
	patch: 0
};
var tokens = [
	{
		chainId: 5,
		address: "0xa7E598Ab2c0df4A55feBFDD32ee6Cc64d2aE54eA",
		symbol: "ttk",
		decimals: 18,
		name: "testtoken"
	},
	{
		chainId: 5,
		address: "0x5264a36f4839F45d753701B5BDFc66c3f4ad2F96",
		name: "Element Core Voting Contract",
		decimals: 0,
		symbol: "",
		extensions: {
			dayInBlocks: 6496,
			baseQuorum: 10000,
			lockDuration: 19488,
			minProposalPower: 500,
			extraVoteTime: 32480
		}
	},
	{
		chainId: 5,
		address: "0x43161786d23627C02f7D3AFD20489924b491b009",
		name: "Element GSC Core Voting Contract",
		decimals: 0,
		symbol: "",
		extensions: {
			dayInBlocks: 6496,
			baseQuorum: 5,
			lockDuration: 19488,
			minProposalPower: 1,
			extraVoteTime: 32480
		}
	},
	{
		chainId: 5,
		address: "0xeA1f4ec61FEe5a7A6EC1A323e1d042282068a4d9",
		name: "Element Locking Vault",
		decimals: 0,
		symbol: "",
		extensions: {
			token: "0xa7E598Ab2c0df4A55feBFDD32ee6Cc64d2aE54eA",
			staleBlockLag: 100000000
		}
	},
	{
		chainId: 5,
		address: "0x40E10a6C50b2Cf77a804aA9e32D69aEc919E3765",
		name: "Element Vesting Vault",
		decimals: 0,
		symbol: "",
		extensions: {
			token: "0xa7E598Ab2c0df4A55feBFDD32ee6Cc64d2aE54eA",
			staleBlockLag: 100000000
		}
	},
	{
		chainId: 5,
		address: "0xf29658584ED4EB1FD22521D5A9437B20c9925dd6",
		name: "Element Governance Steering Committee Vault",
		decimals: 0,
		symbol: "",
		extensions: {
			coreVoting: "0x43161786d23627C02f7D3AFD20489924b491b009",
			votingPowerBound: 500,
			idleDuration: 345600
		}
	},
	{
		chainId: 5,
		address: "0x847D90e827a11Da7c124992905CDf1F03F330fA8",
		name: "Element Optimistic Rewards Vault",
		decimals: 0,
		symbol: "",
		extensions: {
			pendingRoot: "0x0000000000000000000000000000000000000000000000000000000000000000",
			proposalTime: 0,
			proposer: "0xcF3b7bcBbcEFF836F81f6EAd914706E699267bca",
			challengePeriod: 604800,
			rewardsRoot: "0xb3bc27033f96d4ab101b807a06fef330523d308e202f9733d748412c008251aa",
			lockingVault: "0xA0bfb97aC29Fc4034db52F8783efdaA25A070E1B",
			token: "0xa7E598Ab2c0df4A55feBFDD32ee6Cc64d2aE54eA"
		}
	},
	{
		chainId: 5,
		address: "0x90123455668bA2B12CA76962a88c2e1c20B17F62",
		name: "Element Airdrop Contract",
		decimals: 0,
		symbol: "",
		extensions: {
			rewardsRoot: "0x9aafc9b1d8798b80c68d556519e69c64fbe5a4b205bbdccec12375353a1bf784",
			lockingVault: "0xFd6e33F5321E5E138ad354F412f7eD9083757dae",
			expiration: "9999999999",
			token: "0x2b1a91De5B9C3Ad6439eeAeD0E481F8cf6E22601"
		}
	},
	{
		chainId: 5,
		address: "0xa465170e7049d1D048ce179Cc0c864d13223a9E2",
		name: "Element Treasury",
		decimals: 0,
		symbol: "",
		extensions: {
			owner: "0xcF3b7bcBbcEFF836F81f6EAd914706E699267bca"
		}
	},
	{
		chainId: 5,
		address: "0x73E0C9AdF3E0f5535dA3A0b4265Dd73962643426",
		name: "Element Timelock",
		decimals: 0,
		symbol: "",
		extensions: {
			waitTime: "1000"
		}
	}
];
var goerliTokenListJson = {
	name: name,
	logoURI: logoURI,
	timestamp: timestamp,
	version: version,
	tokens: tokens
};

async function getAirdropInfo(provider, chainId, tokenAddress, name) {
    const airdropContract = Airdrop__factory.connect(tokenAddress, provider);
    const rewardsRootPromise = airdropContract.rewardsRoot();
    const lockingVaultPromise = airdropContract.lockingVault();
    const expirationPromise = airdropContract.expiration();
    const tokenPromise = airdropContract.token();
    const [rewardsRoot, lockingVault, expiration, token] = await Promise.all([
        rewardsRootPromise,
        lockingVaultPromise,
        expirationPromise,
        tokenPromise,
    ]);
    return {
        chainId,
        address: tokenAddress,
        name,
        decimals: 0,
        symbol: "",
        extensions: {
            rewardsRoot,
            lockingVault,
            expiration: expiration.toString(),
            token,
        },
    };
}

async function getCoreVotingInfo(provider, chainId, tokenAddress, name) {
    const coreVotingContract = CoreVoting__factory.connect(tokenAddress, provider);
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
        symbol: '',
        extensions: {
            dayInBlocks: dayInBlocks.toNumber(),
            baseQuorum: baseQuorum.toNumber(),
            lockDuration: lockDuration.toNumber(),
            minProposalPower: minProposalPower.toNumber(),
            extraVoteTime: extraVoteTime.toNumber(),
        },
    };
}

async function getGscVaultInfo(provider, chainId, tokenAddress, name) {
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

async function getLockingVaultInfo(provider, chainId, tokenAddress, name) {
    const lockingVaultContract = LockingVault__factory.connect(tokenAddress, provider);
    const tokenPromise = lockingVaultContract.token();
    const staleBlockLagPromise = lockingVaultContract.staleBlockLag();
    const [token, staleBlockLag] = await Promise.all([
        tokenPromise,
        staleBlockLagPromise,
    ]);
    return {
        chainId,
        address: tokenAddress,
        name,
        decimals: 0,
        symbol: "",
        extensions: {
            token,
            staleBlockLag: staleBlockLag.toNumber(),
        },
    };
}

async function getOptimisticGrantsInfo(provider, chainId, tokenAddress, name) {
    const optimisticGrantsContract = OptimisticGrants__factory.connect(tokenAddress, provider);
    const tokenPromise = optimisticGrantsContract.token();
    const solvencyPromise = optimisticGrantsContract.solvency();
    const [token, solvency] = await Promise.all([tokenPromise, solvencyPromise]);
    const tokenContract = ERC20Permit__factory.connect(tokenAddress, provider);
    const tokenDecimals = await tokenContract.decimals();
    return {
        chainId,
        address: tokenAddress,
        name,
        decimals: 0,
        symbol: '',
        extensions: {
            token,
            solvency: formatUnits(solvency, tokenDecimals),
        },
    };
}

async function getOptimisticRewardsVaultInfo(provider, chainId, tokenAddress, name) {
    const optimisticRewardsVaultContract = OptimisticRewards__factory.connect(tokenAddress, provider);
    const pendingRootPromise = optimisticRewardsVaultContract.pendingRoot();
    const proposalTimePromise = optimisticRewardsVaultContract.proposalTime();
    const proposerPromise = optimisticRewardsVaultContract.proposer();
    const challengePeriodPromise = optimisticRewardsVaultContract.challengePeriod();
    const rewardsRootPromise = optimisticRewardsVaultContract.rewardsRoot();
    const lockingVaultPromise = optimisticRewardsVaultContract.lockingVault();
    const tokenPromise = optimisticRewardsVaultContract.token();
    const [pendingRoot, proposalTime, proposer, challengePeriod, rewardsRoot, lockingVault, token,] = await Promise.all([
        pendingRootPromise,
        proposalTimePromise,
        proposerPromise,
        challengePeriodPromise,
        rewardsRootPromise,
        lockingVaultPromise,
        tokenPromise,
    ]);
    return {
        chainId,
        address: tokenAddress,
        name,
        decimals: 0,
        symbol: "",
        extensions: {
            pendingRoot,
            proposalTime: proposalTime.toNumber(),
            proposer,
            challengePeriod: challengePeriod.toNumber(),
            rewardsRoot,
            lockingVault,
            token,
        },
    };
}

async function getTimelockInfo(provider, chainId, tokenAddress, name) {
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

async function getTreasuryInfo(provider, chainId, tokenAddress, name) {
    const treasuryContract = Treasury__factory.connect(tokenAddress, provider);
    const owner = await treasuryContract.owner();
    return {
        chainId,
        address: tokenAddress,
        name,
        decimals: 0,
        symbol: '',
        extensions: {
            owner,
        },
    };
}

async function getVotingTokenInfo(provider, chainId, tokenAddress) {
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

async function getTokenList(provider, addressesJson, name) {
    const { chainId, addresses: { elementToken, coreVoting, gscCoreVoting, timeLock, lockingVault, vestingVault, optimisticRewardsVault, airdrop, optimisticGrants, treasury, gscVault, }, } = addressesJson;
    const elementTokenInfo = await getVotingTokenInfo(provider, chainId, elementToken);
    const coreVotingInfo = await getCoreVotingInfo(provider, chainId, coreVoting, "Element Core Voting Contract");
    const gscCoreVotingInfo = await getCoreVotingInfo(provider, chainId, gscCoreVoting, "Element GSC Core Voting Contract");
    const lockingVaultInfo = await getLockingVaultInfo(provider, chainId, lockingVault, "Element Locking Vault");
    const vestingVaultInfo = await getLockingVaultInfo(provider, chainId, vestingVault, "Element Vesting Vault");
    const gscVaultInfo = await getGscVaultInfo(provider, chainId, gscVault, "Element Governance Steering Committee Vault");
    const optimisticRewardsVaultInfo = await getOptimisticRewardsVaultInfo(provider, chainId, optimisticRewardsVault, "Element Optimistic Rewards Vault");
    let optimisticGrantsInfo;
    try {
        optimisticGrantsInfo = await getOptimisticGrantsInfo(provider, chainId, optimisticGrants, "Element Optimistic Grants Vault");
    }
    catch (error) {
        console.log("error fetching optimisitc grants info", error);
    }
    const airdropInfo = await getAirdropInfo(provider, chainId, airdrop, "Element Airdrop Contract");
    const treasuryInfo = await getTreasuryInfo(provider, chainId, treasury, "Element Treasury");
    const timelockInfo = await getTimelockInfo(provider, chainId, timeLock, "Element Timelock");
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
        ].filter((t) => !!t),
    };
    return tokenList;
}

// TODO: fix this typecast
const goerliTokenList = goerliTokenListJson;
const goerliAddressList = goerliAddressListJson;

export { getTokenList, goerliAddressList, goerliTokenList };
