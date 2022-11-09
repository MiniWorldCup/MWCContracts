const { ethers, upgrades } = require("hardhat");

async function main() {
  const MWC = await ethers.getContractFactory("MWC");
  const MWCInstance = await upgrades.deployProxy(MWC, ["0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D","MiniWorld Cup","MWC",18],{kind:"uups"});
  await MWCInstance.deployed();
  console.log("Token is deployed to:", MWCInstance.address);
}

main();