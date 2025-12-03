//Abdulrasaq Adewale
//linking of express, expressRouter, and Reviews(from controllers) to review routes
const express = require("express");
const router = express.Router({mergepParams: true});

const { getReviewsByMovie, getReviewById, createReview, deleteReview } = require("../controllers/reviewController")

router.route("/")
.get(getReviewsByMovie)
.post(createReview);

router.route("/:reviewId")
.get(getReviewById)
.delete(deleteReview);

module.export = router;