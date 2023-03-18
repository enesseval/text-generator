import React, { useState } from "react";

function Form() {
	const [paragraphCount, setParagraphCount] = useState(0);
	const [incHtml, setIncHtml] = useState(0);
	return (
		<div className="form">
			<div className="row">
				<label htmlFor="paragraphCount">Paragraph</label>
				<input type="number" id="paragraphCount" value={paragraphCount} onChange={(e) => setParagraphCount(e.target.value)} />
			</div>
			<div className="row">
				<label htmlFor="incHtml">Include HTML</label>
				<select name="" id="incHtml" onChange={(e) => setIncHtml(e.target.value)}>
					<option value="0">No</option>
					<option value="1">Yes</option>
				</select>
			</div>
		</div>
	);
}

export default Form;
