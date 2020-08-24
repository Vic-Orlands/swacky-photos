import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
// import Dark from './darkMode/Dark';
import "../styles/Nav.css";

class Nav extends Component {
	navlinks = document.getElementById('nav-links');

	state = {
		navlinks: false
	};

	drop = (e) => {
		e.preventDefault();
		this.setState({
			navlinks: !this.state.navlinks
		});
	};

	render() {
		const { navlinks } = this.state;
		return (
			<nav>
				{/* ------------------------below is the hamburger toggle menu bar on small screens--------------------------- */}
				{/* <div className="mobileNav">
					<div className="mobileNavBody">
						<h1>
							my<span>S</span>choolFinder
						</h1>
						<div className="hamburger" onClick={this.drop}>
							<div className="line" />
							<div className="line" />
							<div className="line" />
						</div>
					</div> */}

					{/* <ul className={'nav-links ' + (navlinks ? 'open' : '')} id="nav-links"> */}
						{/* <NavLink to="/"> */}
						{/* <li>home</li> */}
						{/* </NavLink> */}
						{/* <NavLink to="/login"> */}
						{/* <li>School </li> */}
						{/* </NavLink> */}
					{/* </ul> */}
				{/* </div> */}
				{/* -------------------------------the hamburger body ends here------------------------------ */}

				{/* ----------------------below is the nav bar at full laptop screen------------------------------- */}
				<section className="headerNav">
					<div className="logo">
						<img src={require('../assets/lens.png')} alt="cam_img" className="nav-link"/>
						<div>
							<h2>Swacky</h2>
							<h2>Concepts</h2>
						</div>
					</div>

					<ul className="navList">
						<li>Home</li>
						<li>About</li>
						<li>Gallery</li>
						<li>Services</li>
						<li>Contact Me</li>
					</ul>
				</section>
			</nav>
		);
	}
}
export default Nav;