import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';

import '../styles/Gallery.css';

const Gallery = () => {
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
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
					<center>
						<h1>Some of my works, hit up my Instagram page for more beautiful pictures</h1>
					</center>

					<section className="gallery-wrapper">
						<div className="gallery-picture" />

						<div className="gallery-picture" />

						<div className="gallery-picture" />

						<div className="gallery-picture" />

						<div className="gallery-picture" />

						<div className="gallery-picture" />

						<div className="gallery-picture" />

						<div className="gallery-picture" />

						<div className="gallery-picture" />

						<div className="gallery-picture" />

						<div className="gallery-picture" />

						<div className="gallery-picture" />

						<div className="gallery-picture" />

						<div className="gallery-picture" />

						<div className="gallery-picture" />

						<div className="gallery-picture" />
					</section>
				</div>
			)}

			<Footer />
		</div>
	);
};

export default Gallery;
