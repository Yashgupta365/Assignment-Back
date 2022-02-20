const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A News must have a Title"],
    unique: true,
    trim: true,
    maxlength: [
      200,
      "A News Title name must have less or equal then 200 characters",
    ],
    minlength: [
      10,
      "A News Title name must have more or equal then 10 characters",
    ],
  },
  summary: {
    type: String,
    trim: true,
    required: [true, "A News must have a Summary"],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, "A News must have a cover image"],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

// tourSchema.index({ price: 1, ratingsAverage: -1 });

const News = mongoose.model("News", newsSchema);

module.exports = News;
