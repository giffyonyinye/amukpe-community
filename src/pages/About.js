import Footer from "../components/navigation/Footer";
import AboutImg from "../assets/img/job.svg";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as GoIcons from "react-icons/go";

const About = () => {

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
					About Us
				</h2>
				<div className="row justify-content-center">
					<div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
						<img
							src={AboutImg}
							className="img-fluid"
						/>
					</div>
					<div className="col-xl-7 col-lg-7 col-md-4 col-sm-6">
						<div className="card comunity_card">
							<div className="body">
								<p id="header">Amukpe Community</p>
								<span>
									Amukpe Community is situated in Amukpe, Sapele 
									Local Government, Delta State.
									This platform was established in the year 2021 with the idea
									from Mr Dickson Omoraka.
								</span>
								<br />
								<p id="header">Aims and Objectives</p>
								<span>
									The main aim of this community platform is to improve 
									the current state of the community thereby creating awareness
									and job opportunities to both indigenes and non-indigenes of 
									Okpe Community. We appreciate talented, hardworking, skilled 
									and career-driven individuals in Okpe community at large 
									and in diaspora. Our Objectives is to reduce the level of 
									unemployment by creating job opportunities in the community.
									The administrators of this platform stand as a voice to 
									the the people of the community and beyond. Oneness is 
									Strength, Love and Progress.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default About;