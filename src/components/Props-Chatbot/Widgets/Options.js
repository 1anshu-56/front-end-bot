import React,{useState} from 'react';
import './Options.css'


const Options=(props)=>{

	const [isVisible, setVisible]=useState(true);

	const Options=[
		{
			text:"Got it",
			handler: ()=>{
				console.log(props.actionProvider)
				props.actionProvider.handleGotIt()
				setVisible(false);
			},

			id: 1,
		},
	];

	const buttons= Options.map(
		(option) =>
			isVisible && (

			<button 
				key={option.id}
				onClick={option.handler}
				className="option-btn"
				>
				{option.text}
			</button>
			)
	);

	return <div className="options-container">{buttons}</div>;
}

export default Options;
