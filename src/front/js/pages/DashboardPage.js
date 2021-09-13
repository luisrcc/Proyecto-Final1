import React from "react";
import docImg from "../../img/doctorPic.jpeg";

export const DashboardPage = () => {
	return (
		// <link rel="stylesheet" href="https://allyoucan.cloud/cdn/icofont/1.0.1/icofont.css" integrity="sha384-jbCTJB16Q17718YM9U22iJkhuGbS0Gd2LjaWb4YJEZToOPmnKDjySVa323U+W7Fv" crossorigin="anonymous" />

		<div className="container">
			<div className="row">
				<div className="col-md-3">
					<div className="osahan-account-page-left shadow-sm bg-white h-100">
						<div className="border-bottom p-4">
							<div className="osahan-user text-center">
								<div className="osahan-user-media">
									<img
										className="mb-3 rounded-pill shadow-sm mt-1"
										src={docImg}
										alt="gurdeep singh osahan"
									/>
									<div className="osahan-user-media-body">
										<h6 className="mb-2">Gurdeep Singh</h6>
										<p className="mb-1">+56 85680-79956</p>
										<p>iamosahan@gmail.com</p>
										<p className="mb-0 text-black font-weight-bold">
											<a
												className="text-primary mr-3"
												data-toggle="modal"
												data-target="#edit-profile-modal"
												href="#">
												<i className="icofont-ui-edit" />
												EDITAR
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
						<ul className="nav nav-tabs flex-column border-0 pt-4 pl-4 pb-4" id="myTab" role="tablist">
							<li className="nav-item">
								<a
									className="nav-link"
									id="orders-tab"
									data-toggle="tab"
									href="#orders"
									role="tab"
									aria-controls="orders"
									aria-selected="false">
									<i className="icofont-food-cart" />
									Ordenes
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-md-9">
					<div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
						<div className="tab-content" id="myTabContent">
							<div
								className="tab-pane  fade  active show"
								id="orders"
								role="tabpanel"
								aria-labelledby="orders-tab">
								<h4 className="font-weight-bold mt-0 mb-4">Horas Agendadas</h4>
								<div className="bg-white card mb-4 order-list shadow-sm">
									<div className="gold-members p-4">
										<a href="#" />
										<div className="media">
											<a href="#">
												<img
													className="mr-4"
													src="https://bootdey.com/img/Content/avatar/avatar2.png"
													alt="Generic placeholder image"
												/>
											</a>
											<div className="media-body">
												<h5 className="mb-4">
													Veterinaria
													<span className="badge badge-info mx-3">Por Pagar</span>
												</h5>
												<div className="mb-3">
													<span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">
														Hora reservada:
													</span>
													<span className="bg-light-blue">02.05.2021</span>
													<hr />
													<span className="bg-light-blue">Consulta de 14-15 hrs</span>
													<hr />
												</div>
												<div className="mb-5">
													<span className="mr-2 d-block d-sm-inline-block mb-1 mb-sm-0">
														Cliente:
													</span>
													<span>John Inoue</span>
													<hr />
													<span className="mr-2 d-block d-sm-inline-block mb-1 mb-sm-0">
														Tipo de Mascota:
													</span>
													<span> Gato</span>
													<hr />
													<span className="mr-2 d-block d-sm-inline-block mb-1 mb-sm-0">
														Contacto:
													</span>
													<span className="border-right pr-2">9 34212452</span>
													<span> jhoninoue@correo.com</span>
													<hr />
													<botton className="btn btn-success btn-sm">Confirmar</botton>
													<botton
														className="btn btn-outline-danger btn-sm"
														style={{ margin: "10px" }}>
														Cancelar
													</botton>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="bg-white card mb-4 order-list shadow-sm">
									<div className="gold-members p-4">
										<a href="#" />
										<div className="media">
											<a href="#">
												<img
													className="mr-4"
													src="https://bootdey.com/img/Content/avatar/avatar3.png"
													alt="Generic placeholder image"
												/>
											</a>
											<div className="media-body">
												<h5 className="mb-4">
													Peluqueria
													<span className="badge badge-info mx-3">Por Pagar</span>
												</h5>
												<div className="mb-3">
													<span className="mr-2 d-block d-sm-inline-block mb-2 mb-sm-0">
														Hora reservada:
													</span>
													<span className="bg-light-blue">15.04.2021</span>
													<hr />
													<span className="bg-light-blue">Consulta de 10-11 hrs</span>
													<hr />
												</div>
												<div className="mb-5">
													<span className="mr-2 d-block d-sm-inline-block mb-1 mb-sm-0">
														Cliente:
													</span>
													<span>Maria Espinoza</span>
													<hr />
													<span className="mr-2 d-block d-sm-inline-block mb-1 mb-sm-0">
														Tipo de Mascota:
													</span>
													<span> Golden Retriver</span>
													<hr />
													<span className="mr-2 d-block d-sm-inline-block mb-1 mb-sm-0">
														Contacto:
													</span>
													<span className="border-right pr-2 mr-2">9 8765431</span>
													<span> mariaespinoza@correo.com</span>
													<hr />
													<botton className="btn btn-success btn-sm">Confirmar</botton>
													<botton
														className="btn btn-outline-danger btn-sm"
														style={{ margin: "10px" }}>
														Cancelar
													</botton>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
