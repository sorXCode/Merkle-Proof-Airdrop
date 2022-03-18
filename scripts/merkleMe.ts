const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  const addresses = [
    "0x4DC85F79EDa8e38F14692ebC34Dd0e9e330A4228",
    "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
    "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
    "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc",
  ];

  const leafNodes = addresses.map((addr) => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  const rootHash = merkleTree.getHexRoot();

  console.log("Merkle Tree \n", merkleTree.toString());
  console.log("Root Hash\n\t", rootHash.toString());
  console.log(
    addresses[0],
    "'s Proof\n\t",
    merkleTree.getHexProof(keccak256(addresses[0]))
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Merkle Tree
//  └─ 77094d6521d672cc0f127997c8b6d804046ba148cd33d611efc75cf03946dbcf
//    ├─ 1d4b6ddccdaa9497ec108cc24cf4f654bb2beb4b5fb2299efbd4c442e046132a
//    │  ├─ 731c66644e17b5ba76c3b61e534a5a72c8b656f022a9aa930b620919ffd73417
//    │  └─ e9707d0e6171f728f7473c24cc0432a9b07eaaf1efed6a137a4a8c12c79552d9
//    └─ 343750465941b29921f50a28e0e43050e5e1c2611a3ea8d7fe1001090d5e1436
//       ├─ 00314e565e0574cb412563df634608d76f5c59d9f817e85966100ec1d48005c0
//       └─ 8a3552d60a98e0ade765adddad0a2e420ca9b1eef5f326ba7ab860bb4ea72c94

// Root Hash
//          0x77094d6521d672cc0f127997c8b6d804046ba148cd33d611efc75cf03946dbcf
// 0x4DC85F79EDa8e38F14692ebC34Dd0e9e330A4228 's Proof
//          [
//   '0xe9707d0e6171f728f7473c24cc0432a9b07eaaf1efed6a137a4a8c12c79552d9',
//   '0x343750465941b29921f50a28e0e43050e5e1c2611a3ea8d7fe1001090d5e1436'
// ]
