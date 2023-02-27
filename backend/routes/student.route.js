const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const studentSchema = require("../models/Student");

// Create
router.post("/create-student", (req, res, next) => {
  studentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    }
    res.json(data);
    console.log("Student created successfully!");
  });
});

// Read
router.get("/", (req, res, next) => {
  studentSchema.find((error, data) => {
    if (error) {
      return next(error);
    }
    res.json(data);
    console.log("Students read successfully!");
  });
});

// Update
router
  .route("/update-student/:id")
  .get((req, res, next) => {
    studentSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      }
      res.json(data);
    });
  })
  .put((req, res, next) => {
    studentSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
        }
        res.json(data);
        console.log("Student updated successfully!");
      }
    );
  });

router.delete("/delete-student/:id", (req, res, next) => {
  studentSchema.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    }
    res.status(200).json({
      msg: data,
    });
    console.log("Student deleted successfully!");
  });
});

module.exports = router;
