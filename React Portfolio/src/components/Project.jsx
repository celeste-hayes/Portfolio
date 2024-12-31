import React from 'react';
import { Card } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNode } from 'react-icons/fa'; 
import { SiTypescript, SiPostgresql } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function Project({ title, description, technologies, image, alt, repoLink, deployedLink }) {
  return (
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Img variant='top' src={image} alt={alt || "Image not available"} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          <div style={{justifyContent: 'center' }}>
            {technologies.includes('HTML') && <FaHtml5 style={{ fontSize: '2rem', color: '#e34f26' }} />}
            {technologies.includes('CSS') && <FaCss3Alt style={{ fontSize: '2rem', color: '#264de4' }} />}
            {technologies.includes('JavaScript') && <FaJsSquare style={{ fontSize: '2rem', color: '#f7df1e' }} />}
            {technologies.includes('Node.js') && <FaNode style={{ fontSize: '3rem', color: 'black' }} />}
            {technologies.includes('TypeScript') && <SiTypescript style={{ fontSize: '2rem', color: '#007acc' }} />}
            {technologies.includes('PostgreSQL') && <SiPostgresql style={{ fontSize: '2rem', color: 'black' }} />}
            {technologies.includes('API') && <TbApi style={{ fontSize: '2rem', color: 'green' }} />}
          </div>
        </Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <div className='card-link'>
          {repoLink && (
            <Card.Link href={repoLink} target='_blank'>
              GitHub Repo
            </Card.Link>
          )}
          {deployedLink && (
            <Card.Link href={deployedLink} target='_blank'>
              Live Site
            </Card.Link>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}