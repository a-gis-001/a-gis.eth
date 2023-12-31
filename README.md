# a-gis.eth

Backup URL: https://a-gis-001.github.io/a-gis.eth/

This is the repo for the a-gis.eth static website.

## Republish updates.

To re-publish, do the following.

```
# Update index.html.
source update.sh
```

## One-time setup.

You only need to do this once.

```
source setup.sh
```

## Peers

To improve availability of IPFS data do this.

```
for n in $(cat peers.txt);
do 
ipfs swarm connect $n
done
```

The peers.txt data comes from https://docs.ipfs.tech/how-to/peering-with-content-providers/#content-provider-list
which I copied and pasted to a file and then ran `grep -o -E '/.*' raw.txt` to get the addresses.

Not all succeeded.

Later it seems like cloudflare is the solution.

https://developers.cloudflare.com/web3/ipfs-gateway/reference/peering-with-content-providers/

```
open https://cloudflare-ipfs.com/ipns/$(cat ipns.txt)
open https://cloudflare-ipfs.com/ipfs/$(cat ipfs.txt)
```

## Logo

```
base64 logo-small.png >logo.txt
```

Copy/paste content in img tag.

