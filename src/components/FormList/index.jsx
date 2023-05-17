/* eslint-disable react/prop-types */
import React from "react";

function InputList({ children, handlerOnChange }) {
	console.log("-----------------------InputList-----------------------");
	const enhaceOnChange = (e) => {
		console.log("e.target.name", e.target.name);
		console.log("e.target.value", e.target.value);

		handlerOnChange((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const newProp = React.Children.map(children, (child) => {
		console.log(child.props);
		return (
			<>
				<label htmlFor={child.props.name}>{child.props.name}</label>
				{React.cloneElement(child, {
					className: "input-list__item",
					onChange: enhaceOnChange,
				})}
			</>
		);
	});

	return <div className="input-list">{newProp}</div>;
}

export default InputList;
