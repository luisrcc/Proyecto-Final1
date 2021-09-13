import React, { useState } from "react";
import cat from "../../img/cat-with-vet.jpg";
import dog from "../../img/dog-smiling.jpg";
import groomer from "../../img/dog-groomer.jpg";

const Tabs = () => {
	// function Tabs() {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = index => {
		setToggleState(index);
	};

	return (
		<div className="container">
			<div className="row justify-content-center">
				<h2 className="text-center p-2">Servicios veterinarios excepcionales para cualquier situación</h2>
				<p className="px-4 text-center">
					La comunicación y la educación son el sello distintivo de la atención que brindamos a nuestros
					pacientes y clientes. Cuando una mascota se enferma, sabemos lo nerviosa y desprevenida que puede
					sentirse su familia. Podemos tomar estas situaciones abrumadoras y resolverlas con una evaluación
					cuidadosa, diagnósticos avanzados y un tratamiento eficaz. Y con nuestro Programa VIP, el cuidado de
					su mascota es mucho más asequible.
				</p>
			</div>
			<div className="row mt-5">
				<div className="tabs-container border-0 show-hide-tabs">
					<div className="bloc-tabs">
						<button
							className={
								toggleState === 1
									? "tabs active-tabs tabs-button-style rounded-top"
									: "tabs border border-light inactive-tab-style"
							}
							onClick={() => toggleTab(1)}>
							<p className="mb-0">
								<i className="fas fa-stethoscope pr-1" />
								Cuidado Preventivo
							</p>
						</button>
						<button
							className={
								toggleState === 2 ? "tabs active-tabs tabs-button-style" : "tabs border border-light"
							}
							onClick={() => toggleTab(2)}>
							<p className="mb-0">
								<i className="fas fa-tooth pr-1" />
								Cuidado dental
							</p>
						</button>
						<button
							className={
								toggleState === 3 ? "tabs active-tabs tabs-button-style" : "tabs border border-light"
							}
							onClick={() => toggleTab(3)}>
							<p className="mb-0">
								<i className="fas fa-paw pr-1" />
								Otros servicios
							</p>
						</button>
					</div>

					<div className="content-tabs">
						<div className={toggleState === 1 ? "content  active-content" : "content"}>
							<div className="row">
								<div className="col-lg-8 pl-5">
									<h2>Cuidado preventivo</h2>

									<p className="tabs-info-text">
										El cuidado preventivo dirige a su mascota en una dirección más saludable a lo
										largo de su vida, ayudándola a mantenerse protegida de virus, parásitos y otros.
										El viaje de bienestar de su mascota comienza aquí.
									</p>
								</div>
								<div className="col-lg-4">
									<img className="preventative-care-img" src={cat} />
								</div>
							</div>
						</div>

						<div className={toggleState === 2 ? "content  active-content" : "content"}>
							<div className="row">
								<div className="col-lg-8 pl-5">
									<h2>Cuidado dental</h2>

									<p className="tabs-info-text">
										Los dientes de su mascota no se mantendrán blancos como perlas sin el cuidado
										dental adecuado. Nuestros veterinarios pueden ofrecerle consejos para ayudar con
										el tratamiento en el hogar de su mascota, y también brindamos amplios servicios
										dentales profesionales para tratar y prevenir enfermedades dentales.
									</p>
								</div>
								<div className="col-lg-4">
									<img className="dental-care-img" src={dog} />
								</div>
							</div>
						</div>

						<div className={toggleState === 3 ? "content  active-content" : "content"}>
							<div className="row">
								<div className="col-lg-8 pl-5">
									<h2>Otros servicios</h2>

									<p className="tabs-info-text">
										PetsVets también ofrece:
										<ul>
											<li>
												Cirugía de tejidos blandos, incluidas esterilizaciones y castraciones.
											</li>
											<li>Cuidado de la piel y manejo de alergias.</li>
											<li>Peluquería.</li>
											<li>Atención de emergencia diurna.</li>
										</ul>
									</p>
								</div>
								<div className="col-lg-4">
									<img className="other-services-img" src={groomer} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tabs;
