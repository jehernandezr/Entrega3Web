import { MovieCard } from "../../components/Movies/MovieCardComponent";
import React, { useEffect, useState } from "react";
import { API } from "../../utils/apiURI";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MovieList.scss";
import "../Palette.scss";
import { FormattedMessage, useIntl } from "react-intl";

import { notify } from "../../components/notification/Notification";

const elementsPerPage = 20;

/* la idea es la siguiente: 
	recibir el array de movies en una variable que se llame "searchResult" 
	si no se buscó nada entonces enviar un null y ya,
	si se buscó algo y no hay resultados mandar el array vacío, cosa que salga algo como 
	"no hay resultados losiento".
	*/
export const MovieList = (props) => {
	const intl = useIntl();
	const [state, setState] = useState({ movies: [] });
	const [pagesState, setPages] = useState({ pageNumber: 0 });
	const [currentPageStatus, setCurrentPageNum] = useState({
		current: 1,
	});
	const [currentPageElements, setCurrentPageElements] = useState({
		movies: [],
	});

	const goToPage = (number) => {
		setCurrentPageNum({ current: number });
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const renderPageButtons = () => {
		let components = [];
		for (let i = 0; i < pagesState.pageNumber; i++) {
			components.push(
				<Button
					variant="outline-success"
					className="page-item btn"
					onClick={() => goToPage(i + 1)}
				>
					{i + 1}
				</Button>
			);
		}
		return components;
	};

	useEffect(() => {

		if(!navigator.onLine){
			notify("Funcionando offline","warning");
			if(localStorage.getItem("movies") === "") {
				notify("No hay peliculas previamente almacenadas","warning");
			} else {
				setState(JSON.parse(localStorage.getItem("movies")));
				setPages(JSON.parse(localStorage.getItem("pageNumbers")));
			}
		} else {
			if (props.searchResult.searchResult == null) {
				const url = API + "/movies";
				fetch(url)
					.then((res) => {
						return res.json();
					})
					.then((movs) => {
						const movies = movs.data.data;
						let stmovies={ movies }
						setState(stmovies);
						localStorage.setItem("movies", JSON.stringify(stmovies));
						let pageNumbers = Math.ceil(movies.length / elementsPerPage);
						let pagenums={ pageNumber: pageNumbers }
						setPages(pagenums);
						localStorage.setItem("pageNumbers", JSON.stringify(pagenums));
					});
			} else {
				let seacrhed={ movies: props.searchResult.searchResult }
				setState(seacrhed);
				localStorage.setItem("movies", JSON.stringify(seacrhed));
				let pageNumbers = Math.ceil(
					props.searchResult.searchResult.length / elementsPerPage
				);

				let pagenums={ pageNumber: pageNumbers }
				setPages(pagenums);
				localStorage.setItem("pageNumbers", JSON.stringify(pagenums));
			}
		}  


	}, [props.searchResult]);

	useEffect(() => {
		if(!navigator.onLine){
			notify("Funcionando offline","warning");
			if(localStorage.getItem("currentPageStatus") === "") {
				notify("No hay peliculas previamente almacenadas","warning");
			} else {
				setCurrentPageElements(JSON.parse(localStorage.getItem("currentPageStatus")));
			}
		}
		else{
			let moviesSliced = state.movies.slice(
				currentPageStatus.current * elementsPerPage - elementsPerPage,
				currentPageStatus.current * elementsPerPage
			);
			let curpagel={ movies: moviesSliced }
			setCurrentPageElements(curpagel);
			localStorage.setItem("currentPageStatus", JSON.stringify(curpagel));
		}

		
	}, [currentPageStatus, state.movies]);

	/* display flex row wrap en scss*/
	return (
		<div className="container-fluid">
			<h1 className="row justify-content-center">
				<FormattedMessage id="movies"></FormattedMessage>
			</h1>
			<h2 className="row justify-content-center">
				{props.searchResult.searchResult == null ? (
					<FormattedMessage id="catalog"></FormattedMessage>
				) : props.searchResult.searchResult.length === 0 ? (
					<FormattedMessage id="notFound"></FormattedMessage>
				) : (
					<FormattedMessage id="searchResult"></FormattedMessage>
				)}
			</h2>
			<div className="row justify-content-center">
				{currentPageElements.movies.map((movie) => (
					<Link to={`/movies/${movie._id}`}>
						<MovieCard key={movie._id} movie={movie}></MovieCard>
					</Link>
				))}
			</div>
			<nav
				className="paginationNavbar"
				aria-label={intl.formatMessage({ id: "pagesNavbar" })}
			>
				{currentPageStatus.current === 1 ? null : (
					<Button
						variant="outline-success"
						className="page-item btn"
						onClick={() => {
							goToPage(currentPageStatus.current - 1);
						}}
					>
						<FormattedMessage id="previous"></FormattedMessage>
					</Button>
				)}
				{renderPageButtons().map((jsxitem) => {
					return jsxitem;
				})}
				{currentPageStatus.current === pagesState.pageNumber ? null : (
					<Button
						variant="outline-success"
						className="page-item btn"
						onClick={() => {
							goToPage(currentPageStatus.current + 1);
						}}
					>
						<FormattedMessage id="next"></FormattedMessage>
					</Button>
				)}
			</nav>
		</div>
	);
};
