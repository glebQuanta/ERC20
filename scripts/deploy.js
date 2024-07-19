const hre = require('hardhat');

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log('Deploying contracts with the account:', deployer.address);

  const Erc = await hre.ethers.getContractFactory('MShop');
  const erc = await Erc.deploy();

  console.log('Address:', await erc.token());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
