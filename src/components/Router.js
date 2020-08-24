import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
// import Register from './Register';
// import Login from './Login';

// import PrivateRoute from './Routes/PrivateRoute';
// import PublicRoute from './Routes/PublicRoute';
 

const Router = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/" component={Homepage} exact="true" />
					{/* <PublicRoute path="/register" component={Register} /> */}
					{/* <PublicRoute path="/login" component={Login} /> */}
					{/* <PrivateRoute path="/udash" component={UserDash} />
					<PrivateRoute path="/deposit" component={Deposit} />
					<PrivateRoute path="/sms" component={BulkSms} />
					<PrivateRoute path="/airtime" component={BuyAirtime} />
					<PrivateRoute path="/data" component={BuyData} /> */}
				</Switch>
			</div>
		</BrowserRouter>
	);
};
export default Router;
