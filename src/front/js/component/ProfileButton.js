import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ProfileButton = () => {
	const { actions } = useContext(Context);
	let history = useHistory();

	const handleLogOut = async () => {
		const response = await actions.logout();
		if (response) {
			history.push("/");
		}
	};

	return (
		<Link to="/profile">
			<button className="btn btn-info btn-md reponsive-button" type="button">
				Perfil
			</button>
		</Link>
	);
};
