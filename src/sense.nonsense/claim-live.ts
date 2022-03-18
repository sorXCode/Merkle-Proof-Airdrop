// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  const proof = [
    "0xe9707d0e6171f728f7473c24cc0432a9b07eaaf1efed6a137a4a8c12c79552d9",
    "0x343750465941b29921f50a28e0e43050e5e1c2611a3ea8d7fe1001090d5e1436",
  ];

  const signer = (await ethers.getSigners())[0];

  console.log("signer: ", await signer.address);

  console.log(
    "Ether balance => ",
    await (await signer.getBalance()).toString()
  );

  const contrAddr = "0xeD621C85090c7b00e24E6F15D4FDb5fD5133327C";
  const sorxcode = await ethers.getContractAt("SorxcodeToken", contrAddr);

  console.log(
    "SXX balance before claim => ",
    (await sorxcode.balanceOf(signer.address)).toString()
  );

  await sorxcode.claim(proof);

  console.log(
    "SXX balance after claim => ",
    (await sorxcode.balanceOf(signer.address)).toString()
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
