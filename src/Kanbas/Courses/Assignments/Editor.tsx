import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function AssignmentEditor() {
  const [submissionType, setSubmissionType] = useState('online'); // State to control submission type

  return (
    <div id="wd-assignments-editor" className="container p-3">
      {/* Assignment Name */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label htmlFor="wd-name" column md={2}>Assignment Name</Form.Label>
        <Col md={10}>
          <Form.Control id="wd-name" type="text" value="A1" />
        </Col>
      </Form.Group>

      {/* Description */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label htmlFor="wd-description" column md={2}>Description</Form.Label>
        <Col md={10}>
          <Form.Control as="textarea" rows={5} id="wd-description" value="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, links to each of the lab assignments, link to the Kanbas application, and links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page." />
        </Col>
      </Form.Group>

      <Row>
        <Col md={6}>
          {/* Points */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label htmlFor="wd-points" column md={4}>Points</Form.Label>
            <Col md={8}>
              <Form.Control id="wd-points" type="number" value={100} />
            </Col>
          </Form.Group>

          {/* Assignment Group */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label htmlFor="wd-group" column md={4}>Assignment Group</Form.Label>
            <Col md={8}>
              <Form.Select id="wd-group">
                <option value="assignments">Assignments</option>
                <option value="quizzes">Quizzes</option>
                <option value="projects">Projects</option>
              </Form.Select>
            </Col>
          </Form.Group>

          {/* Display Grade As */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label htmlFor="wd-display-grade-as" column md={4}>Display Grade as</Form.Label>
            <Col md={8}>
              <Form.Select id="wd-display-grade-as">
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
              </Form.Select>
            </Col>
          </Form.Group>

          {/* Submission Type */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label htmlFor="wd-submission-type" column md={4}>Submission Type</Form.Label>
            <Col md={8}>
              <Form.Select 
                id="wd-submission-type"
                value={submissionType}
                onChange={(e) => setSubmissionType(e.target.value)}
              >
                <option value="online">Online</option>
                <option value="on-paper">On Paper</option>
              </Form.Select>
            </Col>
          </Form.Group>

          {/* Online Entry Options */}
          {submissionType === 'online' && (
            <Form.Group as={Row} className="mb-3">
              <Col md={{ span: 8, offset: 4 }}>
                <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
                <Form.Check type="checkbox" id="wd-website-url" label="Website URL" defaultChecked />
                <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
                <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
                <Form.Check type="checkbox" id="wd-file-uploads" label="File Uploads" />
              </Col>
            </Form.Group>
          )}
        </Col>

        <Col md={6}>
          {/* Assign To */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label htmlFor="wd-assign-to" column md={4}>Assign to</Form.Label>
            <Col md={8}>
              <Form.Control id="wd-assign-to" type="text" value="Everyone" />
            </Col>
          </Form.Group>

          {/* Due Date */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label htmlFor="wd-due-date" column md={4}>Due</Form.Label>
            <Col md={8}>
              <Form.Control type="date" id="wd-due-date" value="2024-05-13" />
            </Col>
          </Form.Group>

          {/* Available From and Until */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label htmlFor="wd-available-from" column md={4}>Available from</Form.Label>
            <Col md={4}>
              <Form.Control type="date" id="wd-available-from" value="2024-05-06" />
            </Col>
            <Form.Label htmlFor="wd-available-until" column md={2}>Until</Form.Label>
            <Col md={4}>
              <Form.Control type="date" id="wd-available-until" value="2024-05-20" />
            </Col>
          </Form.Group>
        </Col>
      </Row>

      {/* Cancel and Save buttons */}
      <div className="d-flex justify-content-end mt-4">
        <Button id="wd-cancel" variant="secondary" className="me-2">Cancel</Button>
        <Button id="wd-save" variant="primary">Save</Button>
      </div>
    </div>
  );
}
