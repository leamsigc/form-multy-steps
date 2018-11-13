import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
export class UserPersonalDetail extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};
	prev = e => {
		e.preventDefault();
		this.props.prevStep();
	};
	render() {
		const { values, handleChange } = this.props;
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Enter user information" />
					<TextField
						hintText="Enter your Occupation"
						floatingLabelText="occupation"
						onChange={handleChange('occupation')}
						defaultValue={values.occupation}
					/>
					<br />
					<TextField
						hintText="Enter yours City"
						floatingLabelText="Last City"
						onChange={handleChange('city')}
						defaultValue={values.city}
					/>
					<br />
					<TextField
						hintText="Enter yours bio"
						floatingLabelText="bio"
						onChange={handleChange('bio')}
						defaultValue={values.bio}
					/>
					<br />
					<RaisedButton label="previous" primary={true} onClick={this.prev} />
					<RaisedButton label="continue" primary={true} onClick={this.continue} />
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default UserPersonalDetail;
