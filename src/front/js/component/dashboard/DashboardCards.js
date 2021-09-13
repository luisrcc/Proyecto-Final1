import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

export const DashboardCards = ({ title, content, information, number }) => {
	const [Cards] = useState([
		{
			title: "Mensajes",
			content: "",
			information: "3.56%",
			nummber: 2
		},
		{
			title: "Citas",
			content: "",
			information: "3.56%",
			nummber: 3
		}
	]);

	return (
		<div className="card-deck">
			{Cards.map((card, index) => (
				<Card
					key={index}
					title={card.title}
					content={card.content}
					information={card.information}
					nummber={card.nummber}
				/>
			))}
		</div>
	);
};

DashboardCards.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	information: PropTypes.string,
	number: PropTypes.number
};
