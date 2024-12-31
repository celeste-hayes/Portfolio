import React from "react";
import Project from "../components/Project";
import { Container, Row, Col } from 'react-bootstrap';

export default function Portfolio() {
  const projects = [
    {
      title: "Pro README Scribe",
      description: "This command line app lets users generates a professional README.md file from user input. Leveraging inquirer, this tool helps you quickly create a README.md file, so you can focus more on building your project",
      technologies: "Node.js",
      image: "src/assets/ReadMe.png",
      deployedLink: "",
      repoLink: "https://github.com/celeste-hayes/Pro-ReadMe-Scribe"
    },
    {
      title: "Vehicle Simulator",
      description: "This command line app lets users create and manage vehicles (Car, Truck, or Motorbike) by providing relevant details. Users can select from existing vehicles and perform actions like start, stop, and accelerate through prompts.",
      technologies: "TypeScript",
      image: "src/assets/VehicleSimulator.jpg",
      deployedLink: "",
      repoLink: "https://github.com/celeste-hayes/Vehicle-Simulator"
    },
    {
      title: "Weather Dashboard",
      description: "This browser app lets users search for a city and view the current weather conditions along with a 5-day forecast. This app uses the OpenWeather API to retrieve weather data for cities.",
      technologies: "API",
      image: "src/assets/WeatherPreview.png",
      deployedLink: "https://api-weather-dashboard.onrender.com/",
      repoLink: "https://github.com/celeste-hayes/API-Weather-Dashboard"
    },
    {
      title: "Employee Tracker",
      description: "This command line app serves as a content management system (CMS) for managing a company's departments, roles, and employees. Through this application users can add, view, and update employee details, roles, and departments.",
      technologies: ["Node.js", "PostgreSQL"],
      image: "src/assets/EmployeeTracker.png",
      deployedLink: "",
      repoLink: "https://github.com/celeste-hayes/Employee-Tracker"
    }
  ];

  return (
    <div>
      <h2 className='display-1 fw-normal mb-4'>portfolio.</h2>
      <p className='fs-3'>Check out my latest projects—more exciting things coming soon!</p>
      
      <Container>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={4} sm={6} className="d-flex justify-content-center">
              <Project 
                title={project.title} 
                description={project.description} 
                technologies={project.technologies} 
                image={project.image} 
                repoLink={project.repoLink} 
                deployedLink={project.deployedLink} 
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}