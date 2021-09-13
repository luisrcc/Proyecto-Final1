import React, { useState, useContext } from "react";
import UserProfile from "../component/UserProfile";

const PersonalProfile = () => {
    
    const showSuccessfulLogin =  () => {
        
    }

	return (
		<div className="">
			<div className="container">
				<form method="post">
					<div className="row">
						<div className="col-md-5">
							<div className="profile-img">
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
									alt=""
								/>
								<div className="file">
									<button className="btn btn-md btn-info m-2 reponsive-button">Cambiar foto</button>
									<input className="mb-2" type="file" name="file" />
								</div>
							</div>

							<div className="mb-2">
								<input
									type="submit"
									className="profile-edit-btn"
									name="btnAddMore"
									value="Edit Profile"
								/>
							</div>
						</div>

						<div className="col-md-6">
							<div className="row">
								<div className="profile-head my-4">
									<h5 className="mb-4">Kshiti Ghelani</h5>

									<ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
										<li className="nav-item">
											<a
												className="nav-link active"
												id="home-tab"
												data-toggle="tab"
												href="#home"
												role="tab"
												aria-controls="home"
												aria-selected="true">
												Información
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												id="profile-tab"
												data-toggle="tab"
												href="#profile"
												role="tab"
												aria-controls="profile"
												aria-selected="false">
												Reservas
											</a>
										</li>
									</ul>
								</div>
							</div>

							<div className="row mb-4">
								<div className="tab-content profile-tab" id="myTabContent">
									<div
										className="tab-pane fade show active"
										id="home"
										role="tabpanel"
										aria-labelledby="home-tab">
										<div className="row">
											<div className="col-md-6">
												<label>Nombre</label>
											</div>
											<div className="col-md-6">
												<p>Kshiti Ghelani</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label>Email</label>
											</div>
											<div className="col-md-6">
												<p>kshitighelani@gmail.com</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label>Telefono</label>
											</div>
											<div className="col-md-6">
												<p>123 456 7890</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label>Contraseña</label>
											</div>
											<div className="col-md-6">
												<p>*******</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default PersonalProfile;
