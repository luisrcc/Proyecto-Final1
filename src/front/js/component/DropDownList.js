import React from "react";

const DropDownList = ({
	data,
	textField,
	idTextField,
	onChange,
	defaultItem,
	value,
	reference,
	titulo,
	nameDropDown
}) => {
	const renderOptions = data => {
		if (data !== null && data !== undefined) {
			return data.map((item, index) => (
				<option key={index + 1} value={item === 0 ? item : item.id}>
					{item[textField]}
				</option>
			));
		}
	};

	const addDefaultItem = defaultItem => {
		return (
			<option key={0} value={0}>
				{defaultItem.nombre}
			</option>
		);
	};

	return (
		<>
			<select
				id={nameDropDown}
				name={nameDropDown}
				className="form-control border-left-0 erase-outline"
				ref={reference}
				onChange={onChange}
				value={value}>
				{addDefaultItem(defaultItem)}
				{renderOptions(data)}
			</select>
		</>
	);
};

export default DropDownList;
