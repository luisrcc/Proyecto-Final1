import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const LogoutButton = () => {
	const { actions } = useContext(Context);
	let history = useHistory();

	const handleLogOut = async () => {
		const response = await actions.logout();
		if (response) {
			history.push("/");
		}
	};

	return (
		<button
			type="button"
			className="btn btn-outline-info btn-md reponsive-button ml-2"
			onClick={() => handleLogOut()}>
			Cerrar sesión
		</button>
	);
};
