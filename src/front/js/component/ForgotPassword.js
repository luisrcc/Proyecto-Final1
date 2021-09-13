import React from "react";

export const ForgotPassword = () => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-4 col-md-offset-4">
					<div className="panel panel-default">
						<div className="panel-body">
							<div className="text-center">
								<h3>
									<i className="fa fa-lock fa-4x" />
								</h3>
								<h2 className="text-center">¿Olvidó su contraseña?</h2>
								<p>Recuperar contraseña</p>
								<div className="panel-body">
									<form
										id="register-form"
										role="form"
										autoComplete="off"
										className="form"
										method="post">
										<div className="form-group">
											<div className="input-group">
												<div className="input-group-prepend">
													<span className="input-group-text bg-white px-4 border-md border-right-0">
														<i className="fa fa-envelope text-muted" />
													</span>
												</div>
												<input
													id="email"
													name="email"
													placeholder="Ingrese su email"
													className="form-control border-left-0"
													type="email"
												/>
											</div>
										</div>
										<div className="form-group">
											<input
												name="recover-submit"
												className="btn btn-lg btn-info btn-block reponsive-button"
												value="Reestablecer Contraseña"
												type="submit"
											/>
										</div>

										<input type="hidden" className="hide" name="token" id="token" value="" />
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
