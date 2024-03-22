const express = require('express');
const EngagementActivity = require('../models/EngagementActivity');
const User = require('../models/User');
const router = express.Router();

// Endpoint to log a new engagement activity
router.post('/logActivity', async (req, res) => {
  try {
    const { activityType, userId, reward } = req.body;
    const activity = await EngagementActivity.create({ activityType, userId, reward });
    console.log(`New engagement activity logged: ${activityType} for user ${userId}`);

    // Update user's engagement score
    const user = await User.findById(userId);
    if (!user) {
      console.log('User not found');
      return res.status(404).send('User not found');
    }
    user.engagementScore += reward; // Assuming the 'reward' directly translates to engagement score
    await user.save();
    console.log(`User ${userId}'s engagement score updated to ${user.engagementScore}`);

    res.status(201).json(activity);
  } catch (error) {
    console.error('Error logging activity:', error);
    res.status(500).send(error.message);
  }
});

// Endpoint to update engagement score directly (additional endpoint based on task description)
router.post('/updateEngagementScore', async (req, res) => {
  try {
    const { userId, score } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      console.log('User not found during engagement score update');
      return res.status(404).send('User not found');
    }
    user.engagementScore += score;
    await user.save();
    console.log(`Engagement score for user ${userId} updated successfully to ${user.engagementScore}`);

    res.status(200).json({ message: 'Engagement score updated successfully', engagementScore: user.engagementScore });
  } catch (error) {
    console.error('Error updating engagement score:', error);
    res.status(500).send(error.message);
  }
});

module.exports = router;