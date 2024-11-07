import React from 'react';

function About() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5 text-success">About Plant Disease Predictor</h1>
      <div className="row">
        <div className="col-md-10 offset-md-1 shadow p-4 rounded bg-light">
          <p className="lead">
            Plant Disease Predictor is an innovative application that uses machine learning to identify diseases in plants. 
            By analyzing images of plant leaves, our system can quickly determine if a plant is healthy or affected by a disease.
          </p>
          <p className="lead">
            Our model is trained on a large dataset of plant images, covering various species and common diseases. 
            This allows us to provide accurate predictions and help farmers and gardeners take timely action to protect their crops.
          </p>
          <h2 className="mt-4 text-primary">How it works</h2>
          <ol className="list-group list-group-flush">
            <li className="list-group-item">Upload an image of a plant leaf</li>
            <li className="list-group-item">Our AI model analyzes the image</li>
            <li className="list-group-item">Receive a prediction on the plant's health status</li>
            <li className="list-group-item">Take appropriate action based on the results</li>
          </ol>
          <p className="lead mt-4">
            By leveraging the power of artificial intelligence and computer vision, we aim to contribute to sustainable agriculture 
            and help maintain the health of plants worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
