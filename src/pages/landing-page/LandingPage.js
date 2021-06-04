import React from "react";
import "./assets/web/assets/mobirise-icons2/mobirise2.css";
import "./assets/tether/tether.min.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/bootstrap/css/bootstrap-grid.min.css";
import "./assets/bootstrap/css/bootstrap-reboot.min.css";
import "./assets/dropdown/css/style.css";
import "./assets/socicon/css/styles.css";
import "./assets/theme/css/style.css";
import "./assets/mobirise/css/mbr-additional.css";
import "./assets/mobirise/css/mbr-additional.css";
import { FormattedMessage, useIntl } from "react-intl";

var image = require("./assets/images/mbr-1076x717.jpg");

export const LandingPage = () => {
	const intl = useIntl();

	return (
		<div>
			<div
				className="header6 cid-sqCmfhfAvy mbr-fullscreen"
				data-bg-video="https://vimeo.com/428046504"
				id="header6-y"
			>
				<div className="align-center container">
					<div className="row justify-content-center">
						<div className="col-12 col-lg-10">
							<h1 className="mbr-section-title mbr-fonts-style mbr-white mb-3 display-1">
								<strong>Best Movie</strong>
							</h1>

							<p className="mbr-text mbr-white mbr-fonts-style display-7">
								<FormattedMessage id="landingDescription1"></FormattedMessage>
								<br />
								<FormattedMessage id="joinNow"></FormattedMessage>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="features1 cid-sqCmfNI0pm" id="features1-z">
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-9">
							<h2 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
								<strong>
									<FormattedMessage id="features"></FormattedMessage>
								</strong>
							</h2>
						</div>
					</div>
					<div className="row">
						<div className="card bg-light col-12 col-md-6 col-lg-3">
							<div className="card-wrapper">
								<div className="card-box align-center">
									<div className="iconfont-wrapper">
										<span
											className="mbr-iconfont mobi-mbri-features mobi-mbri"
											style={{
												color: "rgb(8, 13, 23)",
												fill: "rgb(8, 13, 23)",
											}}
										></span>
									</div>
									<h3 className="card-title mbr-fonts-style display-7">
										<strong>
											<FormattedMessage id="customRecommendations"></FormattedMessage>
										</strong>
									</h3>
									<h4 className="card-text mbr-fonts-style display-7 ">
										<FormattedMessage id="discoverDescription"></FormattedMessage>
									</h4>
								</div>
							</div>
						</div>
						<div className="card bg-light col-12 col-md-6 col-lg-3">
							<div className="card-wrapper">
								<div className="card-box align-center">
									<div className="iconfont-wrapper">
										<span
											className="mbr-iconfont mobi-mbri-responsive-2 mobi-mbri"
											style={{
												color: "rgb(8, 13, 23)",
												fill: "rgb(8, 13, 23)",
											}}
										></span>
									</div>
									<h3 className="card-title mbr-fonts-style display-7">
										<strong>
											<FormattedMessage id="watchAnywhere"></FormattedMessage>
										</strong>
									</h3>
									<h4 className="card-text mbr-fonts-style display-7">
										<FormattedMessage id="available"></FormattedMessage>
									</h4>
								</div>
							</div>
						</div>
						<div className="card bg-light col-12 col-md-6 col-lg-3">
							<div className="card-wrapper">
								<div className="card-box align-center">
									<div className="iconfont-wrapper">
										<span
											className="mbr-iconfont mobi-mbri-cash mobi-mbri"
											style={{
												color: "rgb(8, 13, 23)",
												fill: "rgb(8, 13, 23)",
											}}
										></span>
									</div>
									<h3 className="card-title mbr-fonts-style display-7">
										<strong>
											<FormattedMessage id="noExtraPayments"></FormattedMessage>
										</strong>
									</h3>
									<h4 className="card-text mbr-fonts-style display-7">
										<FormattedMessage id="noAdditionalSubscriptions"></FormattedMessage>
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="image2 cid-sqCmgsmhlp" id="image2-10">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-12 col-lg-6">
							<div className="image-wrapper">
								<img
									src={image.default}
									alt={intl.formatMessage({ id: "imgNotFound" })}
								/>
								<p className="mbr-description mbr-fonts-style mt-2 align-center display-4"></p>
							</div>
						</div>
						<div className="col-12 col-lg">
							<div className="text-wrapper">
								<h3 className="mbr-section-title mbr-fonts-style mb-3 display-5">
									<strong>
										<FormattedMessage id="entrepreneurs"></FormattedMessage>
									</strong>
								</h3>
								<p className="mbr-text mbr-fonts-style display-7">
									<FormattedMessage id="entrepreneurDescription"></FormattedMessage>
									<br />
									<FormattedMessage id="usingWebTools"></FormattedMessage>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="contacts1 cid-sqCmgHLwxk" id="contacts1-11">
				<div className="container">
					<div className="mbr-section-head">
						<h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
							<strong>
								<FormattedMessage id="getInTouch"></FormattedMessage>
							</strong>
						</h3>
					</div>
					<div className="row justify-content-center mt-4">
						<div className="card col-12 col-lg-6">
							<div className="card-wrapper">
								<div className="card-box align-center">
									<div className="image-wrapper">
										<span className="mbr-iconfont mobi-mbri-letter mobi-mbri"></span>
									</div>
									<h4 className="card-title mbr-fonts-style mb-2 display-2">
										<strong>
											<FormattedMessage id="email"></FormattedMessage>
										</strong>
									</h4>
									<p className="mbr-text mbr-fonts-style mb-2 display-4">
										<FormattedMessage id="answerQuickly"></FormattedMessage>
									</p>
									<h5 className="link mbr-fonts-style display-7">
										<a href="mailto:a.rubio@uniandes.edu.co" id="sendusanemail">
											<FormattedMessage id="sendEmail"></FormattedMessage>
										</a>
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer3 cid-sqCmh6pWRz" id="footer3-12">
				<div className="container">
					<div className="media-container-row align-center mbr-white">
						<div className="row row-links">
							<ul className="foot-menu">
								<li className="foot-menu-item mbr-fonts-style display-7">
									<a href="/" className="text-success text-primary">
										<FormattedMessage id="helpCenter"></FormattedMessage>
									</a>
								</li>
								<li className="foot-menu-item mbr-fonts-style display-7">
									<a href="/" className="text-success text-primary">
										Foros
									</a>
								</li>
								<li className="foot-menu-item mbr-fonts-style display-7">
									<a
										href="mailto:a.rubio@uniandes.edu.co"
										className="text-success text-primary"
									>
										<FormattedMessage id="getInTouch"></FormattedMessage>
									</a>
								</li>
							</ul>
						</div>
						<div className="row social-row">
							<div className="social-list align-right pb-2">
								<div className="soc-item">
									<a
										href="https://twitter.com"
										rel="noreferrer"
										target="_blank"
										aria-label={`${intl.formatMessage({ id: "twitterlink" })}`}
									>
										<span className="socicon-twitter socicon mbr-iconfont mbr-iconfont-social"></span>
									</a>
								</div>
								<div className="soc-item">
									<a
										href="https://facebook.com"
										rel="noreferrer"
										target="_blank"
										aria-label={`${intl.formatMessage({ id: "facebooklink" })}`}
									>
										<span className="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
									</a>
								</div>
								<div className="soc-item">
									<a
										href="https://youtube.com"
										rel="noreferrer"
										target="_blank"
										aria-label={`${intl.formatMessage({ id: "youtubelink" })}`}
									>
										<span className="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span>
									</a>
								</div>
								<div className="soc-item">
									<a
										href="https://instagram.com"
										rel="noreferrer"
										target="_blank"
										aria-label={`${intl.formatMessage({
											id: "instagramlink",
										})}`}
									>
										<span className="mbr-iconfont mbr-iconfont-social socicon-instagram socicon"></span>
									</a>
								</div>
							</div>
						</div>
						<div className="row row-copyright">
							<p className="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">
								<FormattedMessage id="copyright"></FormattedMessage>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{
					backgroundColor: "#fff",
					fontFamily:
						"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
					color: "#aaa",
					fontSize: "12px",
					padding: "0",
					alignItems: "center",
					display: "flex",
				}}
			></div>
			<script src="./assets/web/assets/jquery/jquery.min.js"></script>
			<script src="./assets/popper/popper.min.js"></script>
			<script src="./assets/tether/tether.min.js"></script>
			<script src="./assets/bootstrap/js/bootstrap.min.js"></script>
			<script src="./assets/smoothscroll/smooth-scroll.js"></script>
			<script src="./assets/dropdown/js/nav-dropdown.js"></script>
			<script src="./assets/dropdown/js/navbar-dropdown.js"></script>
			<script src="./assets/touchswipe/jquery.touch-swipe.min.js"></script>
			<script src="./assets/ytplayer/jquery.mb.ytplayer.min.js"></script>
			<script src="./assets/vimeoplayer/jquery.mb.vimeo_player.js"></script>
			<script src="./assets/theme/js/script.js"></script>
		</div>
	);
};
