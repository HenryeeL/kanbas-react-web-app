import { BsGripVertical } from "react-icons/bs";
import { FaSearch, FaPlus } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { FiFileText } from "react-icons/fi";

export default function Assignments() {
  return (
    <div className="container p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Search */}
        <div className="d-flex align-items-center w-50">
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search"
          />
          <FaSearch className="ms-2 text-muted" />
        </div>

        {/* Buttons */}
        <div className="d-flex align-items-center">
          <button className="btn btn-light me-2">
            + Group
          </button>
          <button className="btn btn-danger">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      <ul className="wd-modules list-group rounded-0">
        {/* ASSIGNMENTS */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
            <span className="badge bg-light text-dark px-3 py-2 rounded-pill ">
              40% of Total
            </span>
            <AssignmentsControlButtons />
          </div>

          <ul className="wd-lessons list-group rounded-0">
            {/* Assignment 1 */}
            <li className="wd-lesson list-group-item d-flex align-items-center justify-content-between p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <FiFileText className="me-2 text-success fs-4" />
                <div className="ms-2">
                  <div className="fw-bold">
                    <a
                      className="text-decoration-none text-dark"
                      href="#/Kanbas/Courses/1234/Assignments/123"
                    >
                      A1 - ENV + HTML
                    </a>
                  </div>
                  <div className="text-muted">
                    <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <AssignmentControlButtons />
            </li>

            {/* Assignment 2 */}
            <li className="wd-lesson list-group-item d-flex align-items-center justify-content-between p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <FiFileText className="me-2 text-success fs-4" />
                <div className="ms-2">
                  <div className="fw-bold">
                    <a
                      className="text-decoration-none text-dark"
                      href="#/Kanbas/Courses/1234/Assignments/124"
                    >
                      A2 - CSS + BOOTSTRAP
                    </a>
                  </div>
                  <div className="text-muted">
                    <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am | <br /><strong>Due</strong> May 20 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <AssignmentControlButtons />
            </li>

            {/* Assignment 3 */}
            <li className="wd-lesson list-group-item d-flex align-items-center justify-content-between p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <FiFileText className="me-2 text-success fs-4" />
                <div className="ms-2">
                  <div className="fw-bold">
                    <a
                      className="text-decoration-none text-dark"
                      href="#/Kanbas/Courses/1234/Assignments/125"
                    >
                      A3 - JAVASCRIPT + REACT
                    </a>
                  </div>
                  <div className="text-muted">
                    <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am | <br /><strong>Due</strong> May 27 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <AssignmentControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
