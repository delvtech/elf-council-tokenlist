# Copy the modules and types over to dist/
cp compiled/src/index.js dist
cp compiled/src/types.ts dist
# cp compiled/src/tags.js dist
# cp compiled/src/tags.d.ts dist


# Copy over the *.address.json files to dist/
cp -R src/addresses/*.addresses.json dist
cp -R src/addresses/*.tokenlist.json dist
cp src/addresses/AddressesJsonFile.d.ts dist/AddressesJsonFile.d.ts
cp src/getTokenList dist
