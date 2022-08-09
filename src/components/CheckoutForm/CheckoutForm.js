import { useState } from 'react';
import './CheckoutForm.scss';
import api from './../../api';
import uuid from 'react-uuid';

export default function CheckoutForm() {
	const [userName, setUserName] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [expireMonth, setExpireMonth] = useState('');
	const [expireYear, setExpireYear] = useState('');
	const [observations, setObservations] = useState('');
	const [newsletter, setNewsletter] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [saving, setSaving] = useState(false);

	const handleUserNameChange = (event) => {
		const value = event.target.value;
		setUserName(value);
	}

	const handleCardNumberChange = (event) => {
		const value = event.target.value;
		if (isNaN(value) === false) {
			setCardNumber(value);
		}
	}

	const handleExpireMonthChange = (event) => {
		const value = event.target.value;
		if (value === '') {
			alert('The month is required');
		}
		else {
			setExpireMonth(value);
		}
	}

	const handleExpireYearChange = (event) => {
		const value = event.target.value;
		setExpireYear(value);
	}

	const handleObservationChange = (event) => {
		const value = event.target.value;
		setObservations(value);
	}

	const handleNewsletterChange = (event) => {
		const value = event.target.checked;
		setNewsletter(value);
	}

	const handleSumitForm = (event) => {
		event.preventDefault();

		// Validate each field
		let error = [];

		if (userName === '') {
			error.push("Enter your name");
		}

		if (cardNumber === '') {
			error.push("Enter the credit card number");
		}

		if (expireMonth === '') {
			error.push("Select an expire month");
		}

		if (expireYear === '') {
			error.push("Enter the expire year");
		}

		// Update the state based on the errors
		if (error.length > 0) {
			setErrorMessage(error);
		}
		else { // When I have no errors

			// TODO: Something with the data
			// - Save to the database?
			// - Later in course
			let data = {
				id: uuid(),
				userName: userName,
				cardNumber: cardNumber,
				expireMonth: expireMonth,
				expireYear: expireYear,
				observations: observations,
				newsletter: newsletter
			};

			setSaving(true);

			api.post('/shop-online/orders', data)
				.then((response) => {
					console.log(response);
					if (response.status === 201) {
						setErrorMessage(null);
						setSubmitSuccess(true);
					}
				});


		}
	}


	const renderSuccess = () => {
		return (
			<div className='success'>
				<strong>Success</strong>
				<p>Your order was submited</p>
				<button onClick={() => {
					setSubmitSuccess(false);
				}}>Go back</button>
			</div>
		);
	}

	const renderForm = () => {
		const newsletterStyle = {
			color: newsletter
				? 'green'
				: 'blue'
		}

		return (
			<form onSubmit={handleSumitForm}>

				{errorMessage && (

					<div className='error'>
						Please, verify the entered data:
						<ul>
							{errorMessage.map(
								(error, index) => (
									<li key={index}>{error}</li>
								)
							)}
						</ul>
					</div>

				)}

				<label>
					<span>User Name</span>
					<input
						type="text"
						maxLength={50}
						value={userName}
						onChange={handleUserNameChange}
					/>
				</label>

				<label>
					<span>Card Number</span>
					<input
						type="text"
						maxLength={16}
						value={cardNumber}
						onChange={handleCardNumberChange}
					/>
				</label>

				<label>
					<span>Expire Month</span>
					<select
						value={expireMonth}
						onChange={handleExpireMonthChange}
					>
						<option value=""></option>
						<option value="01">January</option>
						<option value="02">February</option>
						<option value="03">March</option>
					</select>
				</label>

				<label>
					<span>Expire Year</span>
					<input
						type="number"
						maxLength={4}
						value={expireYear}
						onChange={handleExpireYearChange}
					/>
				</label>

				<label>
					<span>Observations</span>
					<textarea
						value={observations}
						onChange={handleObservationChange}
					/>
					<span>Count: {observations.length}</span>
				</label>

				<label style={newsletterStyle}>
					<input
						type="checkbox"
						checked={newsletter}
						onChange={handleNewsletterChange}
					/>
					I want to receive newsletter
				</label>

				<button type='submit'>Send form</button>

			</form>
		);
	}

	const renderSaving = () => {
		return (
			<div>Saving...</div>
		);
	}

	// return submitSuccess
	// 	? renderSuccess()
	// 	: renderForm();

	if (submitSuccess) {
		return renderSuccess();
	}
	else if (saving) {
		return renderSaving();
	}
	else {
		return renderForm();
	}
}