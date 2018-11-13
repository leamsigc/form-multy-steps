import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
export class Confirm extends Component {
	continue = e => {
		e.preventDefault();
		//process the form and send data to api
		this.props.nextStep();
	};
	prev = e => {
		e.preventDefault();
		this.props.prevStep();
	};
	render() {
		const {
			values: { firstName, lastName, occupation, city, bio, email }
		} = this.props;
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Confirm Details" />
					<List>
						<ListItem primaryText="First Name" secondaryText={firstName} />
						<ListItem primaryText="Last Name" secondaryText={lastName} />
						<ListItem primaryText="Email" secondaryText={email} />
						<ListItem primaryText="Occupation" secondaryText={occupation} />
						<ListItem primaryText="City" secondaryText={city} />
						<ListItem primaryText="Bio" secondaryText={bio} />
					</List>
					<br />
					<RaisedButton label="Prev" primary={true} onClick={this.prev} />
					<RaisedButton label="Confirm & Continue" primary={true} onClick={this.continue} />
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default Confirm;
