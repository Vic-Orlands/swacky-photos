import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import '../styles/Contact.css';

import { AiFillMail } from 'react-icons/ai';
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(true);
		}, 4000);
	});
	return (
		<div className="cont">
			<Nav />

			{isLoading ? (
				<div className="loading">
					<img src={require('../assets/loading.gif')} alt="load_img" className="loadingGif" />
				</div>
			) : (
				<div>
					<section className="contact-wrapper">
						<div className="pic-contact" />

						<div>
							<div>
								<h3>contact me</h3>
								<h1>Give me a call,</h1>
								<h1>I'll make you a believer.</h1>

								<div className="hit-me-up">
									<FaLocationArrow id="font" />
									<div>
										<h4>Aba, Abia State, Nigeria.</h4>
										<h5>Nwafor Street, Umungasi</h5>
									</div>
								</div>

								<div className="hit-me-up">
									<FaPhoneAlt id="font" />
									<div>
										<h4>+2348105160050 | +2349021493649</h4>
										<h5>Mon to Fri, 9am to 6pm</h5>
									</div>
								</div>

								<div className="hit-me-up">
									<AiFillMail id="font" />
									<div>
										<h4>swacky@gmail.com</h4>
										<h5>Hit me, Let's make picture-perfect magic</h5>
									</div>
								</div>
							</div>
						</div>
					</section>

					<Footer />
				</div>
			)}
		</div>
	);
};

export default Contact;
