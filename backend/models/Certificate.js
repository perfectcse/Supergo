import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    recipientName: {
      type: String,
      required: true,
      trim: true,
    },

    certificateType: {
      type: String,
      required: true,
      trim: true,
    },

    eventName: {
      type: String,
      required: true,
      trim: true,
    },

    organization: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    issueDate: {
      type: Date,
      required: true,
    },

    certificateId: {
      type: String,
      required: true,
      unique: true,
    },

    template: {
      type: String,
      required: true,
      default: "classic",
    },
  },
  {
    timestamps: true,
  }
);

const Certificate = mongoose.model("Certificate", certificateSchema);

export default Certificate;