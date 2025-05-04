import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  BarChart
} from "recharts";

const data = [
  { name: "AWS", cost: 10.56, cost1: 12.00, cost2: 15.00, cost3: 20.00 },  // Added cost3 for AWS
  { name: "Azure", cost: 8.00, cost1: 10.50, cost2: 13.00 },
  { name: "GCP", cost: 7.50, cost1: 9.00, cost2: 12.50 },
  { name: "Alibaba", cost: 6.50, cost1: 8.00, cost2: 10.00 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Bar Chart for Cloud Provider Costs */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Cloud Provider Costs</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cost" fill="#8884d8" />
            <Bar dataKey="cost1" fill="#82ca9d" />
            <Bar dataKey="cost2" fill="#ffc658" />
            <Bar dataKey="cost3" fill="#ff8042" /> {/* Added cost3 */}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Composed Chart for Cost Trends */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Cost Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="cost" fill="#8884d8" />
            <Line type="monotone" dataKey="cost1" stroke="#82ca9d" />
            <Bar dataKey="cost2" barSize={20} fill="#ff8042" />
            <Bar dataKey="cost3" barSize={20} fill="#ff8042" /> {/* Added cost3 */}
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart for Provider Distribution */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Provider Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="cost" nameKey="name" outerRadius={120} fill="#82ca9d" label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Pie data={data} dataKey="cost3" nameKey="name" outerRadius={120} fill="#ff8042" label /> {/* Added cost3 */}
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Radial Bar Chart for Cost Share */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Cost Share</h2>
        <ResponsiveContainer width="100%" height={300}>
          <RadialBarChart innerRadius="10%" outerRadius="80%" data={data} startAngle={180} endAngle={0}>
            <RadialBar minAngle={15} label={{ fill: "#fff", fontSize: 10 }} background clockWise dataKey="cost" />
            <RadialBar minAngle={15} label={{ fill: "#fff", fontSize: 10 }} background clockWise dataKey="cost3" fill="#ff8042" /> {/* Added cost3 */}
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      {/* Additional Bar Chart 2 */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Cost Comparison</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="cost" fill="#8884d8" />
            <Bar dataKey="cost1" fill="#82ca9d" />
            <Bar dataKey="cost2" fill="#ffc658" />
            <Bar dataKey="cost3" fill="#ff8042" /> {/* Added cost3 */}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Area Chart 2 */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Cost Estimate</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="cost" fill="#8884d8" stroke="#8884d8" />
            <Area type="monotone" dataKey="cost3" fill="#ff8042" stroke="#ff8042" /> {/* Added cost3 */}
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart 2 */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Cost Proportions</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="cost1" nameKey="name" outerRadius={120} fill="#ff8042" label />
            <Pie data={data} dataKey="cost3" nameKey="name" outerRadius={120} fill="#ff8042" label /> {/* Added cost3 */}
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart 2 */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Cloud Costs Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cost" stroke="#82ca9d" />
            <Line type="monotone" dataKey="cost3" stroke="#ff8042" /> {/* Added cost3 */}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;
