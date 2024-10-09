# Crowdstaking

With foundry, nodejs etc installed

### Install dependencies

Node modules and foundry dependencies for compiling the smart contracts.

```sh
$ pnpm install
$ forge install
```

### Start local node

Anvil starts a local fork from the most recent block based on the rpc url provided. The chain id is used to identify the anvil network in the app config. Block time is 5 seconds to match gnosis chain.

```sh
$ anvil --fork-url https://rpc.gnosis.gateway.fm --chain-id 31337 --block-time 5
```

### Setup wallet

We also need a wallet for working locally. To set this up take the private key for the first wallet in the list displayed when you start anvil and add this account to metamask. This is the `DEV_ACCOUNT` address in the setup script.

Because of how the distributor contract works the developer wallet needs to hold some bread before we deploy the contracts for us to be able to vote. The setup script takes care of this as well as funding the wallet with LP tokens which is needed for the LP locking feature.

```sh
$ pnpm run chain:setup
```

### Deploy contracts

We have the bread smart contracts in this repo as a submodule so we can compile and deploy any version we like to our anvil node.

This will run the solidity script in contracts/script/DeployLocal.s.sol to deploy both the yield distributor contract (voting) and the buttered bread contract (lp token locking). Dont' worry about the bread contract itself as it rarely changes.

_todo: write deployed contract addresses to JSON file to import in app config._

```sh
$ cd contracts
$ forge script script/DeployLocal.s.sol:Deploy --broadcast --rpc-url http://localhost:8545 --private-key 0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6 --legacy
```

### What else?

Dont forget to start the dev server

```sh
$ pnpm run dev
```
