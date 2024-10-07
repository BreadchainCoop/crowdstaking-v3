foundry installed

```
# install dependencies
$ pnpm install
$ forge install

# start chain
$ anvil --fork-url https://rpc.gnosis.gateway.fm --chain-id 31337 --block-time 5

# setup dev wallet
$ pnpm run chain:setup

# deploy contracts
$ cd contracts
$ forge script script/DeployLocal.s.sol:Deploy --broadcast --rpc-url http://localhost:8545 --private-key 0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6 --legacy

# start dev server
$ pnpm run dev
```
