const courses = require ('../Models/Course');
const users = require('../Models/User');
exports.getCourses = (req,res) => {
    res.json(courses);
};

exports.enrollCourse = (req,res) => {
    const userId = req.user.id;
    const courserId = req.body.courseId;
    const user = users.find (u => u.id === userId);
    if (!user) return res,status(404).json ({message : 'Course not found '});
    if (!user .enrollCourse) user.enrolledCourses = [];
    user.enrolledCourses.push (courseId);
    res.json ({message : 'Course enrolled succesfully', enrolledCourses : user.enrolledCourses});

};

exports.getEnrolledCourses = (req, res) =>{
    const userId = req.user.id;
    const user = users.find (u => u.id === userId);
    if (!user) return res,status (404).json ({message :'User not'});

    const enrolledCourses = courses.filter (course => user.enrolledCourses.includes(course.id));
    res.json(enrolledCourses);
};