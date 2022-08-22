async function main() {

    const [deployer] = await ethers.getSigners();
  
    const Auction = await ethers.getContractFactory("Auction");
    const auction = await Auction.deploy();
    console.log("Contract address: " + auction.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });