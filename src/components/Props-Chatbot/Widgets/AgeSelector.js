import React from 'react';

const AgeSelection= (props)=>{

	const ageOptions= Array.from({length:50},(_,i)=>i+18);
	const handleChange= (event)=>{
		props.actionProvider.handleAge(event.target.value);
	};


	return (
	<div className="options-container">
		<select onChange={handleChange} className="option-btn">
		{
			ageOptions.map((age,index)=>(
				<option key={index} value={age}>
					{age}
				</option>
			))

		}
		</select>
		</div>
	);
}

export default AgeSelection;
