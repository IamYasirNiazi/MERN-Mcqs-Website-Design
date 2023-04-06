import mongoose from "mongoose"
const Schema = mongoose.Schema

const DataSchema = new Schema({
  category: {
    type: String,
    required: [true, 'Question is required'],
    trim: true,
    unique: true,
  },
  question: {
    type: String,
    required: [true, 'Question is required'],
    trim: true,
    unique: true,
  },
  options: {
    type: Array,
    required: [true, 'Options are required'],
    trim: true,
  },
  answer: {
    type: String,
    required: [true, 'Answer is required'],
    trim: true,
  }
})

const Data = mongoose.models.Data || mongoose.model('Data', DataSchema);

export default Data;