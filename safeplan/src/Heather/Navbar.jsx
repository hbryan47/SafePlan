// CODE AFTER INCORPORATING ICON CODE
import React, { Component } from "react";
// import { FaHeart, FaRegHeart } from 'react-icons/fa';
// import { BsHeartFill, BsHeart } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
// import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import "../assets/CircularNavbar.css";
import "../img/RoseLicensedAdobeStock_479715727.jpeg";

// class FontAwesomeIcon extends Component {
//   render() {
//     return (
//       <div>

//         <FaHeart />
//         <FaRegHeart />
//         <BsHeartFill />
//         <BsHeart />
//         <FontAwesomeIcon icon={faHouse} />
//       </div>
//     )
//   }
// }

function CircularNavbar() {
	const toggleNavbar = () => {
		const navbar = document.querySelector(".Navbar");
		navbar.classList.toggle("active");
	};

	return (
		<div className="Navbar">
			<p className="toggle" onClick={toggleNavbar}>
				<FontAwesomeIcon icon={faHandPointer} fade size="lg" />
			</p>
			{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
			<li style={{ "--i": 0 }}>
				<a href="#">
					<FontAwesomeIcon icon={faUserShield} size="2xl" />
				</a>
				{/* Safety Planning Page */}

				{/* <a href="#"><FontAwesomeIcon icon={ faHouse } />Home</a> */}
				{/* Home Page */}
			</li>
			<li style={{ "--i": 1 }}>
				<a href="#">
					<FontAwesomeIcon icon={faCircleInfo} size="2xl" />
				</a>
				{/* Resource Links Page */}
			</li>
			<li style={{ "--i": 2 }}>
				<a href="#">
					<FontAwesomeIcon icon={faComments} size="2xl" />
				</a>
				{/* Chat Page */}
			</li>
			<li style={{ "--i": 3 }}>
				<a href="#">
					<FontAwesomeIcon icon={faBookOpen} size="2xl" />
				</a>
				{/* Testimonials Page */}
			</li>
			<li style={{ "--i": 4 }}>
				<a href="#">
					<FontAwesomeIcon icon={faUnlockKeyhole} size="2xl" />
				</a>
				{/*Login Page*/}
			</li>
			<li style={{ "--i": 5 }}>
				<a href="#">
					<FontAwesomeIcon icon={faClipboard} size="2xl" />
				</a>
				{/* Notes/Posts Page */}
			</li>
			<li style={{ "--i": 6 }}>
				<a href="#">
					<FontAwesomeIcon icon={faUserPlus} size="2xl" />
				</a>
				{/* Signup Page */}
			</li>
			<li style={{ "--i": 7 }}>
				<a href="#">
					<FontAwesomeIcon icon={faPhone} size="2xl" />
				</a>
				{/* Contact / About Us Page */}
			</li>
		</div>
	);
}

function CombinedComponent() {
	return (
		<div>
			<FontAwesomeIcon />
			<CircularNavbar />
		</div>
	);
}

export default CombinedComponent;

