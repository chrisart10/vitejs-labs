/* eslint-disable react/prop-types */
import React from "react";

function InputList({ children }) {
	console.log("-----------------------InputList-----------------------");

	const newProp = React.Children.map(children, (child) => {
		console.log(child);

		return (
			<>
				<label htmlFor={child.props.name}>{child.props.name}</label>
				{React.cloneElement(child, {
					className: "input-list__item",
				})}
			</>
		);
	});

	return <div className="input-list">{newProp}</div>;
}

export default InputList;
