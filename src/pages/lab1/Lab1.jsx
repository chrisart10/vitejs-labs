import { useState } from "react";

import InputList from "./FormList";

function Lab1() {
	const [formData, setFormData] = useState({ firstName: "", lastName: "" });
	const handlerOnChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	console.log("-----------------------LAB1-----------------------");

	return (
		<div>
			<InputList>
				<input
					type="text"
					name="firstName"
					onChange={handlerOnChange}
				/>
				<input type="text" name="lastName" onChange={handlerOnChange} />
			</InputList>
			<p>
				{formData.firstName} {formData.lastName}
			</p>
		</div>
	);
}

export default Lab1;
