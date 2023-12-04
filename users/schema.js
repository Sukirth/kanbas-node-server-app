// load the mongoose library
import mongoose from "mongoose";
// create the schema
const userSchema = new mongoose.Schema({
    // _id: mongoose.Schema.ObjectId,
    // String field that is required and unique
    username: { type: String, required: true, unique: true },
    // String field that in required but not unique
    password: { type: String, required: true },
    // String fields with no additional configurations
    firstName: String,
    email: String,
    lastName: String,
    // Date field with no configurations
    dob: Date,
    role: {
      // String field
      type: String,
      // allowed string values
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
      // default value if not provided
      default: "USER" },
  },
  // default value if not provided
  { collection: "users" });
export default userSchema;