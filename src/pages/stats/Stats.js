import React, { useEffect, useState } from "react";
import { API } from "../../utils/apiURI";
import { FormattedMessage, useIntl } from "react-intl";
import { Pie } from "../../components/pie/pie";
import "./Stats.scss";

export const Stats = () => {
	const intl = useIntl();
	const [state, setState] = useState({ ratings: [] });

	useEffect(() => {
		const url = API + "/movies";
		if (state.ratings.length === 0) {
			fetch(url)
				.then((res) => {
					return res.json();
				})
				.then((movs) => {
					const movies = movs.data.data;
					var ratings = [
						{ name: "0-1", value: 0 },
						{ name: "1-2", value: 0 },
						{ name: "2-3", value: 0 },
						{ name: "3-4", value: 0 },
						{ name: "4-5", value: 0 },
					];
					movies.forEach((element) => {
						if (element.rating < 1) {
							ratings[0].value += 1;
						} else if (element.rating < 2) {
							ratings[1].value += 1;
						} else if (element.rating < 3) {
							ratings[2].value += 1;
						} else if (element.rating < 4) {
							ratings[3].value += 1;
						} else if (element.rating >= 4) {
							ratings[4].value += 1;
						}
					});
					setState({ ratings });
				});
		} else {
		}
	});

	return (
		<div>
			<h1 id="statsHeader" className="text-light">
				<FormattedMessage id="stats"></FormattedMessage>
			</h1>
			<Pie data={state.ratings}></Pie>
		</div>
	);
};
