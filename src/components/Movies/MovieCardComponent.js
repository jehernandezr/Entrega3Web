import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./MovieCard.scss";
import "../../pages/Style.scss";
import { FormattedMessage, useIntl } from "react-intl";

const decode = (html) => {
	var txt = document.createElement("textarea");
	txt.innerHTML = html;
	return txt.value;
};

export const MovieCard = (movie) => {
	const intl = useIntl();
	const [state, setState] = useState({ hasPoster: false });

	useEffect(() => {
		const url = movie.movie.poster;
		if (!(url == null) && url.startsWith("h")) {
			fetch(url)
				.then(
					(res) => {
						return res.status;
					},
					() => {
						setState({ hasPoster: false });
					}
				)
				.then(
					(status) => {
						if (status === 200) {
							setState({ hasPoster: true });
						}
					},
					() => {
						setState({ hasPoster: false });
					}
				);
		} else {
			setState({ hasPoster: false });
		}
	}, [movie, movie.movie.poster]);

	return (
		<div className="card-movie">
			<div className="image-wrapper">
				{state.hasPoster ? (
					<img
						className="card-img-top"
						alt={`${intl.formatMessage({ id: "posterOf" })} ${
							movie.movie.title
						}`}
						src={movie.movie.poster}
					></img>
				) : (
					<h3 className="noPoster">{intl.formatMessage({ id: "noPoster" })}</h3>
				)}
			</div>
			<div className="card-body">
				<div className="row justify-content-center">
					<h3 className="card-title">{decode(movie.movie.title)}</h3>
				</div>
				<div className="row justify-content-center">
					<h4 className="card-year">{movie.movie.year}</h4>
				</div>
			</div>
		</div>
	);
};
