import React, { useState } from "react";
import PropTypes from "prop-types";

export const Card = ({ title, content, information, number }) => {
	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title mb-4">{title}</h5>
				<h5 className="mt-1 mb-3">{number}</h5>
				<div className="mb-1">
					<span className="text-danger">
						{" "}
						<i className="mdi mdi-arrow-bottom-right" /> {information}{" "}
					</span>
					<span className="text-muted">{content}</span>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	information: PropTypes.string,
	number: PropTypes.number
};
