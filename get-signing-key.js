const fsPromises = require('fs/promises')
const Name = require('w3name')

function pad(n, width, z = '0') {
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}

function arrayBufferToHexString(buf) {
  const view = new Uint8Array(buf)
  const hex = Array.from(view).map(v => pad(v.toString(16), 2))
  return hex.join('')
}

;(async () => {
  const name = await Name.create()
  const signingKey = arrayBufferToHexString(name.key.bytes)
  await fsPromises.writeFile('ipns.txt',name.toString())
  console.log(`secret signing key:`,signingKey)
})()

