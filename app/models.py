from sqlalchemy import Column, Integer, String, Enum, DateTime
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class MachineStatus(str, Enum):
    active = "active"
    not_active = "not_active"

class Machine(Base):
    __tablename__ = "machine"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(10))
    location = Column(String)
    email = Column(String)
    number = Column(Integer)
    float_number = Column(Float)
    enum = Column(Enum(MachineStatus))
    created_at = Column(DateTime)
    edited_at = Column(DateTime)
    password = Column(String)