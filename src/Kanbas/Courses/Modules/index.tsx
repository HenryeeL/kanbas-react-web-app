export default function Modules() {
    return (
        <div>
            <button>
                Collapse All
            </button>
            <button>
                View Progress
            </button>
            <select>
                <option selected value="PUBLISH">Publish All</option>
            </select>
            <button>
                + Module
            </button>
            <ul className="wd-module">
  {/* Week 1, Lecture 1 */}
  <li className="wd-module">
    <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
    <ul className="wd-lessons">
      {/* Learning Objectives */}
      <li className="wd-lesson">
        <span className="wd-title">LEARNING OBJECTIVES</span>
        <ul className="wd-content">
          <li className="wd-content-item">Introduction to the course</li>
          <li className="wd-content-item">Learn what is Web Development</li>
        </ul>
      </li>
      {/* Reading */}
      <li className="wd-lesson">
        <span className="wd-title">READING</span>
        <ul className="wd-content">
          <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
          <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces</li>
        </ul>
      </li>
      {/* Slides */}
      <li className="wd-lesson">
        <span className="wd-title">SLIDES</span>
        <ul className="wd-content">
          <li className="wd-content-item">Introduction to Web Development</li>
          <li className="wd-content-item">Creating an HTTP server with Node.js</li>
          <li className="wd-content-item">Creating a React Application</li>
        </ul>
      </li>
    </ul>
  </li>

  {/* Week 1, Lecture 2 */}
  <li className="wd-module">
    <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
    <ul className="wd-lessons">
      {/* Learning Objectives */}
      <li className="wd-lesson">
        <span className="wd-title">LEARNING OBJECTIVES</span>
        <ul className="wd-content">
          <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
          <li className="wd-content-item">Deploy the assignment to Netlify</li>
        </ul>
      </li>
      {/* Slides */}
      <li className="wd-lesson">
        <span className="wd-title">SLIDES</span>
        <ul className="wd-content">
          <li className="wd-content-item">Introduction to HTML and the DOM</li>
          <li className="wd-content-item">Formatting Web content with Headings and Paragraphs</li>
          <li className="wd-content-item">Formatting content with Lists and Tables</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
        </div>
    );
}
