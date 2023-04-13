import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from "react-native";
import Slideshow from "react-native-image-slider-show";

const dataSource = [
  {
    // title: "Burger 1",
    // caption: "Original  Cheezy Meat",
    url:
    require('./banner-first.png')
  },
  {
    // title: "Burger 2",
    // caption: "100% Original Beef",
    url:
    require('./banner-second.png')
  },
  {
    // title: "Burger 3",
    // caption: "Mouthfull Of Happiness",
    url:
    require('./banner-third.png')
  },
  {
    // title: "Burger 3",
    // caption: "Mouthfull Of Happiness",
    url:
    require('./banner-fourth.png')
  },
  {
    // title: "Burger 3",
    // caption: "Mouthfull Of Happiness",
    url:
    require('./banner-fifth.png')
  },
  {
    // title: "Burger 3",
    // caption: "Mouthfull Of Happiness",
    url:
    require('./banner-sixth.png')
  }
];

const Slider = () => {


  const [position, setPosition] = useState(0)

  const [agentId, setAgentId] = useState('');

  useEffect(() => {
    getBanner()
    getCalculation()
  })
  const getCalculation = async () => {
    try {
         
        const resultOne = await AsyncStorage.getItem('@agent_info')
        const resultTwo = await AsyncStorage.getItem('@user_id')
        var ok = JSON.parse(resultOne)
         setAgentId(ok.AgentID)

        homeValuation()
     } catch(e) {

      // error reading value
    }
  }

    
const getBanner = () => {


  const requestOptions = {
   method: 'POST',
   headers: { 
     
     Accept: 'application/json',
     'Content-Type': 'application/json',
     'Authorization': 'Bearer VaNX7DyjLkSCtZjBNTeHrVuVyD8TCP',
   },
   body: JSON.stringify({
  //   CompanyID: '62',
  status:'',
  AgentID:62,
  session_id:'',
  user_login_type:'',
 
    })
};
fetch('https://api.newhomesinorlando.net/bannerReactList', requestOptions)
   .then(async response => {
       const isJson = response.headers.get('content-type')?.includes('application/json');
       const data = isJson && await response.json();
console.log(data)           
       // setAgnetData(agnetData)
      //  setLoanPrgram(data.DataDocsRequired[0].Description)
       // check for error response
       if (!response.ok) {
           // get error message from body or default to response status
           const error = (data && data.message) || response.status;
           return Promise.reject(error);
       }else{
          var response = data.result
          if(response===1){
            
          }else{
          
          }
       }
       
    
   })
   .catch(error => {
 
      //  this.setState({ errorMessage: error.toString() });
   });
};

  useEffect(()=>{
    const toggle = setInterval(() => {
      setPosition(position === dataSource.length - 1 ? 0 : position + 1);
    }, 5000);

    return () => clearInterval(toggle);
  })
  
  return (
    <View>
      <Slideshow   position={position} dataSource={dataSource} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Slider;
