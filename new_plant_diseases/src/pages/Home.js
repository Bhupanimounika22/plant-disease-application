import React from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import images from the assets folder
import diseasedPlantImg from '../assets/diseased-plant1.jpg';
import fertilizingImg from '../assets/fertilizing.jpeg';
import healthyPlantImg from '../assets/healthy-plant.webp';
import pesticideUseImg from '../assets/pesticide-use.jpg';
import soilWaterImg from '../assets/soil-water.jpeg';
import sunlightImg from '../assets/sunlight.jpeg';

const carouselItems = [
  {
    imgSrc: healthyPlantImg,
    altText: 'Healthy plant',
    captionTitle: 'Healthy Plants',
    captionText: 'Learn about maintaining healthy plants through proper care and environment.',
    captionClass: 'text-warning',
  },
  {
    imgSrc: diseasedPlantImg,
    altText: 'Diseased plant',
    captionTitle: 'Plant Diseases',
    captionText: 'Identify and treat common plant diseases to keep your plants healthy.',
    captionClass: 'text-danger',
  },
  {
    imgSrc: pesticideUseImg,
    altText: 'Pesticide use',
    captionTitle: 'Effective Pesticide Use',
    captionText: 'Learn about safe pesticide use to control pests and prevent disease.',
    captionClass: 'text-info',
  },
];

const careTips = [
  {
    imgSrc: soilWaterImg,
    title: 'Soil and Watering',
    text: 'Proper soil and watering practices help prevent root rot and promote plant health.',
  },
  {
    imgSrc: fertilizingImg,
    title: 'Fertilizing',
    text: 'Regular fertilizing gives plants the nutrients needed to grow and resist disease.',
  },
  {
    imgSrc: sunlightImg,
    title: 'Sunlight Exposure',
    text: 'Placing plants in optimal sunlight ensures healthy growth and reduces disease risks.',
  },
];

function Home() {
  return (
    <div className="container my-5">
      <h1 className="text-center display-4 mb-5 text-success">Welcome to Plant Disease Predictor</h1>
      
      {/* Carousel with Plant Disease Information */}
      <Carousel className="mb-5 shadow-lg">
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 rounded"
              src={item.imgSrc}
              alt={item.altText}
            />
            <Carousel.Caption className="bg-dark p-2 rounded">
              <h3 className={item.captionClass}>{item.captionTitle}</h3>
              <p>{item.captionText}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Plant Care Tips Section */}
      <h2 className="text-center text-primary my-4">Plant Care Tips</h2>
      <Row className="gy-4">
        {careTips.map((tip, index) => (
          <Col md={4} key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={tip.imgSrc} alt={tip.title} />
              <Card.Body>
                <Card.Title>{tip.title}</Card.Title>
                <Card.Text>{tip.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Start Prediction Button */}
      <div className="text-center mt-5">
        <Link to="/predict" className="btn btn-primary btn-lg shadow-sm rounded-pill px-4">
          Start Predicting
        </Link>
      </div>
    </div>
  );
}

export default Home;
