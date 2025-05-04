// src/History.jsx
import React, { useEffect, useState } from 'react';
import { db, ref, onValue } from './firebase';



function History() {
  const [simulations, setSimulations] = useState([]);

  useEffect(() => {
    const simRef = ref(db, 'simulations/');
    onValue(simRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const entries = Object.entries(data).map(([id, value]) => ({
          id,
          ...value
        }));
        setSimulations(entries.reverse()); // newest first
      }
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Simulation History</h2>
      <ul className="space-y-4">
        {simulations.map((sim) => (
          <li key={sim.id} className="bg-white shadow p-4 rounded-lg">
            <p><strong>Provider:</strong> {sim.provider}</p>
            <p><strong>CPU:</strong> {sim.cpu} | <strong>RAM:</strong> {sim.ram}GB</p>
            <p><strong>Storage:</strong> {sim.storage}GB | <strong>Bandwidth:</strong> {sim.bandwidth}GB</p>
            <p><strong>Hours:</strong> {sim.hours}</p>
            <p><strong>Cost:</strong> ₹{sim.cost}</p>
            <p className="text-sm text-gray-500"><strong>Date:</strong> {new Date(sim.timestamp).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
