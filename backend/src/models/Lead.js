const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    required: true
  },
  projectType: {
    type: String,
    enum: ['web', 'mobile', 'desktop', 'consulting', 'other'],
    required: true
  },
  budget: {
    type: String,
    enum: ['< $5,000', '$5,000 - $10,000', '$10,000 - $25,000', '$25,000+'],
    required: true
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'proposal', 'negotiation', 'won', 'lost'],
    default: 'new'
  },
  source: {
    type: String,
    enum: ['website', 'referral', 'social', 'search', 'other'],
    default: 'website'
  },
  notes: [{
    content: String,
    date: {
      type: Date,
      default: Date.now
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Lead', leadSchema); 