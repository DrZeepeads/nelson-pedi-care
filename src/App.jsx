import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chat from "./components/Chat";
import DrugCalculator from "./components/DrugCalculator";
import GrowthChart from "./components/GrowthChart";
import Settings from "./components/Settings";

export default function App() {
  return (
    <Router>
      <div className="h-screen flex">
        {/* Sidebar */}
        <nav className="w-60 bg-blue-500 text-white p-4 space-y-2">
          <ul>
            <li><Link to="/">New Chat</Link></li>
            <li><Link to="/calculator">Pediatric Drug Calculator</Link></li>
            <li><Link to="/growth-chart">Growth Chart Visualizer</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/calculator" element={<DrugCalculator />} />
            <Route path="/growth-chart" element={<GrowthChart />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
