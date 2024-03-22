const Web3 = require('web3');
const contract = require('@truffle/contract');
require('dotenv').config();

// Replace 'http://localhost:8545' with the URL for your blockchain network
const networkURL = process.env.BLOCKCHAIN_NETWORK_URL; 
const web3 = new Web3(new Web3.providers.HttpProvider(networkURL));

// Correct the path to your Truffle build output for the TacoDAO contract
const tacoDAOTruffleContract = require('../build/contracts/TacoDAO.json');
const TacoDAO = contract(tacoDAOTruffleContract);
TacoDAO.setProvider(web3.currentProvider);

let tacoDAOInstancePromise = (async () => {
  try {
    const instance = await TacoDAO.at(process.env.CONTRACT_ADDRESS);
    console.log("TacoDAO contract instance created successfully.");
    return instance;
  } catch (error) {
    console.error("Error creating TacoDAO contract instance:", error);
    throw error;
  }
})();

module.exports = { web3, tacoDAOInstancePromise };