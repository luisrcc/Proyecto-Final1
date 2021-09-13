import React, { useState } from "react";
import petShop1 from "../../img/pet-shop1.jpg";
import petShop2 from "../../img/pet-shop2.jpg";
import petShop3 from "../../img/pet-shop3.jpg";

import doctor1 from "../../img/doctor-cruz.jpg";
import doctor2 from "../../img/doctor-lisa.jpg";
import doctor3 from "../../img/doctor-ivan.jpg";

import Card from "./Card";
import PropTypes from "prop-types";

const Cards = ({ title, content, url, buttonName }) => {
	const [cards] = useState([
		{
			title: "Luis Cruz",
			content: "",
			url: doctor1,
			buttonName: "Agendar cita"
		},
		{
			title: "Lisa Cordero",
			content: "",
			url: doctor2,
			buttonName: "Agendar cita"
		},
		{
			title: "Ivan Delgado",
			content: "",
			url: doctor3,
			buttonName: "Agendar cita"
		}
	]);

	return (
		<div className="card-deck">
			{cards.map((card, index) => (
				<Card
					key={index}
					title={card.title}
					content={card.content}
					url={card.url}
					buttonName={card.buttonName}
				/>
			))}
		</div>
	);
};

Cards.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	url: PropTypes.string,
	buttonName: PropTypes.string
};

export default Cards;
