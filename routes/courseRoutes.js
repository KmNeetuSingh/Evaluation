const express = require('express');
const router = express.Router();
const { getCourses, enrollCourse, getEnrolledCourses } = require('../controllers/courseController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/courses', getCourses);
router.post('/enroll', authMiddleware, enrollCourse);
router.get('/my-courses', authMiddleware, getEnrolledCourses);

module.exports = router;
