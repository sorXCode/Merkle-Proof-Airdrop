import { ethers } from "hardhat";
import { Demo } from "../typechain/Demo";

async function deploy() {
  console.log("deploying demo1");
  const contractFactory1 = await ethers.getContractFactory("Demo");
  const demoContract1 = await contractFactory1.deploy();
  await demoContract1.deployed();
  console.log("Demo contract deployed to ", demoContract1.address);



  console.log("deploying Demo2");
  const contractFactory2 = await ethers.getContractFactory("Demo2");
  const demoContract2 = await contractFactory2.deploy();
  await demoContract2.deployed();
  console.log("Demo2 contract deployed to ", demoContract2.address);

  return [demoContract1.address, demoContract2.address];
}

async function interact(contrAddr: string) {
  console.log("interacting with ", contrAddr);
  const demoContract: Demo = await ethers.getContractAt("Demo", contrAddr);
  let secret = await demoContract.secret();
  console.log("At start", secret);

  await demoContract.setSecret("secret-exposed!!");
  secret = await demoContract.secret();
  console.log("At end", secret, "\n\n");
}

async function runner() {
  console.log("inside runner");
  const addrs: Array<string> = await deploy();

  for (let index = 0; index < addrs.length; index++) {
    const contrAddr: string = addrs[index];
    await interact(contrAddr);
  }
}

runner();
