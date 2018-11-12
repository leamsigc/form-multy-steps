import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
export class FormUserDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};
	render() {
		const { values, handleChange } = this.props;
		console.log(values);
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Enter user information" />
					<TextField
						hintText="Enter yours first name.."
						floatingLabelText="First Name"
						onChange={handleChange('firstName')}
						defaultValue={values.firstName}
					/>
					<br />
					<TextField
						hintText="Enter yours Last name.."
						floatingLabelText="Last Name"
						onChange={handleChange('lastName')}
						defaultValue={values.lastName}
					/>
					<br />
					<TextField
						hintText="Enter yours Email.."
						floatingLabelText="Email "
						onChange={handleChange('email')}
						defaultValue={values.email}
					/>
					<br />
					<RaisedButton label="continue" primary={true} onClick={this.continue} />
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default FormUserDetails;
