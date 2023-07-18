from fastapi import FastAPI
from . import schemas, crud, database

app = FastAPI()

@app.on_event("startup")
async def startup():
    await database.database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.database.disconnect()

@app.post("/machine/create")
def create_machine(machine: schemas.MachineCreate):
    return crud.create_machine(machine)

@app.get("/machine/get")
def get_machine(id: int = Query(None), email: EmailStr = Query(None)):
    return crud.get_machine(id, email)

@app.put("/machine/update")
def update_machine(machine_id: int, machine: schemas.MachineUpdate):
    return crud.update_machine(machine_id, machine)

@app.get("/machine/schema/{method}")
def get_schema(method: str):
    if method == "create":
        return schemas.MachineCreate.schema_json(indent=2)
    elif method == "update":
        return schemas.MachineUpdate.schema_json(indent=2)
    else:
        return {"message": "Invalid method"}

@app.get("/openapi.yaml")
async def get_openapi_yaml():
    with open("openapi.yaml") as file:
        return file.read()