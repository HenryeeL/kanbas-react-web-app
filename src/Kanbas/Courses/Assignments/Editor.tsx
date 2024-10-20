import { useEffect, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { assignments } from '../../Database';

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Parse course ID and assignment ID

  // Use filter to find the matching assignment
  const assignment = assignments.filter((a) => a._id === aid && a.course === cid)[0];

  if (!assignment) {
    return <div>Loading...</div>;
  }

  return (
    <div id="wd-assignments-editor" className="container p-4">
      {/* Assignment Name */}
      <Form.Group controlId="wd-name" className="mb-4">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control type="text" defaultValue={assignment.title} />
      </Form.Group>

      {/* Description */}
      <Form.Group controlId="wd-description" className="mb-4">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          defaultValue={`The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
          style={{ whiteSpace: 'pre-wrap' }}
        />
      </Form.Group>

      <Row>
        <Col md={6}>
          {/* Points */}
          <Form.Group controlId="wd-points" className="mb-4">
            <Form.Label>Points</Form.Label>
            <Form.Control type="number" defaultValue={100} />
          </Form.Group>
        </Col>

        {/* Assign Section */}
        <Col md={6}>
          <Form.Group controlId="wd-assign-section" className="mb-4">
            <Form.Label>Assign</Form.Label>
            <div className="p-3 border rounded">
              {/* Assign To */}
              <Form.Group controlId="wd-assign-to" className="mb-3">
                <Form.Label><strong>Assign to</strong></Form.Label>
                <Form.Control type="text" defaultValue="Everyone" />
              </Form.Group>

              {/* 截止日期 */}
              <Form.Group controlId="wd-due-date" className="mb-3">
                <Form.Label><strong>Due</strong></Form.Label>
                <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
              </Form.Group>

              {/* 可用日期范围 */}
              <Form.Group className="mb-3">
                <Row>
                  <Col md={6}>
                    <Form.Label><strong>Available from</strong></Form.Label>
                    <Form.Control type="datetime-local" id="wd-available-from" defaultValue="2024-05-06T00:00" />
                  </Col>
                  <Col md={6}>
                    <Form.Label><strong>Until</strong></Form.Label>
                    <Form.Control type="datetime-local" id="wd-available-until" defaultValue="2024-05-20T00:00" />
                  </Col>
                </Row>
              </Form.Group>
            </div>
          </Form.Group>
        </Col>
      </Row>

      {/* Cancel and Save buttons */}
      <div className="d-flex justify-content-end mt-4">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} id="wd-cancel" className="btn btn-secondary me-2">Cancel</Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} id="wd-save" className="btn btn-primary">Save</Link>
      </div>
    </div>
  );
}