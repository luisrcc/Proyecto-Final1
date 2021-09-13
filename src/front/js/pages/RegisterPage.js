import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import dog from "../../img/black-dog-bg.jpg";

export const RegisterPage = () => {
	const { actions } = useContext(Context);
	const [errors, setErrors] = useState({});

	const inicializarCamposForm = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		password: "",
		passwordConfirmation: ""
	};
	const [values, setValues] = useState(inicializarCamposForm);

	const history = useHistory();

	const handlerClick = async e => {
		e.preventDefault();

		if (validate()) {
			const isOk = await actions.setRegister({
				first_name: values.firstName,
				last_name: values.lastName,
				email: values.email,
				phone: values.phone,
				password: values.password,
				perfil_id: 1
			});

			if (!isOk) {
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
					title: "Usuario registrado con exito",
					text: "¿Deseas continuar?",
					icon: "success",
					confirmButtonText: "Continuar"
				}).then(() => {
					history.push("/");
				});
			}
		}
	};

	const handleInputChange = (e, validarNumeros) => {
		e.preventDefault();
		const regexp = /^[0-9\b]+$/;
		const { name, value } = e.target;
		const valorTrim = value;

		if (validarNumeros) {
			if (valorTrim === "" || regexp.test(valorTrim)) {
				const fieldValue = { [name]: valorTrim };
				setValues({
					...values,
					...fieldValue
				});
				validate(fieldValue);
			}
		} else {
			const fieldValue = { [name]: valorTrim };
			setValues({
				...values,
				...fieldValue
			});
			validate(fieldValue);
		}
	};

	const validate = (fieldValues = values) => {
		let temp = { ...errors };

		if ("firstName" in fieldValues)
			temp.firstName =
				fieldValues.firstName && fieldValues.firstName.trim().length > 0 ? "" : "Nombre corto es obligatorio";

		if ("lastName" in fieldValues)
			temp.lastName =
				fieldValues.lastName && fieldValues.lastName.trim().length > 0 ? "" : "Apellido es obligatorio";

		if ("email" in fieldValues)
			temp.email = fieldValues.email && fieldValues.email.trim().length > 0 ? "" : "Email es obligatorio";

		if ("phone" in fieldValues)
			temp.phone = fieldValues.phone && fieldValues.phone.trim().length > 0 ? "" : "Teléfono es obligatorio";

		if ("password" in fieldValues) {
			temp.password =
				fieldValues.password && fieldValues.password.trim().length > 0 ? "" : "Password es obligatorio";
			if (values.passwordConfirmation && values.passwordConfirmation.length > 0) {
				if (fieldValues.password === "") {
					temp.passwordConfirmation = "falta la contraseña";
				}
				if (fieldValues.password !== "" && fieldValues.password !== values.passwordConfirmation) {
					temp.passwordConfirmation = "las contraseñas son diferentes";
				}
				if (fieldValues.password !== "" && fieldValues.password === values.passwordConfirmation) {
					temp.passwordConfirmation = "";
				}
			}
		}

		if ("passwordConfirmation" in fieldValues) {
			if (fieldValues.passwordConfirmation && fieldValues.passwordConfirmation.length > 0) {
				if (values.password === "") {
					temp.passwordConfirmation = "falta la contraseña";
				}
				if (values.password !== "" && values.password !== fieldValues.passwordConfirmation) {
					temp.passwordConfirmation = "las contraseñas son diferentes";
				}
				if (values.password !== "" && values.password === fieldValues.passwordConfirmation) {
					temp.passwordConfirmation = "";
				}
			} else {
				temp.passwordConfirmation = "confirmar contraseña es obligatorio";
			}
		}

		setErrors({
			...temp
		});

		if (fieldValues === values) {
			return Object.values(temp).every(x => x === "");
		}
	};

	return (
		<div className="">
			<div className="container ">
				<div className="row pb-4 mb-4 align-items-center">
					<div className="col-sm-12 col-lg-6 p-0">
						<img src={dog} className="register-background" width="100%" />
					</div>

					<div className="col-sm-12 col-md-12 col-lg-6 border p-4 mt-3 register-form">
						<div className="py-4 register-title">
							<h1>Crea una cuenta</h1>
						</div>
						<form autoComplete="off" noValidate onSubmit={handlerClick}>
							<div className="row">
								<div className="form-group col-lg-6 mb-4 mx-auto">
									<label className="font-weight-bold" htmlFor="firstName">
										Nombre:
									</label>
									<input
										id="firstName"
										type="text"
										name="firstName"
										value={values.firstName}
										onChange={e => handleInputChange(e, false)}
										placeholder="Ingrese Nombre"
										className="form-control bg-white border-md"
									/>
									{errors.firstName ? (
										<small id="error-nombre" className="form-text text-danger">
											{errors.firstName}
										</small>
									) : null}
								</div>

								<div className="form-group col-lg-6 mb-4">
									<label className="font-weight-bold" htmlFor="lastName">
										Apellido:
									</label>
									<input
										id="lastName"
										type="text"
										name="lastName"
										value={values.lastName}
										onChange={e => handleInputChange(e, false)}
										placeholder="Ingrese Apellido"
										className="form-control bg-white border-md"
									/>
									{errors.lastName ? (
										<small id="error-lastName" className="form-text text-danger">
											{errors.lastName}
										</small>
									) : null}
								</div>
								<div className="form-group col-lg-6 mb-4">
									<label className="font-weight-bold" htmlFor="email">
										Email:
									</label>
									<input
										id="email"
										type="email"
										name="email"
										value={values.email}
										onChange={e => handleInputChange(e, false)}
										placeholder="Ingrese su email"
										className="form-control bg-white border-md"
									/>
									{errors.email ? (
										<small id="error-email" className="form-text text-danger">
											{errors.email}
										</small>
									) : null}
								</div>
								<div className="form-group col-lg-6 mb-4">
									<label className="font-weight-bold" htmlFor="phoneNumber">
										Celular:
									</label>
									<input
										id="phoneNumber"
										type="text"
										name="phone"
										value={values.phone}
										onChange={e => handleInputChange(e, false)}
										placeholder="Ingrese numero telefonico"
										className="form-control bg-white border-md pl-3"
									/>
									{errors.phone ? (
										<small id="error-phone" className="form-text text-danger">
											{errors.phone}
										</small>
									) : null}
								</div>

								<div className="form-group col-lg-6 mb-4 mx-auto">
									<label className="font-weight-bold" htmlFor="password">
										{"Contraseña:"}
									</label>
									<input
										id="password"
										type="password"
										name="password"
										value={values.password}
										onChange={e => handleInputChange(e, false)}
										placeholder="Ingrese Contraseña"
										className="form-control bg-white border-md"
									/>
									{errors.password ? (
										<small id="error-password" className="form-text text-danger">
											{errors.password}
										</small>
									) : null}
								</div>

								<div className="form-group col-lg-6 mb-4 mx-auto">
									<label className="font-weight-bold" htmlFor="passwordConfirmation">
										{"Confirme Contraseña:"}
									</label>
									<input
										id="passwordConfirmation"
										type="password"
										name="passwordConfirmation"
										value={values.passwordConfirmation}
										onChange={e => handleInputChange(e, false)}
										placeholder="Confirme Contraseña"
										className="form-control bg-white border-md"
									/>
									{errors.passwordConfirmation ? (
										<small id="error-passwordConfirmation" className="form-text text-danger">
											{errors.passwordConfirmation}
										</small>
									) : null}
								</div>

								<div className="form-group col-lg-12 mx-auto mb-0">
									<button href="#" type="submit" className="btn btn-info btn-block py-2">
										<span clastrue="font-weight-bold">Crea tu cuenta</span>
									</button>
								</div>
								<div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
									<div className="border-bottom w-100 ml-5" />
									<span className="px-2 small text-muted font-weight-bold text-muted">O</span>
									<div className="border-bottom w-100 mr-5" />
								</div>
								<div className="form-group col-lg-12 mx-auto">
									<a href="#" className="btn btn-info btn-block py-2 btn-facebook">
										<i className="fa fa-facebook-f mr-2" />
										<span className="font-weight-bold">Continuar con Facebook</span>
									</a>
								</div>
								<div className="form-group col-lg-12 mx-auto">
									<a href="#" className="btn btn-info btn-block py-2 btn-facebook">
										<i className="fa fa-facebook-f mr-2" />
										<span className="font-weight-bold">Continuar con Google</span>
									</a>
								</div>

								<div className="text-center w-100 mb-5">
									<p className="text-muted font-weight-bold">
										¿Ya tienes cuenta?{" "}
										<Link to="/login">
											<a href="#" className="text-info ml-2 mb-5">
												Ingresa
											</a>
										</Link>
									</p>
									<Link to="/">
										<span className="btn btn-outline-info" href="#" role="button">
											Regresa
										</span>
									</Link>
								</div>
							</div>
						</form>
					</div>
					<div className="col-sm-12 col-md-12 text-center">
						<img src={dog} className="register-bg-small" width="100%" />
					</div>
				</div>
			</div>
		</div>
	);
};
