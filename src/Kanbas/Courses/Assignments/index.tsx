import { BsGripVertical } from "react-icons/bs";
import { FaSearch, FaPlus, FaChevronDown } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { FiFileText } from "react-icons/fi";
import { useParams } from "react-router-dom";
import * as db from "../../Database"; // Import assignments data

export default function Assignments() {
  // Use useParams to get the course ID from the URL
  const { cid } = useParams();
  // Filter assignments for the selected course
  const assignments = db.assignments.filter((assignment) => assignment.course === cid);

  return (
    <div className="container p-3">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Search Input */}
        <div className="d-flex align-items-center w-50">
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search"
          />
          <FaSearch className="ms-2 text-muted" />
        </div>

        {/* Group and Assignment Buttons */}
        <div className="d-flex align-items-center">
          <button className="btn btn-light me-2">+ Group</button>
          <button className="btn btn-danger d-flex align-items-center">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      {/* Assignments Section */}
      <div className="card">
        <div className="card-header d-flex align-items-center justify-content-between bg-light">
          <div className="d-flex align-items-center">
            <FaChevronDown className="me-2 fs-5 text-muted" />
            <span className="fw-bold">ASSIGNMENTS</span>
          </div>
          <div className="d-flex align-items-center">
            <span
              className="badge text-dark px-3 py-2 rounded-pill fs-6"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e0e0e0",
                borderRadius: "50px",
              }}
            >
              40% of Total
            </span>
            <AssignmentsControlButtons />
          </div>
        </div>

        <ul className="list-group list-group-flush">
          {/* Assignment Items */}
          {assignments.map((assignment) => (
            <li
              key={assignment._id}
              className="list-group-item d-flex align-items-center justify-content-between p-3"
              style={{ borderLeft: "4px solid green" }}
            >
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-3 fs-4 text-muted" />
                <FiFileText className="me-3 text-success fs-4" />
                <div className="ms-2">
                  <div className="fw-bold">
                    <a
                      className="text-decoration-none text-dark"
                      href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    >
                      {assignment.title}
                    </a>
                  </div>
                  <div className="text-muted">
                    <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | <br />
                    <strong>Due:</strong> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <AssignmentControlButtons />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
