from pydantic import BaseModel, EmailStr
from datetime import datetime
from enum import Enum
from typing import List, Optional, Union

class MachineStatus(str, Enum):
    active = "active"
    not_active = "not_active"

class MachineBase(BaseModel):
    name: str
    location: str
    email: EmailStr
    number: int
    float_number: float
    enum: MachineStatus

class MachineCreate(MachineBase):
    password: str

class MachineUpdate(MachineBase):
    pass

class MachineRead(BaseModel):
    id: int
    name: str
    location: str
    email: EmailStr
    number: int
    float_number: float
    enum: MachineStatus
    created_at: Optional[Union[str, datetime]] = None
    edited_at: Optional[Union[str, datetime]] = None

    class Config:
        orm_mode = True