import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

import '../styles/Lander.css';
import {
	AiOutlineLine,
	AiFillFacebook,
	AiFillTwitterCircle,
	AiFillInstagram,
	AiOutlineVideoCamera
} from 'react-icons/ai';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { FaLeaf } from 'react-icons/fa';
import { GiLovers } from 'react-icons/gi';
import { DiPhotoshop } from 'react-icons/di';
import { IoMdQuote } from 'react-icons/io';

class Homepage extends Component {
	state = {
		loading: true
	};

	componentDidMount = () => {
		setTimeout(() => {
			this.setState({
				loading: !this.state.loading
			});
		}, 4000);
	};

	render() {
		return (
			<body>
				{this.state.loading ? (
					<div className="loading">
						<img src={require('../assets/loading.gif')} alt="load_img" className="loadingGif" />
					</div>
				) : (
					<main>
						<Nav />
						<section>
							<div className="landingContainer">
								<h2>
									<AiOutlineLine id="lineFnt" />creative photography
								</h2>
								<h1>photography</h1>
								<h1>makes us happy</h1>
								<h1>let's take a shot.</h1>
								<NavLink to="/contact" className="NavLink">
									<h3>hit me up today</h3>
								</NavLink>

								<div className="landingSocial">
									<AiFillInstagram className="socialFont" id="insta" />
									<AiFillFacebook className="socialFont" />
									<AiFillTwitterCircle className="socialFont" />
								</div>
							</div>

							<section className="experienceContainer">
								<div>
									<h1>how i make </h1>
									<h1>user experience</h1>

									<a href="#">swacky@gmail.com</a>
									<hr />
								</div>

								<div className="experienceRight">
									<h5>
										You don’t make a photograph just with a camera.<br /> You bring to the act of
										photography all the <br /> pictures you have seen, the books you have <br />{' '}
										read, the music you have heard, the people you have loved.
									</h5>
									<p>
										Ansel Adams <AiOutlineLine id="pFont" />
									</p>
									<p>American Photographer</p>

									<div>
										<h4>05</h4>
										<h3>
											YEARS OF <br />
											DIGITAL EXPERIENCE
										</h3>
									</div>
								</div>
							</section>

							<section className="pictureGallery">
								<div>
									<div className="parent">
										<div className="child" />
									</div>{' '}
									<h3>Creative Photography</h3>
									<p>Creativity is Innovation having fun</p>
								</div>

								<div>
									<div className="parent">
										<div className="child child2" />
									</div>{' '}
									<h3>Artistic Photography</h3>
									<p>Creativity is Innovation having fun</p>
								</div>

								<div>
									<div className="parent">
										<div className="child child3" />
									</div>{' '}
									<h3>Modelling Photography</h3>
									<p>Creativity is Innovation having fun</p>
								</div>
							</section>

							<section className="FullGallery">
								<div className="gallery-picture">
									<img
										src={require('../assets/girl.jpeg')}
										alt="gallery_img"
										className="gallery-one"
									/>
									<BsArrowsFullscreen id="arrow" />

									<div className="gall">
										<h3>Creativity</h3>
										<p>Think creativity, think innovation beyond imagination</p>
									</div>
								</div>

								<div className="gallery-picture">
									<img
										src={require('../assets/boy-and-girl.jpeg')}
										alt="gallery_img"
										className="gallery-one"
									/>
									<BsArrowsFullscreen id="arrow" />

									<div className="gall">
										<h3>Creativity</h3>
										<p>Think creativity, think innovation beyond imagination</p>
									</div>
								</div>

								<div className="gallery-picture">
									<img
										src={require('../assets/mosco.jpeg')}
										alt="gallery_img"
										className="gallery-one"
									/>
									<BsArrowsFullscreen id="arrow" />

									<div className="gall">
										<h3>Creativity</h3>
										<p>Think creativity, think innovation beyond imagination</p>
									</div>
								</div>

								<div className="gallery-picture">
									<img
										src={require('../assets/girl-with-grass.jpg')}
										alt="gallery_img"
										className="gallery-one"
									/>
									<BsArrowsFullscreen id="arrow" />

									<div className="gall">
										<h3>Creativity</h3>
										<p>Think creativity, think innovation beyond imagination</p>
									</div>
								</div>

								<div className="gallery-picture">
									<img
										src={require('../assets/swacky-white.jpg')}
										alt="gallery_img"
										className="gallery-one"
									/>
									<BsArrowsFullscreen id="arrow" />

									<div className="gall">
										<h3>Creativity</h3>
										<p>Think creativity, think innovation beyond imagination</p>
									</div>
								</div>

								<div className="gallery-picture">
									<img
										src={require('../assets/friday.jpg')}
										alt="gallery_img"
										className="gallery-one"
									/>
									<BsArrowsFullscreen id="arrow" />

									<div className="gall">
										<h3>Creativity</h3>
										<p>Think creativity, think innovation beyond imagination</p>
									</div>
								</div>
							</section>

							<section className="services">
								<div className="serviceHeader">
									<h1>My services</h1>
									<h3>from small events to major events, I got you covered</h3>
									<hr />
								</div>

								<div className="serviceShelf">
									<div>
										<FaLeaf id="serviceFont" />
										<h4>Nature photography</h4>

										<p>
											You're which creepeth were yielding kind, divide sixten po gatherin all
											first fill Seed wherein life. Years one fifth
										</p>
									</div>

									<div>
										<AiOutlineVideoCamera id="serviceFont" />
										<h4>Event Coverage</h4>

										<p>
											You're which creepeth were yielding kind, divide sixten po gatherin all
											first fill Seed wherein life. Years one fifth
										</p>
									</div>

									<div>
										<GiLovers id="serviceFont" />
										<h4>Wedding photography</h4>

										<p>
											You're which creepeth were yielding kind, divide sixten po gatherin all
											first fill Seed wherein life. Years one fifth
										</p>
									</div>

									<div>
										<DiPhotoshop id="serviceFont" />
										<h4>Photo Editting</h4>

										<p>
											You're which creepeth were yielding kind, divide sixten po gatherin all
											first fill Seed wherein life. Years one fifth
										</p>
									</div>
								</div>
							</section>

							<section className="editting">
								<div className="editHeader">
									<h2>
										take a look <br /> at my editting
									</h2>
									<p>These are few of my first works when I started editting</p>
									<h6>see more</h6>
								</div>

								<div>
									<div className="img" />
									<h5>Before</h5>
								</div>

								<div>
									<div className="img2" />
									<h5>After</h5>
								</div>

								<div>
									<img
										src={require('../assets/mezie-ola-before.JPG')}
										alt="gallery_img"
										className="gallery-one"
									/>
									<h5>Before</h5>
								</div>

								<div>
									<img
										src={require('../assets/mezie and ola.jpg')}
										alt="gallery_img"
										className="gallery-one"
									/>
									<h5>After</h5>
								</div>

								<div>
									<div className="img3" />
									<h5>Before</h5>
								</div>

								<div>
									<div className="img4" />
									<h5>After</h5>
								</div>
							</section>

							<section className="about">
								<div className="myPic">
									<img
										src={require('../assets/about swacky.jpg')}
										alt="abt_img"
										className="abt-swacky"
									/>
									<img src={require('../assets/camera.jpg')} alt="abt_img" className="camera" />
								</div>

								<div className="myPersona">
									<h2>
										Let me <br />
										Introduce Myself <br />
										A bit.
									</h2>

									<p>
										Beginning blessed second a creepeth. Darkness wherein fish years good <br /> air
										whose after seed appear midst evenin
									</p>

									<p>
										Beginning blessed second a creepeth. Darkness wherein fish years good <br /> air
										whose after seed appear midst evenin appear void give third bearing <br />{' '}
										divide one so
									</p>

									<h3>Read more</h3>
								</div>
							</section>

							<section className="quote">
								<IoMdQuote id="blockQuote" />

								<h4>
									Photography for me is not looking, it’s feeling. If you can’t feel what you’re
									looking at, then you’re never going to get others to feel anything when they look at
									your pictures.
								</h4>

								<h5>Don McCullin</h5>
								<h6>British photojournalist</h6>
							</section>
						</section>
						<Footer />
					</main>
				)}
			</body>
		);
	}
}

export default Homepage;
