import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Button } from "bootstrap";

const TimeSelector = ({ handleClick }) => {
	const { store } = useContext(Context);

	let listTimesAvailable = store.listTimesAvailable;

	return (
		<div className="container pt-3 mb-3 ">
			{listTimesAvailable !== undefined && listTimesAvailable !== null && listTimesAvailable.length > 0 ? (
				listTimesAvailable.map((item, index) => {
					return (
						<div key={index} className="row text-center p-1 justify-content-center">
							<div className="col-lg btn-sm">
								<button
									type="button"
									className="btn btn-outline-info btn-lg btn-sm"
									value={item.id}
									onClick={e => handleClick(e)}>
									{item.time}
								</button>
							</div>
						</div>
					);
				})
			) : (
				<div className="row justify-content-center">
					<div className="alert alert-warning" role="alert">
						{"No existen horas disponibles"}
					</div>
				</div>
			)}
		</div>
	);
};

export default TimeSelector;

TimeSelector.propTypes = {
	timeList: PropTypes.object,
	handleClick: PropTypes.func
};
