import React, { useState, useEffect } from "react";
import { useSignUpForm } from "../../hooks/customHooks";
import { Link, useHistory } from "react-router-dom";
import useUser from "../../hooks/useUser";
import PasswordStrengthBar from "react-password-strength-bar";
import "./signupCard.scss";
import { FormattedMessage, useIntl } from "react-intl";
import { notify } from "../notification/Notification";

export const SignUpCard = ({ onRegister }) => {
	const intl = useIntl();
	const [registered, setRegistered] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { handleSubmit, handleInputChange, errors } = useSignUpForm();
	const history = useHistory();
	const { isLoginLoading, hasLoginError, isLogged } = useUser();
	const [password, setPassword] = useState();
	const [passwordConfirm, setPasswordConfirm] = useState();

	useEffect(() => {
		if (isLogged) {
			notify(intl.formatMessage({ id: "registeredSuccesfully" }), "success");
			history.push("/dashboard");
			onRegister && onRegister();
		}
	}, [isLogged, history, onRegister, intl]);

	if (registered) {
		return (
			<h4 className="congratulations-message">
				<FormattedMessage id="registeredGreeting"></FormattedMessage>
			</h4>
		);
	}
	return (
		<div className="signup-container text-c animated flipInX">
			<div className="logo-badge text-whitesmoke">
				<span className="fa fa-user-circle"></span>
			</div>
			<h1 className="text-whitesmoke">
				<FormattedMessage id="signUp"></FormattedMessage>
			</h1>
			<div className="container-content">
				<form
					className="margin-t"
					onSubmit={(ev) => {
						handleSubmit(ev, setRegistered, setIsSubmitting);
					}}
				>
					<div className="form-group text-l">
						<label
							className="text-whitesmoke margin-r-lllg"
							htmlFor="nameField"
						>
							{intl.formatMessage({ id: "name" })}:{" "}
						</label>

						<input
							className="form-control form-in-signup"
							type="text"
							id="nameField"
							name="name"
							required={true}
							autoComplete="name"
							onChange={handleInputChange}
						/>
						{errors !== undefined && errors["name"] && (
							<p style={{ color: "red" }}>{errors["name"]}</p>
						)}
					</div>

					<div className="form-group text-l">
						<label
							className="text-whitesmoke margin-r-xxxlg"
							htmlFor="emailField"
						>
							{intl.formatMessage({ id: "email" })}:{" "}
						</label>
						<input
							className="form-control form-in-signup"
							type="text"
							id="emailField"
							name="email"
							required={true}
							autoComplete="email"
							onChange={handleInputChange}
						/>
						{errors !== undefined && errors["email"] && (
							<p style={{ color: "red" }}>{errors["email"]}</p>
						)}
					</div>
					<div className="form-group text-l">
						<label
							className="text-whitesmoke margin-r-llg"
							htmlFor="passwordField"
						>
							{intl.formatMessage({ id: "password" })}:{" "}
						</label>

						<input
							className="form-control form-in-signup"
							type="password"
							id="passwordField"
							required={true}
							name="password"
							onChange={(e) => {
								setPassword(e.target.value);
								return handleInputChange(e);
							}}
						/>
						{errors !== undefined && errors["password"] && (
							<p style={{ color: "red" }}>{errors["password"]}</p>
						)}
						<PasswordStrengthBar
							minLength={3}
							barColors={["#ff0000", "#ffa500", "ffff00", "00ff00"]}
							scoreWords={[
								intl.formatMessage({ id: "scorew1" }),
								intl.formatMessage({ id: "scorew2" }),
								intl.formatMessage({ id: "scorew3" }),
								intl.formatMessage({ id: "scorew4" }),
							]}
							scoreWordStyle={{ color: "#ffd369ff" }}
							password={password}
						/>
					</div>

					<div className="form-group text-l">
						<label
							className="text-whitesmoke margin-r "
							htmlFor="passwordConfirmField"
						>
							{intl.formatMessage({ id: "passwordConfirm" })}:{" "}
						</label>
						<input
							className="form-control form-in-signup"
							type="password"
							required={true}
							id="passwordConfirmField"
							name="passwordConfirm"
							onChange={(e) => {
								setPasswordConfirm(e.target.value);
								return handleInputChange(e);
							}}
						/>
						{errors !== undefined && errors["passwordConfirm"] && (
							<p style={{ color: "red" }}>{errors["passwordConfirm"]}</p>
						)}
						<PasswordStrengthBar
							scoreWords={[
								intl.formatMessage({ id: "scorew1" }),
								intl.formatMessage({ id: "scorew2" }),
								intl.formatMessage({ id: "scorew3" }),
								intl.formatMessage({ id: "scorew4" }),
							]}
							scoreWordStyle={{ color: "#ffd369ff" }}
							minLength={2}
							password={passwordConfirm}
						/>
					</div>

					<button
						type="submit"
						className="form-button button-l margin-b"
						disabled={
							errors["email"] ||
							errors["name"] ||
							errors["password"] ||
							errors["passwordConfirm"] ||
							isSubmitting ||
							isLoginLoading ||
							hasLoginError
						}
					>
						<FormattedMessage id="signUp"></FormattedMessage>
					</button>
					<p className="text-whitesmoke text-center">
						<small>
							<FormattedMessage id="alreadyHaveAccount"></FormattedMessage>
						</small>
					</p>
					<Link className="text-darkyellow" to="login">
						<small>
							<FormattedMessage id="signIn"></FormattedMessage>
						</small>
					</Link>
				</form>
			</div>
		</div>
	);
};
