import React, { Component } from "react";
import { Link } from "react-router-dom";

import { CopyRight } from "../component/CopyRight";

export const Footer = () => (
	<footer className="footer mt-auto text-center bg-light w-100" style={{ margin: "auto auto 0 auto" }}>
		<div className="footerRedes">
			<a href="http://www.facebook.com">
				<i className="fab fa-2x fa-facebook text-info" style={{ margin: "5px" }} />
			</a>
			<a href="http://www.instagram.com">
				<i className="fab fa-2x fa-instagram text-info" style={{ margin: "5px" }} />
			</a>
			<a href="http://www.pinterest.com">
				<i className="fab fa-2x fa-pinterest text-info" style={{ margin: "5px" }} />
			</a>
			<a href="http://www.twitter.com">
				<i className="fab fa-2x fa-twitter text-info" style={{ margin: "5px" }} />
			</a>
		</div>
		<div className="footerInfo">
			<Link to="/#">
				<span className="footerFeatures text-info"> Legal </span>|
			</Link>
			<Link to="#">
				<span className="text-info"> Politicas de Privacidad</span>
			</Link>

			<CopyRight />
		</div>
	</footer>
);
