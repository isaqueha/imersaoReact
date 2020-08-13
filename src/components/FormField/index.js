import React from "react";

function FormField({ type, label, value, name, onChange }) {
	return (
		<div>
			<label>
				{label} : 
				<input
					type={type}
					value={value}
					name={name}
					onChange={onChange}
				/>
			</label>
		</div>
	)
}

export default FormField;