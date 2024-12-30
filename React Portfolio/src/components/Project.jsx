import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Project({ title, description, technologies, image, link }) {
  return (
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Technologies: {technologies}</Card.Subtitle>
        <Button variant="primary" href={link} target="_blank">View Project</Button>
      </Card.Body>
    </Card>
  );
};
