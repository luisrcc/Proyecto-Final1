import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ title, content, url, buttonName }) => {
	return (
		<div className="">
			<div className="card" style={{}}>
				<img className="card-img-top" src={url} alt="Card cap" />
				<div className="card-body text-center">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{content}</p>

					<Link to="/booking">
						<a href="/#" className="btn btn-info text-center reponsive-button">
							{buttonName}
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	url: PropTypes.string,
	buttonName: PropTypes.string
};

export default Card;
