import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import '../styles/Services.css';

class Services extends Component {
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
			<div className="cont">
				<Nav />
				{this.state.loading ? (
					<div className="loading">
						<img src={require('../assets/loading.gif')} alt="load_img" className="loadingGif" />
					</div>
				) : (
					<div className="services-container">
						<section className="pictureGallery">
							<div>
								<div className="parent">
									<div className="children" />
								</div>{' '}
								<h3>Outdoor Photography</h3>
								<p>Creativity is Innovation having fun</p>
							</div>

							<div>
								<div className="parent">
									<div className="children child2" />
								</div>{' '}
								<h3>Wedding Photography</h3>
								<p>Creativity is Innovation having fun</p>
							</div>

							<div>
								<div className="parent">
									<div className="children child4" />
								</div>{' '}
								<h3>Indoor Photography</h3>
								<p>Creativity is Innovation having fun</p>
							</div>

							<div>
								<div className="parent">
									<div className="children child3" />
								</div>{' '}
								<h3>Creative Photography</h3>
								<p>Creativity is Innovation having fun</p>
							</div>

							<div>
								<div className="parent">
									<div className="children child5" />
								</div>{' '}
								<h3>Artistic Photography</h3>
								<p>Creativity is Innovation having fun</p>
							</div>

							<div>
								<div className="parent">
									<div className="children child6" />
								</div>{' '}
								<h3>Modelling Photography</h3>
								<p>Creativity is Innovation having fun</p>
							</div>
						</section>

						<Footer />
					</div>
				)}
			</div>
		);
	}
}

export default Services;
