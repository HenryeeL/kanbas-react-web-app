import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams(); // Retrieve the course ID from the URL parameters
  const { pathname } = useLocation(); // Get the current path

  // Data-driven navigation links array
  const links = [
    { label: "Home", path: "Home" },
    { label: "Modules", path: "Modules" },
    { label: "Piazza", path: "Piazza" },
    { label: "Zoom", path: "Zoom" },
    { label: "Assignments", path: "Assignments" },
    { label: "Quizzes", path: "Quizzes" },
    { label: "People", path: "People" },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link.path}
          to={`/Kanbas/Courses/${cid}/${link.path}`} // Dynamically generate the link URL
          id={`wd-course-${link.path.toLowerCase()}-link`}
          className={`list-group-item border border-0 ${
            pathname.includes(link.path) ? "active text-danger" : "text-danger"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
