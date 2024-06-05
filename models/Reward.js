const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const rewardSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  tacoValue: { type: Number, required: true }
});

rewardSchema.plugin(uniqueValidator);

const Reward = mongoose.model('Reward', rewardSchema);

module.exports = Reward;