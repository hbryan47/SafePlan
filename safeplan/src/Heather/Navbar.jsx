import React from "react";
import "../assets/CircularNavbar.css";
import "../img/RoseLicensedAdobeStock_479715727.jpeg";
// {
/* <head>
<script
  type="module"
  src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
></script>
<script
  nomodule
  src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
></script>
</head> */
// }
function CircularNavbar() {
	const toggleNavbar = () => {
		const navbar = document.querySelector(".Navbar");
		navbar.classList.toggle("active");
	};
	return (
		<div className="Navbar">
			<p className="toggle" onClick={toggleNavbar}></p>
			<li style={{ "--i": 0 }}>
				<a href="#">
					<ion-icon name="home-outline"></ion-icon>
				</a>
			</li>
			<li style={{ "--i": 1 }}>
				<a href="#">Safety Plan</a>
			</li>
			<li style={{ "--i": 2 }}>
				<a href="#">Resources</a>
			</li>
			<li style={{ "--i": 3 }}>
				<a href="#">Chat</a>
			</li>
			<li style={{ "--i": 4 }}>
				<a href="#">Testimonials</a>
			</li>
			<li style={{ "--i": 5 }}>
				<a href="#">Profile</a>
			</li>
			<li style={{ "--i": 6 }}>
				<a href="#">My Notes</a>
			</li>
			<li style={{ "--i": 7 }}>
				<a href="#">Contact Us</a>
			</li>
			<li style={{ "--i": 8 }}>
				<a href="#">About Us</a>
			</li>
		</div>
	);
}
export default CircularNavbar;
