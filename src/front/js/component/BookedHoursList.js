import React from "react";
import PropTypes from "prop-types";
import { PROFILE_CODE_CLIENT, PROFILE_CODE_PROFESIONAL } from "../constantes/index";

const BookedHoursList = ({ perfilId, dataList }) => {
	const getTableClientHours = dataList => {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col">N°</th>
						<th scope="col">Nombre Mascota</th>
						<th scope="col">Fecha Agendada</th>
						<th scope="col">Hora</th>
						<th scope="col">Especialidad</th>
						<th scope="col">Especialista</th>
					</tr>
				</thead>
				<tbody>
					{dataList.map((item, index) => (
						<tr key={index}>
							<th scope="row">{index}</th>
							<td>{item.pet_name}</td>
							<td>{item.date}</td>
							<td>{item.time}</td>
							<td>{item.especiality_name}</td>
							<td>{item.especialist_name}</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	};

	const getTableProfessionalHours = dataList => {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col">N°</th>
						<th scope="col">Nombre Mascota</th>
						<th scope="col">Fecha Agendada</th>
						<th scope="col">Hora</th>
					</tr>
				</thead>
				<tbody>
					{dataList.map((item, index) => (
						<tr key={index}>
							<th scope="row">{index}</th>
							<td>{item.pet_name}</td>
							<td>{item.date}</td>
							<td>{item.time}</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	};

	const renderList = (perfilId, dataList) => {
		if (perfilId == PROFILE_CODE_CLIENT) {
			return getTableClientHours(dataList);
		}
		if (perfilId == PROFILE_CODE_PROFESIONAL) {
			return getTableProfessionalHours(dataList);
		}
		return null;
	};

	return <div>{renderList(perfilId, dataList)}</div>;
};

export default BookedHoursList;

BookedHoursList.propTypes = {
	perfilId: PropTypes.integer,
	dataList: PropTypes.array
};
