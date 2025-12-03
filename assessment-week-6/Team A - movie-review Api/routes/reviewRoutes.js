//Abdulrasaq Adewale
//linking of express, expressRouter, and Reviews(from controllers) to review routes
const express = require("express");
const router = express.Router({mergepParams: true});

const { getReviewsByMovie, getReviewById, createReview, deleteReview } = require("../controllers/reviewController")

router.get('/:movieId')
router.post = require('../middleware/validateReview')
router.get('/', validateReview, createReview)

router.route("/:reviewId")
.get(getReviewById)
.delete(deleteReview);

module.export = router;