from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import random

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Load the model at the start of your application
try:
    with open('phishing.pkl', 'rb') as f:
        phish_model_ls = joblib.load(f)
except Exception as e:
    print(f"Error loading model: {e}")

@app.route('/predict', methods=['POST'])
async def predict():
    try:
        # Get the features from the POST request
        url = request.get_json()['url']

        # Make a prediction
        xpredict = [str(url)]
        ypredict = phish_model_ls.predict(xpredict)

        # Create a response
        if ypredict[0] == 'bad':
            score = random.randint(0, 59)
            result = "This is likely a Phishing link"
        else:
            score = random.randint(60, 100)
            result = "This is most likely NOT a Phishing link"

        return jsonify(status=200, score=score, url=url, result=result)
    except Exception as e:
      print(e, 'errorrr------')
      return jsonify(status=500, error="Oops! an error occured. Please try again. Thanks")

if __name__ == '__main__':
    app.run()
