const express = require('express');
const { tacoDAOInstance, web3 } = require('../lib/web3Client');
const router = express.Router();

router.post('/createProposal', async (req, res) => {
  try {
    const { description, recipient, value } = req.body;
    // Assuming req.session.address contains the address of the user creating the proposal
    // INPUT_REQUIRED {Ensure req.session.address is set to user's address}
    const tx = await tacoDAOInstance.createProposal(description, recipient, web3.utils.toWei(value, 'ether'), { from: req.session.address });
    console.log(`Proposal created successfully: ${JSON.stringify(tx)}`);
    res.json({ msg: 'Proposal created successfully', tx });
  } catch (error) {
    console.error('Error creating proposal:', error.toString());
    res.status(500).send('Error creating proposal');
  }
});

module.exports = router;