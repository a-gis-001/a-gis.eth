ipfs add -q --cid-version=1 index.html >ipfs.txt
ipfs name publish --key=a-gis.eth /ipfs/$(cat ipfs.txt)



