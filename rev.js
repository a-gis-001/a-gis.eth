const Name = require('w3name');
const fsPromises = require('fs/promises')

async function loadSigningKey(filename) {
  const bytes = await fsPromises.readFile(filename);
  const name = await Name.from(bytes);
  return name;
}

;(async () => {

  // since we don't have a previous revision, we use Name.v0 to create the initial revision
  const ipns = await fsPromises.readFile('ipns.txt');
  const lastName = Name.parse(ipns.toString());
  console.log(lastName)
  const lastRevision = await Name.resolve(lastName);
  
  const ipfs = await fsPromises.readFile('ipfs.txt');
  const nextValue = '/ipfs/'+ipfs.toString();
  const nextRevision = await Name.increment(lastRevision, nextValue);
  console.log(nextRevision);

  const name = await loadSigningKey('signing_key.bin');
  await Name.publish(revision, name.key);
})()


