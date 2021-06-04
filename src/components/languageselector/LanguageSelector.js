import React from "react";
import { LOCALES } from "../../i18n/locales";
import { useIntl } from "react-intl";
import "./LanguageSelector.scss";

export const LanguageSelector = ({ setLanguage }) => {
	const intl = useIntl();
	return (
		<select
			className="languageSelector btn btn-light form-select"
			onChange={(event) => {
				setLanguage(event.target.value);
			}}
			data-bs-toggle="dropdown"
			aria-label={intl.formatMessage({ id: "langSelect" })}
		>
			<option className="dropdown-item" value={LOCALES.SPANISH}>
				{intl.formatMessage({ id: "spanish" })}
			</option>
			<option
				className="dropdown-item-text"
				value={LOCALES.ENGLISH}
			>
				{intl.formatMessage({ id: "english" })}
			</option>
		</select>
	);
};
