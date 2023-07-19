from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


from schema.schemas import MachineCreate, MachineUpdate
from crud import crud
from db.database import SessionLocal, engine
from model import models

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

# Allow CORS
origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.middleware("http")
async def db_session_middleware(request, call_next):
    db = SessionLocal()
    try:
        response = await call_next(request)
    finally:
        db.close()
    return response


@app.post("/machine/create")
async def create_machine(machine: MachineCreate):
    db = SessionLocal()
    db_machine = models.Machine(**machine.dict())
    db.add(db_machine)
    db.commit()
    db.refresh(db_machine)
    return db_machine


@app.get("/machine/get")
async def get_machine(id: int = None, email: str = None):
    db = SessionLocal()
    query = db.query(models.Machine)
    if id is not None:
        query = query.filter(models.Machine.id == id)
    if email is not None:
        query = query.filter(models.Machine.email == email)
    machines = query.all()
    return machines


@app.put("/machine/update")
async def update_machine(machine_id: int, machine: MachineUpdate):
    db = SessionLocal()
    db_machine = db.query(models.Machine).filter(models.Machine.id == machine_id).first()
    if db_machine:
        for field, value in machine.dict(exclude_unset=True).items():
            setattr(db_machine, field, value)
        db.commit()
        db.refresh(db_machine)
    return db_machine


@app.get("/machine/schema/{method}")
async def get_machine_schema(method: str):
    if method == "create":
        return MachineCreate.schema_json(indent=2)
    elif method == "update":
        return MachineUpdate.schema_json(indent=2)
    else:
        return {"message": "Invalid method"}



@app.get("/openapi.yaml")
async def get_openapi_yaml():
    # Read the OpenAPI YAML from the file
    with open("openapi.yaml") as file:
        return file.read()