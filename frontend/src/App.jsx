import { useState } from 'react';
import { db, ref, push } from './firebase';
import { Link } from 'react-router-dom';

function App() {
  const [formData, setFormData] = useState({
    provider: 'aws',
    cpu: '',
    ram: '',
    storage: '',
    bandwidth: '',
    hours: '',
  });

  const [cost, setCost] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const simulatePricing = async (e) => {
    e.preventDefault();

    const parsedData = {
      ...formData,
      cpu: parseFloat(formData.cpu),
      ram: parseFloat(formData.ram),
      storage: parseFloat(formData.storage),
      bandwidth: parseFloat(formData.bandwidth),
      hours: parseFloat(formData.hours),
    };

    // Check for negative inputs
    for (let key in parsedData) {
      if (['cpu', 'ram', 'storage', 'bandwidth', 'hours'].includes(key) && parsedData[key] < 0) {
        alert(`❌ ${key.charAt(0).toUpperCase() + key.slice(1)} cannot be negative.`);
        return;
      }
    }

    const response = await fetch('http://localhost:5000/simulate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsedData),
    });

    const data = await response.json();
    setCost(data.estimated_cost);

    await push(ref(db, 'simulations/'), {
      ...formData,
      cost: data.estimated_cost,
      timestamp: new Date().toISOString()
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Link Section */}
      <div className="absolute top-4 left-4 flex flex-col gap-3">
        <Link to="/history" className="text-blue-600 underline text-lg hover:text-blue-800 transition">
          📜 View Simulation History
        </Link>
        <Link to="/dashboard" className="text-blue-600 underline text-lg hover:text-blue-800 transition">
          📊 View Pricing Dashboard
        </Link>
      </div>

      {/* Main Card */}
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">☁️ Cloud Pricing Simulator</h1>
        <form onSubmit={simulatePricing} className="space-y-5">
          <select
            name="provider"
            value={formData.provider}
            onChange={handleChange}
            className="w-full border p-3 rounded-md text-gray-700"
          >
            <option value="aws">AWS</option>
            <option value="azure">Azure</option>
            <option value="gcp">GCP</option>
          </select>

          {['cpu', 'ram', 'storage', 'bandwidth', 'hours'].map((field) => (
            <input
              key={field}
              type="number"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              min="0"
              placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} (${field === 'hours' ? 'hrs' : 'GB/Cores'})`}
              required
              className="w-full border p-3 rounded-md text-gray-700"
            />
          ))}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            🚀 Simulate Cost
          </button>
        </form>

        {cost !== null && (
          <div className="mt-8 text-center text-2xl font-semibold text-green-600">
            💸 Estimated Cost: ${cost}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
