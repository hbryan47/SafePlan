// import React, { useState } from "react";
// import axios from "axios";

// const Registration = () => {
// 	const [formData, setFormData] = useState({
// 		name: "",
// 		email: "",
// 		password: "",
// 	});

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData((prevFormData) => ({
// 			...prevFormData,
// 			[name]: value,
// 		}));
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const response = await axios.post("/api/register", formData);
// 			const token = response.data.token; // Assuming your server returns the JWT token upon successful registration.
// 			// Save the token in local storage or cookies.
// 			// You can use a library like 'js-cookie' for handling cookies in React.
// 		} catch (error) {
// 			// Handle registration error, e.g., display an error message.
// 		}
// 	};

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<input
// 				type="text"
// 				name="name"
// 				value={formData.name}
// 				onChange={handleChange}
// 			/>
// 			<input
// 				type="email"
// 				name="email"
// 				value={formData.email}
// 				onChange={handleChange}
// 			/>
// 			<input
// 				type="password"
// 				name="password"
// 				value={formData.password}
// 				onChange={handleChange}
// 			/>
// 			<button type="submit">Register</button>
// 		</form>
// 	);
// };

// export default Registration;
