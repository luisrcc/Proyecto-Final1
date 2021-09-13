import React, { useContext, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel } from "../component/Carousel";
import Cards from "../component/Cards";
import Reviews from "../component/Reviews";
import ProductCards from "../component/ProductCards";
import JoinUsBanner from "../component/JoinUsBanner";
import BookingJumbotron from "../component/BookingJumbotron";
import Tabs from "../component/Tabs";
import Accordion from "../component/Accordion";
import JumbotronInfo from "../component/JumbotronInfo";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.setLoadingDefault();
	}, []);

	return (
		<>
			<div className="text-center">
				<div className="ml-auto">
					<Carousel />
				</div>
			</div>

			<div className="mx-auto">
				<JumbotronInfo />
			</div>

			<div className="mx-auto my-5">
				<Cards />
			</div>

			<div className="reviews-component">
				<Reviews />
			</div>

			<div className="mx-2 my-5 show-tabs">
				<Tabs />
				<Accordion />
			</div>

			<div className="register-join-us-banner">
				<JoinUsBanner />
			</div>
		</>
	);
};
