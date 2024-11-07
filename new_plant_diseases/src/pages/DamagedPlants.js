// src/pages/DamagedPlants.js

import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaExclamationTriangle, FaInfoCircle, FaLeaf, FaSprayCan } from 'react-icons/fa';
import diseasedPlantImg1 from '../assets/diseased-plant1.jpg';
import videoFile from '../assets/videoplayback.mp4'; // Import your video file

const DamagedPlants = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center display-4 mb-5 text-danger">Damaged Plants vs. Healthy Plants</h1>

      <Row className="mb-4 align-items-center">
        <Col md={6}>
          <h2 className="text-warning">Why Plants Get Damaged</h2>
          <p>
            Plants can become damaged due to various reasons, including pests, diseases, poor soil quality, and environmental stress. 
            Understanding the causes helps in implementing effective prevention and treatment strategies.
          </p>
          <FaExclamationTriangle className="text-danger" size={50} />
        </Col>
        <Col md={6}>
          <img 
            src={diseasedPlantImg1}
            alt="Damaged Plant" 
            className="img-fluid rounded"
          />
        </Col>
      </Row>

      <h2 className="text-center text-primary my-4">Comparison: Healthy vs. Damaged Plants</h2>
      <Row className="mb-4">
        <Col md={6}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Healthy Plants</Card.Title>
              <Card.Text>Healthy plants have vibrant leaves, robust growth, and a strong resistance to pests and diseases.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Damaged Plants</Card.Title>
              <Card.Text>Damaged plants often show signs of stress, such as discoloration, wilting, and stunted growth.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="text-center text-info my-4">Pesticide Use and Organic Alternatives</h2>
      <Row className="mb-4 text-center">
        <Col md={4}>
          <FaSprayCan size={70} className="mb-3" />
          <h4>Conventional Pesticides</h4>
          <p>These can be effective but may harm beneficial insects and the environment.</p>
        </Col>
        <Col md={4}>
          <FaLeaf size={70} className="mb-3" />
          <h4>Organic Pesticides</h4>
          <p>These are derived from natural sources and are safer for beneficial insects and the environment.</p>
        </Col>
        <Col md={4}>
          <FaInfoCircle size={70} className="mb-3" />
          <h4>Usage Tips</h4>
          <p>Always follow instructions and consider integrated pest management strategies for sustainable plant health.</p>
        </Col>
      </Row>

      <h2 className="text-center text-secondary my-4">Learn More</h2>
      <div className="text-center mb-4">
        <video 
          width="560" 
          height="315" 
          controls
          className="w-100" // This makes the video responsive
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default DamagedPlants;
