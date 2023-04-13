import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from "react-native";
import Slideshow from "react-native-image-slider-show";
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const dataSource = [
  {
    title: "Burger 1 Burger 1 Burger 1 Burger 1 Burger 1",
    // caption: "Original  Cheezy Meat",
    url:
    require('./banner-first.png')
  },
  {
    title: "Burger 1 Burger 1 Burger 1 Burger 1 Burger 1",
    // caption: "100% Original Beef",
    url:
    require('./banner-second.png')
  },
  {
    title: "Burger 1 Burger 1 Burger 1 Burger 1 Burger 1",
    // caption: "Mouthfull Of Happiness",
    url:
    require('./banner-third.png')
  },
  {
    title: "Burger 1 Burger 1 Burger 1 Burger 1 Burger 1",
    // caption: "Mouthfull Of Happiness",
    url:
    require('./banner-fourth.png')
  },
  {
    title: "Burger 1 Burger 1 Burger 1 Burger 1 Burger 1",
    // caption: "Mouthfull Of Happiness",
    url:
    require('./banner-fifth.png')
  },
  {
    title: "Burger 1 Burger 1 Burger 1 Burger 1 Burger 1",
    // caption: "Mouthfull Of Happiness",
    url:
    require('./banner-sixth.png')
  }
];

const Slider = () => {
  const [position, setPosition] = useState(0)
  const [agentId, setAgentId] = useState(0)
  const [sliderData, setSliderData] = useState([]);
  const dataSourceR = sliderData


  
  useEffect(() => {
    getAgentInfo()
  },[])
  const getAgentInfo = async () => {
    try {
         
        const resultOne = await AsyncStorage.getItem('@agent_info')
        const resultTwo = await AsyncStorage.getItem('@user_id')
        var ok = JSON.parse(resultOne)
          setAgentId(ok.AgentID)
  
          getMoviesFromApi(ok.AgentID)
     } catch(e) {

      // error reading value
    }
  }
  
  const getMoviesFromApi = (idS) => {
    
    const requestOptions = {
     method: 'POST',
     headers: { 
       
       Accept: 'application/json',
       'Content-Type': 'application/json',
       'Authorization': 'Bearer VaNX7DyjLkSCtZjBNTeHrVuVyD8TCP',
     },
     body: JSON.stringify({ AgentID: idS})
  };
  fetch('https://api.newhomesinorlando.net/bannerListReact', requestOptions)
     .then(async response => {
         const isJson = response.headers.get('content-type')?.includes('application/json');
         const data = isJson && await response.json();
   
         // check for error response
         if (!response.ok) {
             // get error message from body or default to response status
             const error = (data && data.message) || response.status;
             return Promise.reject(error);
         }
      setSliderData(data.data) 
      
     })
     .catch(error => {
   
         this.setState({ errorMessage: error.toString() });
     });
  };
  
  useEffect(()=>{
    const toggle = setInterval(() => {
      setPosition(position === dataSource.length - 1 ? 0 : position + 1);
    }, 5000);

    return () => clearInterval(toggle);
  })
  // console.log(dataSourceR)
  return (
    <View>
      <Slideshow
// captionStyle={{color:'white',fontSize:26,backgroundColor:'rgba(0,0,0,0.2)'}}
      titleStyle={{color:'white',fontSize:20,backgroundColor:'rgba(0,0,0,0.2)',top:22,}}
      indicatorColor='transparent'
      position={position} dataSource={dataSourceR} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Slider;
