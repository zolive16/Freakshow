import React from "react";
import "../styles/Home.css";

export default Home => {
	return (

		<div style={{
			display: "flex",
			justifyContent: "center",
			height: "100vh",
			paddingTop: "5em"
		}}>

			<iframe
				style={{
					width: "80%",
					height: "80%"
				}}
				src="https://www.youtube.com/embed/FscbWks0klM?rel=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />

		</div>


	);
};
