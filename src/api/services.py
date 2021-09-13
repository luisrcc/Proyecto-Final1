from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Speciality, Working_hours, Appointment, Specialist
from api.utils import generate_sitemap, APIException
from datetime import datetime, time, date
import json
import collections
import pytz


def check_available_time_specialist(id_speciality, id_specialist, date, user_id):
    response = get_times_by_speciality(
        id_speciality, id_specialist, date, user_id)
    return response


def get_times_by_speciality(id_speciality, id_specialist, date, user_id):
    speciality_response = Speciality.query.get_or_404(id_speciality)
    exist_working_hours = False

    if speciality_response == 404:
        return False

    timeZ_As = pytz.timezone('America/Santiago')
    now = datetime.now(timeZ_As).time()
    nowDate = datetime.now(timeZ_As)

    newDateParam = datetime.strptime(date, '%Y-%m-%d')

    if newDateParam.strftime('%Y-%m-%d') == nowDate.strftime('%Y-%m-%d'):
        now = datetime.now(timeZ_As).time()
    elif newDateParam.strftime('%Y-%m-%d') < nowDate.strftime('%Y-%m-%d'):
        now = time(23, 0, 0, 0)
    elif newDateParam.strftime('%Y-%m-%d') > nowDate.strftime('%Y-%m-%d'):
        now = time(0, 0, 0, 0) 

    ids_horas_tomadas = db.session.query(Appointment.working_hour_id).filter(
        Appointment.speciality_id == id_speciality, Appointment.specialist_id == id_specialist, Appointment.date == date)

    response = db.session.query(Working_hours).filter(Working_hours.specialist_id == id_specialist,
                                                      Working_hours.speciality_id == id_speciality, ~Working_hours.id.in_(ids_horas_tomadas),  Working_hours.time >= now)
    if response:
        return response

    return False


def get_booking_list_client(user_id):
    timeZ_As = pytz.timezone('America/Santiago')
    now = datetime.now(timeZ_As).time()
    nowDate = datetime.now(timeZ_As).strftime('%Y-%m-%d')

    bookingList = db.session.query(\
    Appointment.pet_name, Appointment.date, Working_hours.time,\
    Speciality.name.label("especiality_name"), Specialist.name.label("especialist_name")).\
    select_from(Appointment).\
    join(Working_hours, Speciality, Specialist).\
    filter(Appointment.user_id == user_id).\
    all()
    
    if bookingList:
        return json.dumps([dict(r) for r in bookingList], default=default)

    return False

def get_booking_list_professional(user_id):
    timeZ_As = pytz.timezone('America/Santiago')
    now = datetime.now(timeZ_As).time()
    nowDate = datetime.now(timeZ_As).strftime('%Y-%m-%d')

    bookingList = db.session.query(\
    Appointment.pet_name, Appointment.date, Working_hours.time ).\
    select_from(Appointment).\
    join(Working_hours, Speciality, Specialist).\
    filter(Appointment.specialist_id == user_id).\
    all()
    
    if bookingList:
        return json.dumps([dict(r) for r in bookingList], default=default)

    return False

def default(o):
    if isinstance(o, (date, datetime, time)):
        return o.isoformat()
