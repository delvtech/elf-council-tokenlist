import { Provider } from "@ethersproject/abstract-provider";
import { GSCVaultInfo } from "src/types";
export declare function getGscVaultInfo(provider: Provider, chainId: number, tokenAddress: string, name: string): Promise<GSCVaultInfo>;
