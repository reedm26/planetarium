import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Star = new Schema(
  {
    title: { type: String, required: true },
    galaxyId: {
      type: ObjectId,
      ref: "Galaxy",
      required: true
    }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Star;
// NOTE not sure if i need to use this galaxyId: {type: ObjectId, ref: "Star", required: true
