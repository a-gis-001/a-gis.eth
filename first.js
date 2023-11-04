const Name = require('w3name');
const fsPromises = require('fs/promises')

async function saveSigningKey(name, outputFilename) {
  const bytes = name.key.bytes;
  await fsPromises.writeFile(outputFilename, bytes);
}

;(async () => {
  const name = await Name.create();
  await saveSigningKey(name,'signing_key.bin')
  await fsPromises.writeFile('ipns.txt',name.toString())

  // since we don't have a previous revision, we use Name.v0 to create the initial revision
  const ipfs = await fsPromises.readFile('ipfs.txt');
  const value = '/ipfs/'+ipfs.toString()
  const revision = await Name.v0(name, value);
  console.log(revision)
})()



