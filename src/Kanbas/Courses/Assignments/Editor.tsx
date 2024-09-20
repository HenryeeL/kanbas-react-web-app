export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        {/* Assignment Name */}
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
  
        {/* Description */}
        <label htmlFor="wd-description">Description</label>
        <textarea id="wd-description">
          The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, links to each of the lab assignments, link to the Kanbas application, and links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
  
        <table>
          {/* Points */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
  
          {/* Assignment Group */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="assignments">Assignments</option>
                <option value="quizzes">Quizzes</option>
                <option value="projects">Projects</option>
              </select>
            </td>
          </tr>
  
          {/* Display Grade As */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
              </select>
            </td>
          </tr>
  
          {/* Submission Type */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
                <option value="on-paper">On Paper</option>
              </select>
            </td>
          </tr>
  
          {/* Online Entry Options */}
          <tr>
            <td align="right" valign="top">
              <label>Online Entry Options</label>
            </td>
            <td>
              <input type="checkbox" id="wd-text-entry" /> Text Entry <br />
              <input type="checkbox" id="wd-website-url" /> Website URL <br />
              <input type="checkbox" id="wd-media-recordings" /> Media Recordings <br />
              <input type="checkbox" id="wd-student-annotation" /> Student Annotation <br />
              <input type="checkbox" id="wd-file-uploads" /> File Uploads
            </td>
          </tr>
  
          {/* Assign To */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>
  
          {/* Due Date */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" value="2024-05-13" />
            </td>
          </tr>
  
          {/* Available From and Until */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input type="date" id="wd-available-from" value="2024-05-06" />
              <label htmlFor="wd-available-until">Until</label>
              <input type="date" id="wd-available-until" value="2024-05-20" />
            </td>
          </tr>
        </table>
  
        {/* Cancel and Save buttons */}
        <br />
        <button id="wd-cancel">Cancel</button>
        <button id="wd-save">Save</button>
      </div>
    );
  }
  