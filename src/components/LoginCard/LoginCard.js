import React from "react";
import { useEffect } from "react";
import { useLoginForm } from "../../hooks/customHooks";
import "./LogiCard.scss";
import { Link, useHistory } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { FormattedMessage, useIntl } from "react-intl";

export const LoginCard = ({ onLogin }) => {
	const intl = useIntl();
	const history = useHistory();

	const { isLoginLoading, hasLoginError, isLogged } = useUser();

	useEffect(() => {
		if (isLogged) {
			history.push("/dashboard");
			onLogin && onLogin();
		}
	}, [isLogged, history, onLogin]);

	const { handleSubmit, handleInputChange, errors } = useLoginForm();
	return (
		<div className="login-container text-c animated flipInX">
			<div className="logo-badge text-whitesmoke">
				<span className="fa fa-user-circle"></span>
			</div>
			<h1 className="text-whitesmoke">
				<FormattedMessage id="signIn"></FormattedMessage>
			</h1>
			<div className="container-content">
				{isLoginLoading && (
					<strong>
						<FormattedMessage id="checkingCredentials"></FormattedMessage>
					</strong>
				)}
				{!isLoginLoading && (
					<form className="margin-t" onSubmit={handleSubmit}>
						<div className="form-group text-l">
							<label
								className="text-whitesmoke  margin-r-xxlg "
								htmlFor="emailField"
							>
								{intl.formatMessage({ id: "email" })}:
							</label>
							<input
								className="form-control"
								type="email"
								id="emailField"
								name="email"
								required={true}
								autoComplete="email"
								onChange={handleInputChange}
							/>
							{errors!== undefined && errors['email'] && <p style={{ color: "red" }}>{errors['email']}</p>}
						</div>

						<div className="form-group text-l">
							<label
								className="text-whitesmoke  margin-r-xlg"
								htmlFor="passwordField"
							>
								{intl.formatMessage({ id: "password" })}:
							</label>
							<input
								required={true}
								className="form-control"
								type="password"
								id="passwordField"
								name="password"
								onChange={handleInputChange}
							/>
							{errors!== undefined && errors['password'] && <p style={{ color: "red" }}>{errors['password']}</p>}
						</div>
						<br></br>
						<button type="submit" 
						className="form-button button-l margin-b"
						disabled={errors['email'] ||errors['password']||isLoginLoading}
						>
							<FormattedMessage id="signIn"></FormattedMessage>
						</button>
						<p className="text-whitesmoke text-center">
							<small>
								<FormattedMessage id="noAccount"></FormattedMessage>
							</small>
						</p>
						<Link className="text-darkyellow" to="signup">
							<small>
								<FormattedMessage id="signUp"></FormattedMessage>
							</small>
						</Link>
					</form>
				)}
				{hasLoginError && (
					<strong>
						<FormattedMessage id="invalidCredentials"></FormattedMessage>
					</strong>
				)}
				<p className="margin-t text-whitesmoke">
					<small> BestMovies &copy; 2021</small>{" "}
				</p>
			</div>
		</div>
	);
};
