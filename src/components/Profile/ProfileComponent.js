import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import "./ProfileComponent.scss";

export const ProfileComponent = (user) => {
	const intl = useIntl();
	return (
		<div className="container">
			<div className="logo-badge text-whitesmoke text-c">
				<span className="fa fa-user-circle"></span>
			</div>
			<h1 className="text-light text-c">
				<FormattedMessage id="myProfile"></FormattedMessage>
			</h1>
			<br></br>
			<h2 className="text-light text-c">
				<FormattedMessage id="name"></FormattedMessage>: {user.user.name}
			</h2>
			<h2 className="text-light text-c">
				<FormattedMessage id="email"></FormattedMessage>: {user.user.email}
			</h2>
			<h2 className="text-light text-c">
				<FormattedMessage id="role"></FormattedMessage>: {user.user.role}
			</h2>
		</div>
	);
};
