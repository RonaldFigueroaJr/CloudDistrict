const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const postSchema = new Schema({
  content: { type: String, required: true },
    image: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  
}, {
  timestamps: true,
});


module.exports = mongoose.model('Post', postSchema);