import { useState } from "react";
import { API } from "../utils/apiURI";
import { useHistory } from "react-router-dom";

export default function useSearchForm({ setSearch }) {
	const history = useHistory();

	const [inputs, setInputs] = useState({});

	const prepareString = (searchTerm) => {
		if (!(searchTerm == null) && searchTerm.trim().length !== 0) {
			return searchTerm.replace(" ", "&");
		} else {
			return "";
		}
	};

	const handleSubmit = (event) => {
		/* TODO falta poder filtrar porque sólo busca por título */
		event.preventDefault();
		let searchTitle = inputs.searchTitle;
		let searchYear = inputs.searchYear;
		let searchSynopsis = inputs.searchSynopsis;

		let appendTitle = prepareString(searchTitle);
		let appendYear = prepareString(searchYear);
		let appendSynopsis = prepareString(searchSynopsis);
		if (
			appendTitle.length === 0 &&
			appendYear.length === 0 &&
			appendSynopsis.length === 0
		) {
			setSearch({ searchResult: null });
		} else {
			let url = `${API}/movies?${
				appendTitle.length !== 0 ? `title=${appendTitle}` : ""
			}&${appendYear.length !== 0 ? `year=${appendYear}` : ""}&${
				appendSynopsis.length !== 0 ? `synopsis=${appendSynopsis}&` : ""
			}`;
			console.log(url);
			fetch(url, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((res) => {
					return res.json();
				})
				.then((json) => {
					const movies = json.data.data;
					setSearch({ searchResult: movies });
				});
		}
		history.push("/movies");
	};
	const handleInputChange = (event) => {
		setInputs({ ...inputs, [event.target.name]: event.target.value });
	};

	return { handleSubmit, handleInputChange };
}
