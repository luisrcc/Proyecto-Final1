import React, { useState, useContext } from "react";

export const DashboardSidebar = () => {
	return (
		<div className="sidebar-background">
			{/* col-md-3 d-none d-md-block  */}
			<nav id="sidebar" className="bg-light sidebar sidebar-wrapper">
				<div className="sidebar-sticky sidebar-content">
					<ul className="nav flex-column">
						<li className="nav-item">
							<a className="nav-link active nav-active-color" href="#">
								Dashboard <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link nav-link-color" href="#">
								Citas
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link nav-link-color" href="#">
								Productos
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link nav-link-color" href="#">
								Clientes
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link nav-link-color" href="#">
								Mensajes
							</a>
						</li>
						{/* <li className="nav-item">
							<a className="nav-link nav-link-color" href="#">
								Integrations
							</a>
						</li> */}
					</ul>
				</div>
			</nav>
		</div>
	);
};
