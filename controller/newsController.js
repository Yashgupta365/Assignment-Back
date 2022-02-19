const News = require("../models/newsModel");
const factory = require("./handlerFactory");

exports.getAllTours = factory.getAll(News);
// exports.getTour = factory.getOne(Tour, { path: "reviews" });
exports.createTour = factory.createOne(News);
