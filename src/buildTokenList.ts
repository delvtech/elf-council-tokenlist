import { getTokenList } from "src/getTokenList";
import hre from "hardhat";

// Figure out which addresses.json to use based on the network that hardhat was
// called with at the command line, eg: "mainnet" or "goerli" for now.
const network = hre.network.name == "hardhat" ? "mainnet" : hre.network.name;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const addressesJson = require(`src/addresses/${network}.addresses.json`);

// Generate the .tokenlist.json file
getTokenList(
  hre,
  addressesJson,
  `Council ${network} token list`,
  `src/${network}.tokenlist.json`
)
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
