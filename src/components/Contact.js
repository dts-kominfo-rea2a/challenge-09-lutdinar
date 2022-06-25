// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = (props) => {
	return (
		<div className="card">
			<img
				src={props.data.photo}
				alt={props.data.name}
				className="img-size"
			/>

			<div className="content">
				<h3>{props.data.name}</h3>
				<p className="title">{props.data.email}</p>
				<p>{props.data.phone}</p>
			</div>
			{/* <h1>{props.data.name}</h1>
			<p className="title">{props.data.email}</p>
			<p>{props.data.phone}</p>
			<p>
				<button className="btn">Contact</button>
			</p> */}
		</div>
	);
};

export default Contact;
