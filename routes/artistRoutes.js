const express = require('express');
const ArtistProfile = require('../models/ArtistProfile');
// Assuming GalaChainClient is a custom client similar to web3.js but for interacting with GalaChain.
const { GalaChainClient } = require('../lib/GalaChainClient');
const router = express.Router();
const MemeCoinContract = require('../contracts/MemeCoin.json');

// Route for artist registration
router.post('/artist/register', async (req, res) => {
  const { artistName, description, memeCoinName, memeCoinSymbol } = req.body;
  
  try {
    // Deploy a new meme coin contract for the artist on GalaChain
    const galaChainClient = new GalaChainClient();
    const accounts = await galaChainClient.getAccounts();
    const MemeCoin = galaChainClient.newContract(MemeCoinContract.abi, MemeCoinContract.bytecode);

    const deployedMemeCoin = await MemeCoin.deploy({
      arguments: [memeCoinName, memeCoinSymbol]
    }).send({ from: accounts[0], gas: '5000000' });

    const memeCoinAddress = deployedMemeCoin.options.address;

    const artistProfile = await ArtistProfile.create({
      artistName,
      description,
      memeCoinName,
      memeCoinSymbol,
      memeCoinAddress
    });

    console.log("Artist profile created successfully with deployed MemeCoin on GalaChain:", artistProfile);
    res.status(201).json(artistProfile);
  } catch (error) {
    console.error("Error registering artist profile and deploying MemeCoin on GalaChain:", error);
    res.status(500).send("Error registering artist profile.");
  }
});

module.exports = router;