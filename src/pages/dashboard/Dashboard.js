import React from "react";
import useUser from "../../hooks/useUser";
import "../Palette.scss";
import { MovieCard } from "../../components/Movies/MovieCardComponent";
import { Link } from "react-router-dom";
import "../movie-list/MovieList.scss";
import { FormattedMessage } from "react-intl";

export const Dashboard = (props) => {
	const { favs } = useUser();

	return (
		<div className="container-fluid">
			<h1>
				<FormattedMessage id="dashboard"></FormattedMessage>
			</h1>
			<h2>
				<FormattedMessage id="favoriteMovies"></FormattedMessage>
			</h2>
			<div className="row justify-content-center">
				{favs.map((movie) => (
					<Link to={`/movies/${movie._id}`}>
						<MovieCard key={movie._id} movie={movie}></MovieCard>
					</Link>
				))}
			</div>
		</div>
	);
};
