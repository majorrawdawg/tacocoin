const mongoose = require('mongoose');

const artistProfileSchema = new mongoose.Schema({
  artistName: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  memeCoinName: { type: String, required: true },
  memeCoinSymbol: { type: String, required: true },
  memeCoinAddress: { type: String, required: true } // Address of the deployed meme coin contract
});

const ArtistProfile = mongoose.model('ArtistProfile', artistProfileSchema);

module.exports = ArtistProfile;