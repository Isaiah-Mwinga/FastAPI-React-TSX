from sqlalchemy import select
from sqlalchemy.orm import Session
from schema import schemas
from model import models
from db import database


async def create_machine(machine: schemas.MachineCreate):
    query = models.Machine.insert().values(**machine.dict())
    await database.database.execute(query)
    return {"message": "Machine created successfully"}

async def get_machine(id: int = None, email: str = None):
    query = select([models.Machine])
    if id is not None:
        query = query.where(models.Machine.c.id == id)
    if email is not None:
        query = query.where(models.Machine.c.email == email)
    machines = await database.database.execute(query)
    return machines.fetchall()

async def update_machine(machine_id: int, machine: schemas.MachineUpdate):
    query = (
        models.Machine.update()
        .where(models.Machine.c.id == machine_id)
        .values(**machine.dict())
    )
    await database.database.execute(query)
    return {"message": "Machine updated successfully"}