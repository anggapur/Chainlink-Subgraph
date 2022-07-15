# Chainlink-Mumbai-Subgraph
Subgraph for indexing Chainlink Price Feed in Mumbai Network 

The Graph is a tool for for indexing events emitted on the Ethereum blockchain. It provides you with an easy-to-use GraphQL API. <br/>

To learn more, check out the [The Graph documentation](https://thegraph.com/docs).


## Description
Currently indexing USDT/USD, USDC/USD & DAI/USD Chainlunk Price Feed in Mumbai Network. <br> Read : https://docs.chain.link/docs/matic-addresses/#Mumbai%20Testnet

## Structure
### Entity
- Feed
- Round

## Deploy

#### `npm run codegen`

Generates AssemblyScript types for smart contract ABIs and the subgraph schema.

#### `npm run build`

Compiles the subgraph to WebAssembly.

#### `npm run auth`

Before deploying your subgraph, you need to sign up on the
[Graph Explorer](https://thegraph.com/explorer/). There, you will be given an access token. 

#### `npm run deploy`

Deploys the subgraph to the official Graph Node.<br/>

You may also want to [read more about the hosted service](https://thegraph.com/docs/quick-start#hosted-service).

