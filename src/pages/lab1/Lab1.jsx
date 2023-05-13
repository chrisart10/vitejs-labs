import FormList from "./FormList";

function Lab1() {
	const [InputList] = FormList({
		onChange: (data) => {
			console.log("data modificada", data);
		},
	});
	console.log("-----------------------LAB1-----------------------");

	return (
		<div>
			<InputList>
				<input type="text" name="firstName" />
				<input type="text" name="lastName" />
			</InputList>
		</div>
	);
}

export default Lab1;
