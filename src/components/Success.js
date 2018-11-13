import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class Success extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Success " />
					<h1>Thank You for your time!!</h1>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}
