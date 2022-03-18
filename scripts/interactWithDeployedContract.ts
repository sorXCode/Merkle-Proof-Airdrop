import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { Demo } from "../typechain/Demo";

async function interact() {
  const contrAddr = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
  const demoContract: Demo = await ethers.getContractAt("Demo", contrAddr);
  let secret = await demoContract.secret();
  console.log("At start", secret);

  await demoContract.setSecret("secret-exposed!!");
  secret = await demoContract.secret();
  console.log("At end", secret);
}

interact();
