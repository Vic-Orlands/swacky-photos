import React, { useContext } from 'react';
import { Switch, Route, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import Header from './react-spring-animation/Header';
import Home from './react-spring-animation/Home';
import About from './react-spring-animation/About';
import Contact from './react-spring-animation/Contact';

const App = () => {
	const { location } = useContext(__RouterContext);
	const transitions = useTransition(location, (location) => location.pathname, {
		from: { opacity: 0, transform: 'translate(100%, 0)' },
		enter: { opacity: 1, transform: 'translate(0%, 0)' },
		leave: { opacity: 0, transform: 'translate(-50%, 0)' }
	});

	return (
		<main className="container-fluid">
			<Header />
			{transitions.map(({ item, props, key }) => (
				<animated.div key={key} style={props}>
					<Switch location={item}>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/contact" component={Contact} />
					</Switch>
				</animated.div>
			))}
		</main>
	);
};

export default App;
	