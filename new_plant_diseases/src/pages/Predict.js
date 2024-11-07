// src/ImageUpload.js
import axios from 'axios';
import React, { useState } from 'react';
 
const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [confidence, setConfidence] = useState(0);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setError('Please select an image file to upload.');
      return;
    }

    setError('');
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:5800/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Set prediction and confidence based on the response
      setPrediction(response.data.prediction);
      setConfidence(response.data.confidence);
    } catch (err) {
      setError('Error while predicting. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-4">Plant Disease Predictor</h1>
        <p className="lead">Upload an image of a plant leaf to get predictions about its health.</p>
      </div>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group">
          <input 
            type="file" 
            onChange={handleFileChange} 
            accept="image/*" 
            required 
            className="form-control-file" 
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg btn-block">Upload and Predict</button>
      </form>

      {selectedFile && (
        <div className="preview-container mb-4 text-center">
          <img 
            src={URL.createObjectURL(selectedFile)} 
            alt="Preview" 
            className="img-fluid rounded shadow" 
            style={{ maxWidth: '100%', height: 'auto' }} 
          />
        </div>
      )}

      {prediction && (
        <div className="prediction-result text-center">
          <h2>Prediction: {prediction}</h2>
          <h3>Confidence: {(confidence * 100).toFixed(2)}%</h3>
        </div>
      )}

      {error && <p className="text-danger text-center">{error}</p>}
    </div>
  );
};

export default ImageUpload;
