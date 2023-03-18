import React from "react";
import axios from "axios";

function Paragraph() {
	axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/${3}/10?p=true`).then((data) => {
		document.getElementById("parag").innerText = data.data;
	});

	return <div id="parag"></div>;
}

export default Paragraph;
