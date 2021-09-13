import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import subDays from "date-fns/subDays";
import getDay from "date-fns/getDay";
import es from "date-fns/locale/es";
import PropTypes from "prop-types";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

export const DateTimePicker = ({ currentDate, setCurrentDate, dropDownListData }) => {
	const { store, actions } = useContext(Context);
	const userData = JSON.parse(localStorage.getItem("user"));

	const isWeekday = date => {
		const day = getDay(date);
		return day !== 0 && day !== 6;
	};

	const handleChangeDateSelect = async date => {
		const exampleDate = moment(date).format("YYYY-MM-DD");

		if (dropDownListData.especialidad !== 0 && dropDownListData.especialidad !== 0) {
			const request = {
				id_speciality: dropDownListData.especialidad,
				id_specialist: dropDownListData.especialista,
				date: exampleDate,
				user_id: userData ? userData.id : null
			};
			await actions.getAvailableTimes(request);
		}
		await setCurrentDate(date);
	};

	useEffect(() => {
		if (!currentDate) {
			const exampleDate = moment(new Date()).format("YYYY-MM-DD");
			const request = {
				id_speciality: dropDownListData.especialidad,
				id_specialist: dropDownListData.especialista,
				date: exampleDate,
				user_id: userData ? userData.id : null
			};
			actions.getAvailableTimes(request);
			setCurrentDate(new Date());
		}
	});

	return (
		<div className="form-row justify-content-center">
			<DatePicker
				selected={currentDate ? currentDate : new Date()}
				onChange={date => handleChangeDateSelect(date)}
				filterDate={isWeekday}
				locale="pt-CL"
				// excludeDates={[new Date(), subDays(new Date(), 1)]}
				dateFormat="dd/MM/yyyy"
			/>
		</div>
	);
};

DateTimePicker.propTypes = {
	currentDate: PropTypes.instanceOf(Date),
	setCurrentDate: PropTypes.func,
	dropDownListData: PropTypes.object
};
