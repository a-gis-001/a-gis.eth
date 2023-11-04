# a-gis.eth

This is the repo for the a-gis.eth static website.

## Republish updates.

To re-publish, do the following.

```
HASH=$(ipfs add -q index.html)
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


