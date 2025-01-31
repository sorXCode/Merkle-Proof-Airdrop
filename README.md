# Merkle Proof Airdrop

## Overview
Merkle Proof Airdrop is a smart contract-based airdrop system that leverages Merkle Trees to efficiently verify eligible recipients. This ensures a secure and gas-efficient token distribution process, allowing users to claim their airdrop using cryptographic proofs.

## Features
- **Gas-Efficient Claims** – Users prove eligibility without storing large data on-chain.
- **Secure Verification** – Uses Merkle Trees to validate claims.
- **Scalable Distribution** – Supports airdrops to thousands of recipients.
- **Flexible Integration** – Can be used for token, NFT, and reward distributions.

## Tech Stack
- **Solidity** – Smart contract development
- **Hardhat** – Development, testing, and deployment framework
- **Merkle Trees** – Efficient data structure for claim verification
- **Ethereum & EVM-Compatible Chains** – Deployable on multiple networks

## Installation

Clone the repository:
```sh
git clone https://github.com/sorXCode/Merkle-Proof-Airdrop.git
cd Merkle-Proof-Airdrop
```

Install dependencies:
```sh
yarn install
```

## Deployment

Compile the smart contract:
```sh
npx hardhat compile
```

Run tests:
```sh
npx hardhat test
```

Deploy to a local blockchain:
```sh
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

## Usage
1. Generate a Merkle Tree from eligible addresses.
2. Deploy the smart contract with the Merkle root.
3. Users verify eligibility and claim their airdrop using a Merkle proof.

---

[view contract here](https://rinkeby.etherscan.io/address/0xeD621C85090c7b00e24E6F15D4FDb5fD5133327C)

🚀 **Efficiently distribute tokens with Merkle Proof Airdrop!**
