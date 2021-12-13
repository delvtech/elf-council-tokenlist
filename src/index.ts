import { TokenList } from "@uniswap/token-lists";
import { AddressesJsonFile } from "src/addresses/AddressesJsonFile";
import goerliAddressListJson from "src/addresses/goerli.addresses.json";
// TODO: add this when we have it
// export const mainnetTokenList: TokenList = ;
import goerliTokenListJson from "src/tokenlists/goerli.tokenlist.json";

export const goerliTokenList: TokenList = goerliTokenListJson as TokenList;
export const goerliAddressList: AddressesJsonFile = goerliAddressListJson;

export { getTokenList } from "src/getTokenList";

export * from "src/types";
