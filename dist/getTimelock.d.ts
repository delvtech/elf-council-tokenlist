import { Provider } from "@ethersproject/abstract-provider";
import { TimelockInfo } from "src/types";
export declare function getTimelockInfo(provider: Provider, chainId: number, tokenAddress: string, name: string): Promise<TimelockInfo>;
