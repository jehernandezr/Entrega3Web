import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../pages/Style.scss";
import PrivateRoute from "./PrivateRoute";
import { Login } from "../pages/login/Login";
import { SignUp } from "../pages/signup/Signup";
import { NavbarMovie } from "../components/nav/Navbar";
import { MovieDetail } from "../pages/movie-detail/MovieDetail";
import { MovieList } from "../pages/movie-list/MovieList";
import { NotFound } from "../pages/not-found/NotFound";
import { LandingPage } from "../pages/landing-page/LandingPage";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { ConnectParty } from "../pages/connect-party/ConnectParty";
import { Profile } from "../pages/profile/Profile";
import { Stats } from "../pages/stats/Stats";
import { IntlProvider } from "react-intl";
import { LOCALES } from "../i18n/locales";
import messages from "../i18n/messages";

export const AppRouter = () => {
  const [language, setLanguage] = useState(LOCALES.ENGLISH);
  const [search, setSearch] = useState({ searchResult: null });
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Router>
        <NavbarMovie
          setSearch={setSearch}
          setLanguage={setLanguage}
        ></NavbarMovie>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
          <Route exact path="/movies">
            <MovieList searchResult={search} />
          </Route>
          <Route exact path="/movies/:id">
            <MovieDetail />
          </Route>
          <Route exact path="/stats">
            <Stats />
          </Route>
          <PrivateRoute exact path="/ConnectParty">
            <ConnectParty />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </IntlProvider>
  );
};
