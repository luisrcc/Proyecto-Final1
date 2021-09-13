import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import { DateTimePicker } from "./DateTimePicker";
import { Link } from "react-router-dom";
import moment from "moment";
import DropDownList from "./DropDownList";
import TimeSelector from "./TimeSelector";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import catDog from "../../img/dog-cat-booking.jpg";

export const Booking = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();

	const [currentDate, setCurrentDate] = useState(null);

	const { register, watch } = useForm({ mode: "onChange" });

	const userData = JSON.parse(localStorage.getItem("user"));

	const inputPet = watch("inputPet");
	const inputPetName = watch("inputPetName");

	const defaultItemEspecialidad = { nombre: "Seleccione especialidad..." };
	const defaultItemEspecialista = { nombre: "Seleccione especialista..." };

	const dataEspecialidades = store.dataEspecialities ? store.dataEspecialities.specialities : [];
	const dataEspecialistas = store.dataEspecialities ? store.dataEspecialities.specialists : [];

	const [dropDownListData, setDropDownListData] = useState({
		especialidad: 0,
		especialistas: null,
		especialista: 0
	});

	const especialidadChange = event => {
		const especialidad = JSON.parse(event.target.value);
		const datos = dataEspecialistas;
		const especialistas = datos.filter(especialista => especialista.speciality_id === parseInt(especialidad));

		setDropDownListData({
			especialidad: especialidad,
			especialistas: especialistas.length > 0 ? especialistas : [],
			especialista: 0
		});
	};

	const especialistaChange = event => {
		const especialista = JSON.parse(event.target.value);
		setDropDownListData({
			...dropDownListData,
			especialista: especialista
		});
		setCurrentDate(null);
	};

	const handleChangeInputPet = () => {
		setDropDownListData({
			especialidad: 0,
			especialistas: null,
			especialista: 0
		});
	};

	const handleClickReservar = async e => {
		e.preventDefault();

		const exampleDate = moment(currentDate).format("YYYY-MM-DD");
		const request = {
			user_id: userData.id,
			speciality_id: dropDownListData.especialidad,
			specialist_id: dropDownListData.especialista,
			working_hour_id: parseInt(e.target.value),
			pet_name: inputPetName,
			pet: inputPet,
			date: exampleDate
		};

		const response = await actions.createNewAppointment(request);
		if (!response.ok) {
			Swal.fire({
				title: "Hubo un Error!",
				text: "Favor reintente la operación",
				icon: "error",
				confirmButtonText: "Continuar"
			}).then(() => {
				history.push("/");
			});
		} else {
			Swal.fire({
				title: "Hora Agendada con éxito",
				text: "¿Deseas continuar?",
				icon: "success",
				confirmButtonText: "Continuar"
			}).then(() => {
				history.push("/");
			});
		}
	};

	return (
		<div className="margin-bottom-style">
			<div className="container pt-4">
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-12 col-sm-12 ">
						<img src={catDog} className="booking-background" />
					</div>
					<div className="col-lg-6 col-md-12 border p-4 col-sm-12">
						<form>
							<div className="row justify-content-center">
								<div className="input-group col-md-6 mb-4">
									<div className="input-group-prepend">
										<span className="input-group-text bg-white px-4 border-md border-right-0">
											<i className="fa fa-paw text-muted" />
										</span>
									</div>
									<input
										className="form-control border-md border-left-0 erase-outline"
										id="inputPetName"
										name="inputPetName"
										placeholder="Ingrese nombre de la mascota"
										ref={register({
											required: true,
											maxLength: 20
										})}
									/>
								</div>
								<div className="input-group col-md-6 mb-4">
									<div className="input-group-prepend">
										<span className="input-group-text bg-white px-4 border-md border-right-0">
											<i className="fa fa-paw text-muted" />
										</span>
									</div>
									<select
										id="inputPet"
										name="inputPet"
										className="form-control border-md border-left-0 erase-outline"
										ref={register({ required: true })}
										onChange={() => handleChangeInputPet()}>
										<option value="" selected>
											Seleccione...
										</option>
										<option value="perro">Perro</option>
										<option value="gato">Gato</option>
									</select>
								</div>
							</div>

							{inputPet && (
								<div className="row justify-content-center">
									<div className="input-group col-md-6 mb-4">
										<div className="input-group-prepend">
											<span className="input-group-text bg-white border-md border-right-0">
												<i className="fa fa-user-md text-muted" />
											</span>
										</div>
										<DropDownList
											data={dataEspecialidades}
											nameDropDown={"inputSpeciality"}
											textField={"name"}
											idTextField={"id"}
											defaultItem={defaultItemEspecialidad}
											onChange={especialidadChange}
											value={
												dropDownListData.especialidad === 0
													? dropDownListData.especialidad
													: dropDownListData.especialidad
														? dropDownListData.especialidad.id
														: 0
											}
											ref={register({ required: true })}
											titulo={"Especialidad"}
										/>
									</div>
									<div className="input-group col-md-6 mb-4">
										<div className="input-group-prepend">
											<span className="input-group-text bg-white border-md border-right-0">
												<i className="fa fa-user-md text-muted" />
											</span>
										</div>
										<DropDownList
											data={dropDownListData.especialistas}
											textField={"name"}
											nameDropDown={"inputSpecialist"}
											idTextField={"speciality_id"}
											defaultItem={defaultItemEspecialista}
											onChange={especialistaChange}
											value={
												dropDownListData.especialista === 0
													? dropDownListData.especialista
													: dropDownListData.especialista.id
											}
											ref={register({ required: true })}
											titulo={"Especialista"}
										/>
									</div>
								</div>
							)}

							{dropDownListData.especialista && dropDownListData.especialista !== 0 ? (
								<>
									<DateTimePicker
										currentDate={currentDate}
										setCurrentDate={setCurrentDate}
										dropDownListData={dropDownListData}
									/>
									<TimeSelector handleClick={handleClickReservar} />
								</>
							) : null}
							<div className="row justify-content-center">
								<Link to="/">
									<span className="btn btn-info reponsive-button" href="#" role="button">
										Regresa
									</span>
								</Link>
							</div>
						</form>
					</div>
					<div className="col-md-12 col-sm-12 text-center">
						<img src={catDog} className="booking-background-small" />
					</div>
				</div>
			</div>
		</div>
	);
};
