import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ButtonRegister } from "./ButtonRegister";
import { ButtonLogin } from "./ButtonLogin";
import { LogoutButton } from "./LogoutButton";
import { ProfileButton } from "./ProfileButton";
import logo from "../../img/logo.jpg";

export const Navbar = () => {
	const { store } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to="/">
				<a href="/#" className="navbar-brand">
					<img className="navbar-logo" src={logo} alt="logo" width="80" />
				</a>
			</Link>
			<div className="form-inline ml-auto">
				<Link to="/register">{!store.isLogged ? <ButtonRegister /> : null}</Link>
				<Link to="/login">{!store.isLogged ? <ButtonLogin /> : null}</Link>
				<Link to="/login">{store.isLogged ? <ProfileButton /> : null}</Link>
				<Link to="/login">{store.isLogged ? <LogoutButton /> : null}</Link>
			</div>
		</nav>
	);
};
