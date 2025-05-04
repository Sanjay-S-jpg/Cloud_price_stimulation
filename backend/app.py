from flask import Flask, request, jsonify
from flask_cors import CORS
from pricing_logic import calculate_cost

app = Flask(__name__)
CORS(app)  # allows React to talk to Flask

@app.route('/')
def home():
    return "Cloud Pricing Simulation Backend Running"

@app.route('/simulate', methods=['POST'])
def simulate():
    data = request.json
    response = calculate_cost(data)
    return jsonify(response)

@app.route('/get-pricing-history', methods=['GET'])
def get_pricing_history():
    # You can retrieve data from Firebase or a database for historical simulations
    # For now, we'll use static pricing data.
    history = [
        {"provider": "aws", "cpu_cost": 0.05, "ram_cost": 0.01, "storage_cost": 0.10},
        {"provider": "gcp", "cpu_cost": 0.04, "ram_cost": 0.02, "storage_cost": 0.12},
        {"provider": "azure", "cpu_cost": 0.06, "ram_cost": 0.015, "storage_cost": 0.09},
    ]
    return jsonify(history)


if __name__ == '__main__':
    app.run(debug=True)
