import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Lander';
import Services from './Services';
import Contact from './Contact';
import Gallery from './Gallery';

const Router = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/" component={Homepage} exact="true" />
					<Route path="/services" component={Services} />
					<Route path="/contact" component={Contact} />
					<Route path="/gallery" component={Gallery} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};
export default Router;
