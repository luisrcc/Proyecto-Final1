import React from "react";
import { ButtonRegister } from "./ButtonRegister";

const JoinUsBanner = () => {
	return (
		<div className="jumbotron jumbotron-fluid jumbotron-join-us mb-0">
			<div className="container">
				<div className="content join-us-content p-lg-6 pt-2">
					<h1 className="text-uppercase join-us-text-1">Nos encantaría conecerte</h1>
					<h1 className="text-uppercase join-us-text-2">a ti y a tu mascota</h1>
					<h5 className="register-button-padding" />
				</div>
			</div>
		</div>
	);
};

export default JoinUsBanner;
