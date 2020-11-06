import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';

import { FaFacebookF, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';

class Footer extends Component {
	render() {
		return (
			<section className="footer">
				<footer>
					<div>
						<div className="logo">
							<img src={require('../assets/lens.png')} alt="cam_img" className="footer-img" />
							<div>
								<h2>Swacky</h2>
								<h2>Concepts</h2>
							</div>
						</div>

						<p>
							Grabbing the constumer’s attention <br /> by making creative snapshots fun for them.
						</p>
					</div>

					<div className="navigation">
						<h5>Navigation</h5>

						<ul>
							<li>
								<NavLink to="/" className="NavLink">
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to="/gallery" className="NavLink">
									Gallery
								</NavLink>
							</li>
							<li>
								<NavLink to="/services" className="NavLink">
									Services
								</NavLink>
							</li>
							<li>
								<NavLink to="/contact" className="NavLink">
									Contact Me
								</NavLink>
							</li>
						</ul>
					</div>

					<div className="follow">
						<h5>Follow Me</h5>
						<p>Let us be social</p>

						<div>
							<FaFacebookF id="followFont" />
							<FaTwitter id="followFont" />
							<FaInstagram id="followFont" />
						</div>
					</div>
				</footer>

				<p id="foot-par">
					Created with <FaHeart /> by Vic Orlands @ <span>chimezieinnocent39@gmail.com</span>{' '}
				</p>
			</section>
		);
	}
}

export default Footer;
