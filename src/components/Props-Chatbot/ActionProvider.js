import React from 'react';
import {createClientMessage} from 'react-chatbot-kit'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import {
  setSelectedDate,
  setSelectedTimeSlot,
  setUserName,
  setUserAge,
} from '../redux/enrollmentSlice'; 



const ActionProvider=({createChatBotMessage, setState,children})=>{
	
	let navigate = useNavigate();
  	const dispatch = useDispatch();

	const handleGotIt =()=>{
		const message=createClientMessage("Got It!");

		setState((prev)=>({
			...prev,
			messages:[...prev.messages,message],
		}));
	
		showCalenderOptions();
	}

	const showCalenderOptions= ()=>{
		const message= createChatBotMessage("Pick a Slot!",{
			widget: "calender",
		})

		setState((prev)=>({
			...prev,
			messages:[...prev.messages,message],
		}));

	}


  const selectDateHandler = (date) => {
    dispatch(setSelectedDate(date));
    console.log(date);
    selectTimeSlot();
  };

  const handleName = (name) => {
    const message = name;
    dispatch(setUserName(name));
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
    selectAge();
  };


	const selectTimeSlot = () => {
    const message = createChatBotMessage("Pick a time", {
      widget: "time",
    });   
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  const selectTimeSlotHandler = (time) => {
    dispatch(setSelectedTimeSlot(time));
    console.log(time);
    const message = createChatBotMessage("Enter Your Name");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  const selectAge = () => {
    const message = createChatBotMessage("Pick age!", {
      widget: "age",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  const handleAge = (inputage) => {
    dispatch(setUserAge(inputage));
    console.log(inputage);
    const message = createChatBotMessage("Thank you. In 5 seconds, bot will exit");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));

    setTimeout(() => {
      navigate("/lastpage")
    }, 5000);
  }


	return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
		handleGotIt,
		showCalenderOptions,
		selectAge,
		handleAge,
		selectTimeSlotHandler,
		selectTimeSlot,
		handleName,
		selectDateHandler,
	  },
        });
      })}
    </div>
  );
}

export default ActionProvider;
