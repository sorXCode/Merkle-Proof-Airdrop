import { ethers } from "hardhat";

async function main() {
  const contractFactory = await ethers.getContractFactory("Demo");
  const demoContract = await contractFactory.deploy();
  await demoContract.deployed();

  console.log("Demo contract deployed to ", demoContract.address);
}

main();
