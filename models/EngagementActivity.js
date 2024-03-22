const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const engagementActivitySchema = new mongoose.Schema({
  activityType: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  reward: { type: Number, required: true }
});

engagementActivitySchema.plugin(uniqueValidator);

const EngagementActivity = mongoose.model('EngagementActivity', engagementActivitySchema);

module.exports = EngagementActivity;