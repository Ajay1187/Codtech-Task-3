const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, default: '' },
  lastEdited: { type: Date, default: Date.now },
  collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Document', DocumentSchema);
