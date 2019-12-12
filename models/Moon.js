import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Objectid = Schema.Types.ObjectId;

const Moon = new Schema(
  {
    title: { type: String, required: true },
    planetId: { type: Objectid, ref: "Planet", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Moon;
