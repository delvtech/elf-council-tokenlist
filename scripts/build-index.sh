# MAINNET_TOKENLIST=`cat src/mainnet.tokenlist.json`
GOERLI_TOKENLIST=`cat src/tokenlists/goerli.tokenlist.json`
GOERLI_ADDRESSES=`cat src/addresses/goerli.addresses.json`

echo "
/**
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 *
 * This is the index.ts file that will be compiled to JS and set as the 'main'
 * property in package.json. This makes it possible to use elf-tokenlist as a
 * normal package, ie: import { mainnetTokenList } from 'elf-tokenlist'
 *
 * See scripts/build-index.sh for details.
 *
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 */

import { TokenList } from '@uniswap/token-lists';
import { getTokenList as getTokenListSrc } from 'src/getTokenList';

// TODO: add this when we have it
// export const mainnetTokenList: TokenList = $MAINNET_TOKENLIST;
export const goerliTokenList: TokenList = $GOERLI_TOKENLIST;
export const goerliAddresses: TokenList = $GOERLI_ADDRESSES;
export const getTokenList = getTokenListSrc;
" > src/index.ts


tsc --project tsconfig.json