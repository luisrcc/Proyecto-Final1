import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import cat from "../../img/cat-peeking-bg.jpg";

export const LoginPage = ({ path }) => {
	console.log(path);

	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	const validateForm = values => {
		const errors = {};
		if (!values.email) {
			errors.email = "El email es requerido";
		}
		if (!values.password) {
			errors.password = "La contraseña es requerida";
		}
		return errors;
	};

	const handlerClick = async event => {
		event.preventDefault();
		const response = await actions.setLogin({ email: email, password: password });

		console.log("response login!");
		console.log(response);

		if (!response.ok) {
			Swal.fire({
				title: "Credenciales incorrectas!",
				text: "Favor reintente la operación",
				icon: "error",
				confirmButtonText: "Continuar"
			}).then(() => {
				history.push("/");
			});
		} else {
			Swal.fire({
				title: "Has iniciado sesión exitosamente",
				icon: "success",
				confirmButtonText: "Continuar"
			}).then(() => {
				history.push(path ? path : "/");
			});
		}
	};

	return (
		<div className="login-background">
			<div className="container">
				<div className="row py-4 mt-4 Login">
					<div className="col-sm-12 col-md-7 col-lg-6 mr-auto border p-4 col-centered">
						<form>
							<div className="row justify-content-center login-content">
								<div className="py-4 login-title">
									<h1> Ingrese a su cuenta</h1>
								</div>
								<div className="input-group col-lg-10 mb-4">
									<div className="input-group-prepend">
										<span className="input-group-text bg-white px-4 border-md border-right-0">
											<i className="fa fa-envelope text-muted" />
										</span>
									</div>
									<input
										className="form-control bg-white border-left-0 border-md"
										autoFocus
										type="email"
										name="email"
										placeholder="Ingrese su email"
										value={email}
										onChange={e => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className="input-group col-lg-10 mb-4">
									<div className="input-group-prepend">
										<span className="input-group-text bg-white px-4 border-md border-right-0">
											<i className="fa fa-lock text-muted" />
										</span>
									</div>
									<input
										className="form-control bg-white border-left-0 border-md"
										type="password"
										placeholder="Ingrese su contraseña"
										value={password}
										onChange={e => setPassword(e.target.value)}
										required
									/>
								</div>
							</div>
						</form>
						<div className="text-center w-100">
							<p className="text-muted font-weight-bold">
								¿Olvidó su contraseña?{" "}
								<Link to="/recuperar">
									<a href="#" className="text-info ml-2 mb-5">
										Recuperar contraseña
									</a>
								</Link>
							</p>
						</div>
						<div className="text-center w-100">
							<p className="text-muted font-weight-bold">
								¿No tienes cuenta?{" "}
								<Link to="/register">
									<a href="#" className="text-info ml-2 mb-5">
										Crear cuenta
									</a>
								</Link>
							</p>
						</div>
						<div className="text-center mt-4">
							<div className="my-4">
								<button
									className="btn btn-info center-button reponsive-button"
									type="submit"
									onClick={e => handlerClick(e)}>
									Iniciar Sesión
								</button>
							</div>
							<Link to="/">
								<span className="btn btn-outline-info reponsive-button" href="#" role="button">
									Regresa
								</span>
							</Link>
						</div>
					</div>
					<div className="col-sm-12 col-md-5 col-lg-6 mr-auto pb-4 col-centered">
						{" "}
						<img className="img-cat" src={cat} />{" "}
					</div>
				</div>
			</div>
		</div>
	);
};

LoginPage.propTypes = {
	path: PropTypes.string
};
