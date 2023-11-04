# a-gis.eth

https://a-gis-001.github.io/a-gis.eth/

This is the repo for the a-gis.eth static website.

## Republish updates.

To re-publish, do the following.

```
ipfs add -q --cid-version=1 index.html >ipfs.txt
HASH=$(cat ipfs.txt)
sed "s|HASH|$HASH|g" template.yml >.github/workflows/ipns-publish.yml
```

## One-time setup.

This uses the w3name signing key as shown in
https://github.com/pawanpaudel93/w3name-action.

You only need to do this once.

```
npm install w3name
node get-signing-key.js
# outputs signing key that should become secret on github
```


