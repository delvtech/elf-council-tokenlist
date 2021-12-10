import { Provider } from '@ethersproject/abstract-provider';
import { TreasuryInfo } from 'src/types';
export declare function getTreasuryInfo(provider: Provider, chainId: number, tokenAddress: string, name: string): Promise<TreasuryInfo>;
