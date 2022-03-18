// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
const hre = require("hardhat");

async function main() {
  const valid = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
  const proof = [
    "0x00314e565e0574cb412563df634608d76f5c59d9f817e85966100ec1d48005c0",
    "0x8a3552d60a98e0ade765adddad0a2e420ca9b1eef5f326ba7ab860bb4ea72c94",
  ];

  // @ts-ignore
  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [valid],
  });

  // // @ts-ignore
  // await hre.network.provider.request({
  //   method: "hardhat_setBalance",
  //   params: [valid, "0x1000000000000000000"],
  // });

  const signer = await ethers.getSigner(valid);

  console.log(
    "Ether balance => ",
    await (await signer.getBalance()).toString()
  );
  const contrAddr = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
  let sorxcode = await ethers.getContractAt("SorxcodeToken", contrAddr);

  sorxcode = sorxcode.connect(signer);
  console.log(
    "SXX balance before claim => ",
    (await sorxcode.balanceOf(signer.address)).toString()
  );

  await sorxcode.claim(proof);

  console.log(
    "SXX balance after claim => ",
    (await sorxcode.balanceOf(signer.address)).toString()
  );
  sorxcode.balanceOf(signer.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
