import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    trim: true,
    required: true,
    enum: ["male", "female", "custom"],
  },
  number: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  location: {
    type: String,
    trim: true,
    required: true,
  },
  photo: {
    type: String,
    default: null,
  }
});

// Create the "Teacher" model using the schema
const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
