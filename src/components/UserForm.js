import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import UserPersonalDetails from './UserPersonalDetails';

export class UserForm extends Component {
	state = {
		step: 1,
		firstName: '',
		lastName: '',
		email: '',
		occupation: '',
		city: '',
		bio: ''
	};
	//Method  to proceed next steps
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	};
	//got back to previous step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1
		});
	};
	//Handle fields change
	handleChange = input => e => {
		this.setState({
			[input]: e.target.value
		});
	};

	render() {
		const { step } = this.state;
		const { firstName, lastName, occupation, city, bio } = this.state;
		const values = { firstName, lastName, occupation, city, bio };

		// eslint-disable-next-line default-case
		switch (step) {
			case 1:
				return <FormUserDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} />;
			case 2:
				return (
					<UserPersonalDetails
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values}
						prevStep={this.prevStep}
					/>
				);
			case 3:
				return <h1>Confirm step 3</h1>;
			// eslint-disable-next-line no-duplicate-case
			case 2:
				return <h1>Success</h1>;
		}
	}
}

export default UserForm;
