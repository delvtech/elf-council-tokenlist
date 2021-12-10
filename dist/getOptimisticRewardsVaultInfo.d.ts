import { Provider } from "@ethersproject/abstract-provider";
import { OptimisticRewardsVaultInfo } from "src/types";
export declare function getOptimisticRewardsVaultInfo(provider: Provider, chainId: number, tokenAddress: string, name: string): Promise<OptimisticRewardsVaultInfo>;
