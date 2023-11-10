import React from 'react';

import {createChatBotMessage} from 'react-chatbot-kit';

import Options from './Widgets/Options'
import Calender from './Widgets/Calender'
import TimeSlots from './Widgets/TimeSlots'
import AgeSelection from './Widgets/AgeSelector'

const config= {
	botName: "Ratham Bot",
	initialMessages: [
		createChatBotMessage("Hello, Welcome to Ratham Help chat",{
			widget: "options",
		}),
		
	],
	
	customComponents: {
		header: () => <div style={{fontWeight: "bolder", color: "darkblue", fontFamily: " American TypeWriter, serif", padding: "5px", borderRadius: "3px" }}>Ratham</div>,
		
	},

	widgets: [
		{
			widgetName: "options",
			widgetFunc: (props) => <Options {...props} />,
		},
	       {
      			widgetName: "calender", 
      			widgetFunc: (props) => <Calender {...props} />,
    		},
    		{
      			widgetName: "time", 
      			widgetFunc: (props) => <TimeSlots {...props} />,
    		},
    		{
      			widgetName: "age", 
      			widgetFunc: (props) => <AgeSelection {...props} />,
    		},

	],

	customStyles: {
    		botMessageBox: {
      			backgroundColor: 'purple',
    			},
    		chatButton: {
      			backgroundColor: 'purple',
   			 },
		  },
}

export default config;
