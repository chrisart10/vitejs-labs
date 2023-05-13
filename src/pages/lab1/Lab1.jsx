import { useState } from "react";

import FormList from "./FormList";

function Lab1() {
	const [formData, setFormData] = useState({ firstName: "", lastName: "" });
	const [InputList] = FormList({
		onChange: (data) => {
			console.log("data modificada", data);
			setFormData((prev) => ({ ...prev, ...data }));
		},
	});
	console.log("-----------------------LAB1-----------------------");

	return (
		<div>
			<InputList>
				<input type="text" name="firstName" />
				<input type="text" name="lastName" />
			</InputList>
			<p>
				{formData.firstName} {formData.lastName}
			</p>
		</div>
	);
}

export default Lab1;
