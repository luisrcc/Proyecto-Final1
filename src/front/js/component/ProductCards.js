import React, { useState } from "react";
import petFood from "../../img/pet-food.jpg";
import petGrooming from "../../img/pet-grooming.jpg";
import petPharmacy from "../../img/pet-pharmacy.jpg";
import Card from "./Card";
import PropTypes from "prop-types";

const ProductCards = ({ title, content, url, buttonName }) => {
	const [cards] = useState([
		{
			title: "",
			content: "",
			url: petGrooming,
			buttonName: "Peluquería"
		},
		{
			title: "",
			content: "",
			url: petFood,
			buttonName: "Alimentos"
		},
		{
			title: "",
			content: "",
			url: petPharmacy,
			buttonName: "Farmacia"
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

ProductCards.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	url: PropTypes.string,
	buttonName: PropTypes.string
};

export default ProductCards;
