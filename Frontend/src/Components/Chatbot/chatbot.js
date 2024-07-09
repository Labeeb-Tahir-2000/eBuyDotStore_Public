import React, { Component, useContext } from 'react';
import ChatBot from 'react-simple-chatbot';
import {StepsContext} from './stepsContext';
import { ThemeProvider } from 'styled-components';


function chatbot(){
  const [steps,setSteps] = useContext(StepsContext);

  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  const config ={
    width: "400px",
    height: "600px", 
  };

    return (
      <div style={{display:'flex',alignContent:'end',justifyContent:'end',paddingRight:'20px',marginTop:'100px'}}>
        <ThemeProvider theme={theme}>
          <ChatBot 
          headerTitle="eBuy.store Customer Chatbot"
          recognitionEnable={true}
          speechSynthesis={{ enable: true, lang: 'en' }}
            steps={steps}
            {...config}
          />
      </ThemeProvider>
      </div>
      
        );
      }

    export default chatbot;