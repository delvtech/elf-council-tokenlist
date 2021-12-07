import { TokenList } from "@uniswap/token-lists";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { AddressesJsonFile } from "src/addresses/AddressesJsonFile";
export declare function getTokenList(hre: HardhatRuntimeEnvironment, addressesJson: AddressesJsonFile, name: string): Promise<TokenList>;
