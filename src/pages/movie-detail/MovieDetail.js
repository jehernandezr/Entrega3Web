import React, { useEffect, useState } from "react";
import { API } from "../../utils/apiURI";
import { useParams } from "react-router";
import useUser from "../../hooks/useUser";
import { CardGroup, Col, Row } from "react-bootstrap";
import "./MovieDetail.scss";
import { FormattedMessage, useIntl } from "react-intl";
import ReactStars from "react-rating-stars-component";
import { notify } from "../../components/notification/Notification";
import {
	FacebookShareButton,
	TwitterShareButton,
	LinkedinShareButton,
	WhatsappShareButton,
	PinterestShareButton,
	FacebookIcon,
	TwitterIcon,
	LinkedinIcon,
	WhatsappIcon,
	PinterestIcon,
} from "react-share";
const countriesList = (countries) => {
	let parsedCountries = countries.array.forEach((country) => {
		//TODO
	});
	return <span></span>;
};

const decode = (html) => {
	var txt = document.createElement("textarea");
	txt.innerHTML = html;
	return txt.value;
};

export const MovieDetail = () => {
	const intl = useIntl();

	const [state, setState] = useState({ movie: [] });
	const [posterState, setPoster] = useState({ hasPoster: [] });
	const { id } = useParams();

	useEffect(() => {
		if (!navigator.onLine) {
			notify("Funcionando offline", "warning");
			if (localStorage.getItem("MovieDetail") === "") {
				notify("No hay peliculas previamente almacenadas", "warning");
			} else {
				setState(JSON.parse(localStorage.getItem("MovieDetail")));
			}
		} else {
			const url = `${API}/movies/${id}`;
			fetch(url)
				.then((res) => {
					return res.json();
				})
				.then((mov) => {
					const movie = mov.data.data;
					setState({ movie });
					localStorage.setItem("MovieDetail", JSON.stringify({ movie }));
				});
		}
	}, [id]);

	useEffect(() => {
		const url = state.movie.poster;
		if (!(url == null) && url !== "N/A") {
			console.log(url);
			fetch(url)
				.then(
					(res) => {
						return res.status;
					},
					() => {
						let hasPoster = false;
						setPoster({ hasPoster });
					}
				)
				.then(
					(status) => {
						let hasPoster = status === 200;
						setPoster({ hasPoster });
					},
					() => {
						let hasPoster = false;
						setPoster({ hasPoster });
					}
				);
		} else {
			let hasPoster = false;
			setPoster({ hasPoster });
		}
	}, [state.movie]);

	const ratingChanged = (newRating) => {
		console.log(newRating);
		const url = `${API}/movies/${id}`;
		var actual = state.movie.rating;
		var number_ratings = state.movie.number_ratings;
		var total = actual * number_ratings;
		total = total + newRating;
		number_ratings = number_ratings + 1;
		total = total / number_ratings;
		fetch(url, {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			method: "PATCH",
			body: JSON.stringify({ rating: total, number_ratings: number_ratings }),
		}).catch((err) => {
			notify("Fallo al conectarse con el servidor", "error", "top-center");
		});
	};

	/* rating synopsis title year countries*/
	return (
		<div className="container-fluid">
			<Row>
				<Col sm={12} lg={4} md={6}>
					{posterState.hasPoster ? (
						<img
							className="card-img "
							src={state.movie.poster}
							alt={`${intl.formatMessage({ id: "posterOf" })} ${
								state.movie.title
							}`}
						></img>
					) : (
						<h2 className="noPoster">
							{intl.formatMessage({ id: "noPoster" })}
						</h2>
					)}
				</Col>
				<Col sm={12} md={6} lg={8}>
					<CardGroup className="card-deck">
						<h1 id="movieTitle">{decode(state.movie.title)}</h1>
						<h2 id="movieYear">{state.movie.year}</h2>
						<h3 id="movieSynopsisSubtitle">
							<FormattedMessage id="synopsis"></FormattedMessage>
						</h3>
						<p id="movieSynopsis"> {decode(state.movie.synopsis)}</p>
						<div id="ratingSeparator">
							<h2 id="movieRating">{`${intl.formatMessage({
								id: "rating",
							})} | ${state.movie.rating}`}</h2>
						</div>
						<FavButton id={id} />
						<br></br>
						<h3>{intl.formatMessage({ id: "rate" })}</h3>
						<ReactStars
							aria-label={intl.formatMessage({ id: "stars" })}
							className="stars"
							count={5}
							onChange={ratingChanged}
							isHalf={true}
							size={30}
							activeColor="#ffd700"
							color="#ffffff"
						/>
					</CardGroup>
				</Col>
			</Row>
			<br></br>
			<Row>
				<Col sm={12} lg={4} md={6}>
					<FacebookShareButton
						quote={state.movie.title}
						url={String(window.location)}
						media={state.movie.poster}
					>
						<FacebookIcon />
					</FacebookShareButton>

					<TwitterShareButton
						title={state.movie.title}
						url={String(window.location)}
						media={state.movie.poster}
					>
						<TwitterIcon />
					</TwitterShareButton>

					<WhatsappShareButton
						title={state.movie.title}
						url={String(window.location)}
						media={state.movie.poster}
						separator=":: "
					>
						<WhatsappIcon />
					</WhatsappShareButton>

					<LinkedinShareButton
						url={String(window.location)}
						media={state.movie.poster}
						title={state.movie.title}
						windowWidth={750}
						windowHeight={600}
					>
						<LinkedinIcon />
					</LinkedinShareButton>

					<PinterestShareButton
						url={String(window.location)}
						media={state.movie.poster}
						title={state.movie.title}
						windowWidth={1000}
						windowHeight={730}
					>
						<PinterestIcon />
					</PinterestShareButton>
				</Col>
			</Row>
		</div>
	);
};

const FavButton = ({ id }) => {
	const [isFaved, setIsFaved] = useState(false);
	const { favs, isLogged, addFav, delFav } = useUser();

	useEffect(() => {
		console.log("imprimiendo favs antes de save", favs);
		setIsFaved(Boolean(favs.find((e) => e._id === id)));
		console.log("imprimiendo favss", favs);
	}, [favs, id]);

	if (isLogged) {
		return isFaved ? (
			<button
				className="isFavorite"
				type="button"
				onClick={(e) => delFav({ id })}
			>
				<span class="material-icons-round">&#xe888;</span>
			</button>
		) : (
			<button
				className="notFavorite"
				type="button"
				onClick={(e) => addFav({ id })}
			>
				<span class="material-icons-round">&#xe885;</span>
			</button>
		);
	} else {
		return <></>;
	}
};
