# Copy the modules and types over to dist/
cp build/src/index.js dist
cp build/src/types.js dist
cp build/src/getTokenList.js dist


# Copy over the *.address.json files to dist/
cp -R src/addresses/*.addresses.json dist
cp -R src/*.tokenlist.json dist
cp src/addresses/AddressesJsonFile.ts dist/AddressesJsonFile.d.ts
