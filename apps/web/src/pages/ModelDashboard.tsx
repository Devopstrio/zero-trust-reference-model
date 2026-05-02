import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';
import { 
  Shield, 
  Lock, 
  Activity,
  ArrowUpRight,
  TrendingDown,
  Clock,
  Database,
  Cpu,
  ChevronRight,
  CheckCircle,
  Zap,
  Fingerprint,
  Monitor,
  Layers,
  Box
} from 'lucide-react';

const modelMaturityData = [
  { name: 'Layer 1', trust: 0.95, risk: 0.05 },
  { name: 'Layer 2', trust: 0.85, risk: 0.15 },
  { name: 'Layer 3', trust: 0.88, risk: 0.12 },
  { name: 'Layer 4', trust: 0.92, risk: 0.08 },
  { name: 'Layer 5', trust: 0.90, risk: 0.10 },
];

const KPI_CARDS = [
  { title: 'Model Maturity', value: 'ADVANCED', trend: '+12%', color: 'emerald', icon: Box },
  { title: 'Aggregate Trust', value: '0.88', trend: 'Optimal', color: 'emerald', icon: Shield },
  { title: 'Policy Coverage', value: '100%', trend: 'Optimum', color: 'emerald', icon: Lock },
  { title: 'Incident Velocity', value: '0.85s', trend: '-0.12s', color: 'emerald', icon: Activity },
];

const ModelDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Zero Trust Reference Model</h1>
          <p className="text-slate-400">Enterprise-grade formal modeling of identity, network, application, and data security layers.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all border border-slate-800">
            Export Model Schema
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-lg shadow-emerald-600/20">
            Simulate Flow Evaluation
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-emerald-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-emerald-400`} />
              </div>
              <div className={`text-xs font-medium text-emerald-400`}>
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Model Maturity Analysis */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Cross-Layer Trust/Risk Modeling</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={modelMaturityData}>
                <defs>
                  <linearGradient id="colorTrust" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="trust" stroke="#10b981" fill="url(#colorTrust)" name="Aggregate Trust (%)" />
                <Area type="monotone" dataKey="risk" stroke="#ef4444" fill="none" name="Layer Risk (%)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Model Pillars */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col">
          <h3 className="text-lg font-bold text-white mb-6">Model Layer Status</h3>
          <div className="flex-1 space-y-6">
            {[
              { label: 'Identity Layer', score: 95, color: 'bg-emerald-500', status: 'ENFORCED' },
              { label: 'Device Posture', score: 90, color: 'bg-emerald-500', status: 'VALIDATING' },
              { label: 'Network Isolation', score: 80, color: 'bg-emerald-600', status: 'SEGMENTED' },
              { label: 'Application Proxy', score: 85, color: 'bg-emerald-600', status: 'ENFORCED' },
              { label: 'Data Encryption', score: 95, color: 'bg-emerald-500', status: 'COMPLETE' },
            ].map((node) => (
              <div key={node.label} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-medium">{node.label}</span>
                  <span className="text-slate-400 font-bold">{node.score}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full ${node.color}`} style={{ width: `${node.score}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex gap-3">
            <Zap className="text-emerald-400 shrink-0" size={18} />
            <p className="text-xs text-slate-400">Model Engine: <span className="text-emerald-400 font-bold">Formal Logic</span> active. All security decisions are evaluated against the aggregate trust model.</p>
          </div>
        </div>
      </div>

      {/* Model Decisions Grid */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Live Model Evaluation Decisions</h3>
          <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">View Analysis</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Flow Context</th>
                <th className="px-6 py-4 font-semibold">Aggregate Trust</th>
                <th className="px-6 py-4 font-semibold">Decision</th>
                <th className="px-6 py-4 font-semibold">Compliance Violations</th>
                <th className="px-6 py-4 font-semibold">Response Action</th>
                <th className="px-6 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { flow: 'Managed-Device / User-A', trust: '0.98', decision: 'GRANTED', violations: 'NONE', response: 'NO_ACTION', status: 'ACTIVE' },
                { flow: 'Unmanaged / Anonymous', trust: '0.24', decision: 'DENIED', violations: 'POL-01, POL-02', response: 'REVOKE_SESSION', status: 'BLOCKED' },
                { flow: 'Managed-Device / User-B', trust: '0.82', decision: 'GRANTED', violations: 'NONE', response: 'MONITORING', status: 'AUDIT' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4 text-sm font-bold text-slate-200">{row.flow}</td>
                  <td className="px-6 py-4 text-xs font-mono text-slate-400">{row.trust}</td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded border ${
                      row.decision === 'GRANTED' ? 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10' : 
                      'text-red-400 border-red-500/20 bg-red-500/10'
                    }`}>
                      {row.decision}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-300 font-bold">{row.violations}</td>
                  <td className="px-6 py-4 text-xs text-slate-500 font-medium font-mono">{row.response}</td>
                  <td className="px-6 py-4">
                    <button className="text-emerald-400 hover:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                      Inspect Flow
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ModelDashboard;
