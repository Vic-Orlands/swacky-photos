import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

class Nav extends Component {
	render() {
		return (
			<nav>
				<section className="headerNav">
					<div className="logo">
						<img src={require('../assets/lens.png')} alt="cam_img" className="nav-link" />
						<div>
							<h2>Swacky</h2>
							<h2>Concepts</h2>
						</div>
					</div>

					<ul className="navList">
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
				</section>
			</nav>
		);
	}
}
export default Nav;
