import Footer from "../components/navigation/Footer";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as GoIcons from "react-icons/go";

const Contact = () => {

	const headerStyle = {
		fontFamily: "var(--alegreya)",
		color: "black"
	}

	return (
		<>
			<div className="container-fluid custom__container pt-4 pb-5">
				<h2
					className="text-center pt-0 pb-3 mb-3"
					style={headerStyle}
				>
					Contact Us
				</h2>
				<div className="row justify-content-center">
					<div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
						<div className="card contact__form">
							<div className="body">
								<p>
									<i>
										<FiIcons.FiPhoneCall />
									</i>
									Call Us:
									<span>
										Line 1: <a href="tel:+2348063361340">08063361340</a>
									</span>
									<span>
										Line 2: <a href="tel:+2348034664025">08034664025</a>
									</span>
									<span>
										Lines open 8am-7pm GMT Monday-Saturday
									</span>
								</p>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
						<div className="card contact__form">
							<div className="body">
								<p>
									<i>
										<AiIcons.AiFillMail />
									</i>
									Email Us:
									<span>
										Mail: <a href="mailto:amukpedistrict@gmail.com">
											amukpedistrict@gmail.com</a>
									</span>
									<span>
										We aim to respond to your enquires within 24 hours.


									</span>
								</p>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
						<div className="card contact__form">
							<div className="body">
								<p>
									<i>
										<GoIcons.GoHome />
									</i>
									Location:
									<span>
										Amukpe, Sapele, Delta State.
									</span>
									<span>
										Open Monday-Friday, 9am-4pm
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Contact;