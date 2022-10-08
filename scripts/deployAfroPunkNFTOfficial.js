const hre = require("hardhat");

async function main() {
  const AfroPunkNFTOfficial = await hre.ethers.getContractFactory("AfroPunkNFTOfficial");
  const afroPunkNFTOfficial = await AfroPunkNFTOfficial.deploy();

  await afroPunkNFTOfficial.deployed();

  console.log("AfroPunkNFTOfficial deployed to:" , afroPunkNFTOfficial.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
