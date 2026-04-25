const hre = require("hardhat");

async function main() {
    const CrimeChain = await hre.ethers.getContractFactory("CrimeChain");
    const contract = await CrimeChain.deploy();

    await contract.deployed();

    console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});