import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";

const Contact = () => {
	return (
		<div className="container-fluid custom__container pt-5">
			<div className="row justify-content-center">
				<div className="col-xl-4">
					<div className="card contact__form">
						<div className="header">
							<p>
								<i><FiIcons.FiPhoneCall /></i>
								Call Us:
							</p>
						</div>
					</div>
				</div>
				<div className="col-xl-4">
					<div className="card contact__form">
						<div className="header">
							<p>
								<i><AiIcons.AiOutlineMail /></i>
								Email:
							</p>
						</div>
					</div>
				</div>
				<div className="col-xl-4">
					<div className="card contact__form">
						<div className="header">
							<p>
								<i><FiIcons.FiPhoneCall /></i>
								Call Us:
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact;