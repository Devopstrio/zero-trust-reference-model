import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ModelDashboard from './pages/ModelDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400 max-w-md mx-auto">The Zero Trust reference model is currently formalizing layered security interactions and orchestrating trust-driven policy evaluations. This module will be available shortly.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ModelDashboard />} />
          <Route path="/layers" element={<Placeholder name="Model Layer Interactions" />} />
          <Route path="/flows" element={<Placeholder name="Continuous Flow Evaluation" />} />
          <Route path="/identity" element={<Placeholder name="Identity Trust Model" />} />
          <Route path="/policies" element={<Placeholder name="Formal Policy Framework" />} />
          <Route path="/risk" element={<Placeholder name="Behavioral Risk Modeling" />} />
          <Route path="/compliance" element={<Placeholder name="Compliance Validation Registry" />} />
          <Route path="/incidents" element={<Placeholder name="Automated Incident Modeling" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
