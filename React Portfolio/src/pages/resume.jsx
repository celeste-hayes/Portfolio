import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { BiMap } from 'react-icons/bi';
import { Badge } from 'react-bootstrap';

export default function Resume() {
  return (
    <div className='container mt-5'>
      <h2 className='display-1 fw-normal mb-4'>experience.</h2>
      <p className='fs-3'>Explore my professional journey—new milestones ahead!</p>
      <Accordion className='custom-accordion' defaultActiveKey='0'>
        {/* Experience #1 */}
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '95%' }}>
            <span>Aspiring Full Stack Developer</span>
            <span>Present</span>
          </div>
          </Accordion.Header>
          <Accordion.Body className='fs-6' style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <BiMap style={{ fontSize: '1.5rem', marginRight: '8px' }} /> {/* React Icon */}
              <span>Remote (Garner, NC)</span>
            </div>
            A passionate code crafter diving headfirst into the world of full-stack development. Combining creativity and logic, ready to build responsive, user-friendly applications that bring ideas to life!
            <div style={{ marginTop: '15px' }}>
              <div style={{ textAlign: 'center' }}>
                {[
                  'HTML & CSS',
                  'JavaScript',
                  'Node.js',
                  'Express.js',
                  'React.js',
                  'PostgreSQL'
                ].map((skill, index) => (
                  <Badge
                    key={index}
                    className='me-2 mb-2 custom-badge'
                    style={{ fontSize: '0.8rem' }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        {/* Experience #2 */}
        <Accordion.Item eventKey='1'>
          <Accordion.Header>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '95%' }}>
            <span>Product Manager</span>
            <span>2021 - Present</span>
          </div>
          </Accordion.Header>
          <Accordion.Body className='fs-6' style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <BiMap style={{ fontSize: '1.5rem', marginRight: '8px' }} /> {/* React Icon */}
              <span>Remote (Durham, NC)</span>
            </div>
            A results driven product wizard with 4 years of experience turning big ideas into scalable solutions. Expert at bridging the gap between vision and execution, delivering customer-focused products that wow!
            <div style={{ marginTop: '15px' }}>
              <div style={{ textAlign: 'center' }}>
                {[
                  'Requirement Specification',
                  'Stakeholder Management',
                  'User Experience',
                  'Problem Solving',
                  'Agile Methodologies',
                  'Cross Functional Collaboration'
                ].map((skill, index) => (
                  <Badge
                    key={index}
                    className='me-2 mb-2 custom-badge'
                    style={{ fontSize: '0.8rem' }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        {/* Experiecne #3 */}
        <Accordion.Item eventKey='2'>
          <Accordion.Header>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '95%' }}>
            <span>Senior Business Analyst</span>
            <span>2017 - 2021</span>
          </div>
          </Accordion.Header>
          <Accordion.Body className='fs-6' style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <BiMap style={{ fontSize: '1.5rem', marginRight: '8px' }} /> {/* React Icon */}
              <span>Hybrid (Raleigh, NC)</span>
            </div>
            A strategic problem solver with 4 years of expertise in turning data into actionable insights. Skilled at streamlining processes, enhancing business performance, and delivering solutions that drive results!
            <div style={{ marginTop: '15px' }}>
              <div style={{ textAlign: 'center' }}>
                {[
                  'Data Analysis',
                  'User Experience',
                  'Critical Thinking',
                  'Wireframing',
                  'Project Coordination'
                ].map((skill, index) => (
                  <Badge
                    key={index}
                    className='me-2 mb-2 custom-badge'
                    style={{ fontSize: '0.8rem' }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <a
        href='/assets/CHayesResume2024_Bootcamp.pdf'
        download='Celeste_Hayes_Resume.pdf'
        className='fs-5 resume-btn'
      >
        View My Resume
      </a>
    </div>
  );
}