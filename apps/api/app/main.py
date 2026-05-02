from fastapi import FastAPI, Body, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from core.model.engine import ModelEngine, PolicyFramework, IncidentModel

app = FastAPI(title="Zero Trust Reference Model API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = ModelEngine()
framework = PolicyFramework()
incidents = IncidentModel()

@app.get("/health")
def health():
    return {"status": "ok", "service": "zero-trust-reference-model"}

@app.post("/access/request")
def request_access(data: dict = Body(...)):
    flow_resp = model.evaluate_flow(data)
    violations = framework.check_compliance(flow_resp["aggregate_trust"])
    
    if violations:
        flow_resp["status"] = "DENIED"
        flow_resp["violations"] = violations
        flow_resp["incident"] = incidents.trigger_response(violations[0])
    else:
        flow_resp["status"] = "GRANTED"
        
    return flow_resp

@app.get("/dashboard/summary")
def get_summary():
    return {
        "model_maturity": "ADVANCED",
        "layers_active": 5,
        "avg_trust_score": 0.88,
        "compliance_violations_24h": 12,
        "governance_status": "COMPLIANT"
    }

@app.get("/metrics")
def get_metrics():
    return {
        "model_evaluation_ms": 14.2,
        "policy_coverage": "100%",
        "incident_response_velocity": 0.85
    }
