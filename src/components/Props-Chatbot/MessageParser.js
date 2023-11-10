import React from 'react';

const MessageParser= ({actions,state,children})=>{
	const parse= (message)=>{
		if(message.includes('hello')){
			actions.greet();
		}
		else
			actions.handleName(message);
	}

	return (
    	<div>
      	{React.Children.map(children, (child) => {
        	return React.cloneElement(child, {
          	parse: parse,
          	actions,
        	});
      	})}
    	</div>
	);
}

export default MessageParser
