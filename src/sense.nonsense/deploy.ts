// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
// @ts-ignore
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  const Sorxcode = await ethers.getContractFactory("SorxcodeToken");
  const sorxcode = await Sorxcode.deploy(
    "0x77094d6521d672cc0f127997c8b6d804046ba148cd33d611efc75cf03946dbcf"
  );
  await sorxcode.deployed();
  console.log("sorxcode deployed to ", sorxcode.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// BoredApeToken deployed to:       0x4bf010f1b9beDA5450a8dD702ED602A104ff65EE
// BoredApeToken totalSupply:       1000000000000000000
// Balance of  0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 =>   1000000000000000000
// GatedStaker deployed to:         0x40a42Baf86Fc821f972Ad2aC878729063CeEF403
