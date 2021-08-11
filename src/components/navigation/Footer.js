import {Link} from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

const Footer = () => {
	return (
	<footer className="custom__footer">
		<div className="container-fluid pt-5 pb-3">
			<div className="row">
				<div className={`col-lg-5 col-md-12 mb-4 mb-md-0 order-3 
					order-md-0 footer__first__col`}>
					<p className="mynametitle">What Are We?</p>
					<span>
						Amukpe Community is established to create 
						awareness and job opportunities to indigenes 
						and non-indigenes in the community and beyond.
					</span>
					<p id="social_icons">
						<a href="https://whatsapp.com">
							<AiIcons.AiOutlineWhatsApp
								style={{
									color: "lime"
								}}
							/>
						</a>
						<a href="https://facebook.com">
							<FaIcons.FaFacebook
								style={{
									color: "#4267B2"
								}}
							/>
						</a>
						<a href="https://instagram.com">
							<FaIcons.FaInstagram
								style={{
									color: "#833AB4"
								}}
							/>
						</a>
					</p>
					<p id="madeby">
						© 2021 Developed by Giffy Insight Technologies.
						<br />
						Tel: 09013970506
					</p>
				</div>
				<div className={`col-lg-3 col-md-6 col-sm-6 col-6 mb-4 
					mb-md-0 splitted__footer__row`}>
					<h5 className="mb-3">Quick Links</h5>

					<ul className="list-unstyled mb-0">
						<li>
							<Link to="/" className="text-dark">
								Home
							</Link>
						</li>
						<li>
							<Link to="/about" className="text-dark">
								About
							</Link>
						</li>
						<li>
							<Link to="/login" className="text-dark">
								Sign In
							</Link>
						</li>
						<li>
							<a href="/jobopenings"
								className="text-dark">
								Jobs
							</a>
						</li>
						<li>
							<a href="/contact"
								className="text-dark">
								Contact
							</a>
						</li>
						<li>
							<a href="/register"
								className="text-dark">
								Sign Up
							</a>
						</li>
					</ul>
				</div>
				<div
					className={`col-lg-3 col-md-6 col-sm-6 col-6 mb-4 
						mb-md-0 splitted__footer__row`}
				>
					<h5 className="mb-3">Contact</h5>

					<ul className="list-unstyled">
						<li>
							<a
								href="/location"
								onClick={(e) => e.preventDefault()}
								className="text-dark">Location: Amukpe, Sapele Delta State</a>
						</li>
						<li>
							<a
								href="mailto:amukpedistrict@gmail.com"
								className="text-dark">Email Address: amukpedistrict@gmail.com</a>
						</li>
						<li>
							<a
								href="tel:+2348063361340"
								className="text-dark">Call Us On: 08063361340</a>
							<a href="tel:+2348034664025" className="text-dark"> 08034664025 </a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
	)
}

export default Footer;
