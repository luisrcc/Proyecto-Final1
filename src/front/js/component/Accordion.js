import React, { useState } from "react";
import cat from "../../img/cat-with-vet.jpg";
import dog from "../../img/dog-smiling.jpg";
import groomer from "../../img/dog-groomer.jpg";

const Accordion = () => {
	return (
		<div className="accordion show-hide-accordion" id="accordionExample">
			<div className="">
				<div className="card">
					<div className="card-header" id="headingOne">
						<h2 className="mb-0">
							<button
								className="btn btn-light btn-block text-left accordion-title"
								type="button"
								data-toggle="collapse"
								data-target="#collapseOne"
								aria-expanded="true"
								aria-controls="collapseOne">
								Cuidado Preventivo
							</button>
						</h2>
					</div>

					<div
						id="collapseOne"
						className="collapse show"
						aria-labelledby="headingOne"
						data-parent="#accordionExample">
						<div className="card-body text-center">
							<h2>Cuidado preventivo</h2>

							<p className="tabs-info-text">
								El cuidado preventivo dirige a su mascota en una dirección más saludable a lo largo de
								su vida, ayudándola a mantenerse protegida de virus, parásitos y otros. El viaje de
								bienestar de su mascota comienza aquí.
							</p>
							<img className="preventative-care-img" src={cat} />
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header" id="headingTwo">
						<h2 className="mb-0">
							<button
								className="btn btn-light btn-block text-left collapsed accordion-title"
								type="button"
								data-toggle="collapse"
								data-target="#collapseTwo"
								aria-expanded="false"
								aria-controls="collapseTwo">
								Cuidado dental
							</button>
						</h2>
					</div>
					<div
						id="collapseTwo"
						className="collapse"
						aria-labelledby="headingTwo"
						data-parent="#accordionExample">
						<div className="card-body text-center">
							<h2>Cuidado dental</h2>

							<p className="tabs-info-text">
								Los dientes de su mascota no se mantendrán blancos como perlas sin el cuidado dental
								adecuado. Nuestros veterinarios pueden ofrecerle consejos para ayudar con el tratamiento
								en el hogar de su mascota, y también brindamos amplios servicios dentales profesionales
								para tratar y prevenir enfermedades dentales.
							</p>
							<img className="dental-care-img" src={dog} />
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header" id="headingThree">
						<h2 className="mb-0">
							<button
								className="btn btn-light btn-block text-left collapsed accordion-title"
								type="button"
								data-toggle="collapse"
								data-target="#collapseThree"
								aria-expanded="false"
								aria-controls="collapseThree">
								Otros servicios
							</button>
						</h2>
					</div>
					<div
						id="collapseThree"
						className="collapse"
						aria-labelledby="headingThree"
						data-parent="#accordionExample">
						<div className="card-body ">
							<h2 className="text-center">Otros servicios</h2>

							<p className="tabs-info-text">PetsVets también ofrece:</p>
							<ul>
								<li>Cirugía de tejidos blandos, incluidas esterilizaciones y castraciones.</li>
								<li>Cuidado de la piel y manejo de alergias.</li>
								<li>Peluquería.</li>
								<li>Atención de emergencia diurna.</li>
							</ul>

							<img className="other-services-img" src={groomer} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Accordion;
