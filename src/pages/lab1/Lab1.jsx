import { useState } from "react";
import InputList from "../../components/FormList";
import DummieComponet from "../../components/DummieComponent";
// import styled from "styled-components";

function Lab1() {
	const [formData, setFormData] = useState({ firstName: "", lastName: "" });

	console.log("-----------------------LAB1-----------------------");

	return (
		<div>
			<InputList handlerOnChange={setFormData}>
				<input type="text" name="firstName" />
				<input type="text" name="lastName" />
			</InputList>
			<DummieComponet />
			<p>
				{formData.firstName} {formData.lastName}
			</p>
		</div>
	);
}

export default Lab1;
