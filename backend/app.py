import os

import numpy as np
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array, load_img

app = Flask(__name__)
CORS(app)

# Load the pre-trained model
model = load_model("/Users/bhupanimounika/Desktop/Plant disease/backend/model/final_cnn_model.h5")
image_size = (224, 224)

# Class labels
class_labels = [
    "Apple___Apple_scab", "Apple___Black_rot", "Apple___Cedar_apple_rust", "Apple___healthy",
    "Blueberry___healthy", "Cherry_(including_sour)___Powdery_mildew", "Cherry_(including_sour)___healthy",
    "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot", "Corn_(maize)___Common_rust_", "Corn_(maize)___Northern_Leaf_Blight",
    "Corn_(maize)___healthy", "Grape___Black_rot", "Grape___Esca_(Black_Measles)","Grape___healthy","Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",
    "Orange___Haunglongbing_(Citrus_greening)","Peach___Bacterial_spot","Peach___healthy","Pepper,_bell___Bacterial_spot","Pepper,_bell___healthy",
    "Potato___Early_blight","Potato___healthy","Potato___Late_blight","Raspberry___healthy","Soybean___healthy","Squash___Powdery_mildew",
    "Strawberry___healthy","Strawberry___Leaf_scorch","Tomato___Bacterial_spot","Tomato___Early_blight","Tomato___healthy","Tomato___Late_blight","Tomato___Leaf_Mold",
    "Tomato___Septoria_leaf_spot","Tomato___Spider_mites Two-spotted_spider_mite","Tomato___Target_Spot","Tomato___Tomato_mosaic_virus",
    "Tomato___Tomato_Yellow_Leaf_Curl_Virus"
 
]

# Prediction function
def predict_image_class(img_path):
    # Load and preprocess the image
    img = load_img(img_path, target_size=image_size)
    img_array = img_to_array(img) / 255.0  # Scale pixel values
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension

    # Predict the class probabilities
    predictions = model.predict(img_array, verbose=0)
    predicted_class_index = np.argmax(predictions, axis=1)[0]
    confidence_score = predictions[0][predicted_class_index]  # Get confidence score

    # Get the class label
    predicted_label = class_labels[predicted_class_index]

    return predicted_label, confidence_score

@app.route('/')
def home():
    return "Welcome to the Plant Disease Prediction API!"
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    if file and file.filename != '':
        # Ensure the uploads directory exists
        uploads_dir = 'uploads'
        if not os.path.exists(uploads_dir):
            os.makedirs(uploads_dir)

        filepath = os.path.join(uploads_dir, file.filename)
        file.save(filepath)
        
        # Predict the class of the uploaded image
        predicted_label, confidence_score = predict_image_class(filepath)
        
        return jsonify({
            'prediction': predicted_label,
            'confidence': float(confidence_score),  # Convert confidence to float for JSON serialization
            'image_url': f"/uploads/{file.filename}"  # URL to access the uploaded image
        })
    
    return jsonify({'error': 'Invalid file'}), 400

# Serve uploaded images
@app.route('/uploads/<path:filename>', methods=['GET'])
def uploaded_file(filename):
    return send_from_directory('uploads', filename)

if __name__ == '__main__':
    app.run(port=5800)  # Ensure the port matches what you are using
