const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true,
    trim: true
  },
  coverImage: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Desarrollo Web', 'Inteligencia Artificial', 'Desarrollo Móvil', 'Tecnología', 'Negocios']
  },
  tags: [{
    type: String,
    trim: true
  }],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  },
  readTime: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

// Índices para búsqueda
postSchema.index({ title: 'text', content: 'text', tags: 'text' });

module.exports = mongoose.model('Post', postSchema); 