import { Provider } from "@ethersproject/abstract-provider";
import { TokenList } from "@uniswap/token-lists";
import { AddressesJsonFile } from "src/addresses/AddressesJsonFile";
export declare function getTokenList(provider: Provider, addressesJson: AddressesJsonFile, name: string): Promise<TokenList>;
