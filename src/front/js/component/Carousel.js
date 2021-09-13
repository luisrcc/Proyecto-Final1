import React from "react";
import { Link } from "react-router-dom";

export const Carousel = () => {
	return (
		<div className="jumbotron-inicio">
			<div className="container">
				<div className="jumbotron-booking-content py-5">
					<h1 className="text-uppercase text-center welcome-text center-welcome-text">Bienvenidos a</h1>
					<h1 className="text-uppercase text-center brand-text">petsvets</h1>
					<div className="jumbotron-booking-button text-center">
						<Link to="/booking">
							<button
								type="submit"
								className="btn btn-info btn-md book-appointment-button reponsive-button">
								Agendar una cita
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
