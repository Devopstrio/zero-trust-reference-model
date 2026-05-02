.PHONY: help build up down seed test

help:
	@echo "Zero Trust Reference Model - Management Commands"
	@echo "----------------------------------------------"
	@echo "build     : Build all containers"
	@echo "up        : Start all services"
	@echo "down      : Stop all services"
	@echo "simulate  : Simulate model interactions"
	@echo "enforce   : Enforce model policies"
	@echo "test      : Run system tests"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

simulate:
	python scripts/simulate/model_flow.py

enforce:
	python scripts/enforce/apply_model_baseline.py

test:
	pytest tests/
