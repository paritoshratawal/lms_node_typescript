import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  created: {
    at: {
      default: Date.now,
      required: true,
      type: Date
    },
    by: {
      required: true,
      type: String
    }
    
  },
  modified: {
    at: {
      default: Date.now,
      required: true,
      type: Date
    },
    by: {
      required: true,
      type: String
    }
  },
  email: {
    match: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
    required: true,
    type: String,
    unique: true
  },
  first_name: {
    required: true,
    type: String
  },
  last_name: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  subscription: {
    required: true,
    type: String
  },
  course: {
    required: false,
    type: String
  },
  login_type: {
    required: true,
    type: String
  }
})

const User_Model = mongoose.model<mongoose.Document>('user', schema);
export default User_Model;