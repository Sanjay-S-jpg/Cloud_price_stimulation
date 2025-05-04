import json
import os

def load_data(provider):
    file_path = os.path.join("data", f"{provider.lower()}.json")
    with open(file_path) as f:
        return json.load(f)

def calculate_cost(data):
    provider = data['provider']
    cpu = data['cpu']
    ram = data['ram']
    storage = data['storage']
    bandwidth = data['bandwidth']
    hours = data['hours']

    pricing = load_data(provider)

    cost = (
        cpu * pricing['cpu_per_hr'] +
        ram * pricing['ram_per_hr'] +
        storage * pricing['storage_per_gb'] +
        bandwidth * pricing['bandwidth_per_gb']
    ) * hours

    return {
        "provider": provider,
        "estimated_cost": round(cost, 2)
    }
