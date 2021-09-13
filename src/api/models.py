from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import json
from sqlalchemy.dialects.postgresql import TIME, DATE

from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.ext.hybrid import hybrid_property

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(250))
    last_name = db.Column(db.String(250))
    email = db.Column(db.String(250), unique=True, nullable=False)
    phone = db.Column(db.Integer)    
    password = db.Column(db.String(255))
    perfil_id = db.Column(db.Integer, db.ForeignKey('perfil.id'), nullable=False)

    appointment = db.relationship('Appointment', backref='user', lazy=True)
    specialist = db.relationship('Specialist', backref='user', lazy=True)
        
    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,            
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone": self.phone,
            "password": self.password,
            "perfil_id": self.perfil_id
        } 


class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    speciality_id = db.Column(db.Integer, db.ForeignKey('speciality.id'), nullable=False)
    specialist_id = db.Column(db.Integer, db.ForeignKey('specialist.id'), nullable=False)
    working_hour_id = db.Column(db.Integer, db.ForeignKey('working_hours.id'), nullable=False)
    pet_name = db.Column(db.String(250), unique=False, nullable=False)
    pet = db.Column(db.String(250), unique=False, nullable=False)
    date = db.Column(db.Date ,nullable=False)

    def _repr_(self):
        return '<Appointment %r>' % self.date

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "speciality_id": self.speciality_id,
            "specialist_id": self.specialist_id,
            "working_hour_id":self.working_hour_id,
            "pet_name": self.pet_name,
            "pet": self.pet,            
            "date": self.date            
        }

#tabla maestra de oferta de horas
class Working_hours(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True) 
    speciality_id = db.Column(db.Integer, db.ForeignKey('speciality.id'), nullable=False)
    specialist_id = db.Column(db.Integer, db.ForeignKey('specialist.id'), nullable=False)
    time = db.Column(db.TIME, nullable=False)

    appointment_rel = db.relationship('Appointment', backref='working_hours', lazy=True)

    def _repr_(self):
        return '<Speciality %r>' % self.speciality_id

    def serialize(self):
        return {
            "id": self.id,
            "speciality_id": self.speciality_id,
            "specialist_id": self.specialist_id,
            "time": self.time.strftime("%H:%M:%S")
        }

class Speciality(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    name = db.Column(db.String(250), unique=False, nullable=False)    
    
    specialist = db.relationship('Specialist', backref='speciality', lazy=True)
    appointment = db.relationship('Appointment', backref='speciality', lazy=True)
    working_hours_rel = db.relationship('Working_hours', backref='speciality', lazy=True)

    def _repr_(self):
        return '<Speciality %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name":self.name
        }

class Specialist(db.Model):        
    id = db.Column(db.Integer, db.ForeignKey("user.id"), primary_key=True)
    speciality_id = db.Column(db.Integer, db.ForeignKey('speciality.id'), nullable=False)
    name = db.Column(db.String(250), unique=False, nullable=False)

    appointment_rel = db.relationship('Appointment', backref='specialist', lazy=True)
    working_hours_rel = db.relationship('Working_hours', backref='specialist', lazy=True)

    def _repr_(self):
        return '<Specialist %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "speciality_id": self.speciality_id,
            "name": self.name,
        }

class Perfil(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    name = db.Column(db.String(250), unique=False, nullable=False)
    user_rel = db.relationship('User', backref='perfil', lazy=True)

    def _repr_(self):
        return '<Perfil %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name            
        }