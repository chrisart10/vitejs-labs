/* eslint-disable react/prop-types */
import React from "react";

function FormList({ onChange }) {
	function InputList({ children }) {
		console.log("-----------------------InputList-----------------------");
		const handlerOnChange = (e) => {
			const { name, value } = e.target;
			onChange({ [name]: value });
		};

		const newProp = React.Children.map(children, (child) => {
			console.log(child);

			return (
				<>
					<label htmlFor={child.props.name}>{child.props.name}</label>
					{React.cloneElement(child, {
						className: "input-list__item",
						onChange: handlerOnChange,
					})}
				</>
			);
		});

		return <div className="input-list">{newProp}</div>;
	}
	return [InputList];
}

export default FormList;
