import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kanbas/Account/Signin" id="wd-course-home-link"
        className="list-group-item active border border-0"> Signin </Link>
      <Link to="/Kanbas/Account/Signup" id="wd-course-modules-link"
        className="list-group-item text-danger border border-0"> Signup </Link>
      <Link to="/Kanbas/Account/Profile" id="wd-course-piazza-link"
        className="list-group-item text-danger border border-0"> Profile </Link>
    </div>
  );
}
<div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
        className="list-group-item active border border-0"> Home </Link>
      <Link to="/Kanbas/Account/Signup" id="wd-course-modules-link"
        className="list-group-item text-danger border border-0"> Signup </Link>
      <Link to="/Kanbas/Account/Profile" id="wd-course-piazza-link"
        className="list-group-item text-danger border border-0"> Profile </Link>
      <Link to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
        className="list-group-item text-danger border border-0"> Zoom </Link>
      <Link to="/Kanbas/Courses/1234/Assignments" id="wd-course-quizzes-link"
        className="list-group-item text-danger border border-0"> Assignments </Link>
      <Link to="/Kanbas/Courses/1234/Quizzes" id="wd-course-assignments-link"
        className="list-group-item text-danger border border-0"> Quizzes </Link>
      <Link to="/Kanbas/Courses/1234/People" id="wd-course-people-link"
        className="list-group-item text-danger border border-0" > People </Link>
    </div>
