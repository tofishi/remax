import {ActivityIndicator,ScrollView,ToastAndroid,Share, Text, View,Modal,Pressable, Image, StyleSheet,Dimensions,TextInput , TouchableOpacity,Linking, TouchableWithoutFeedback, Keyboard, Alert, YellowBox} from 'react-native';
 
import React,{ useState, useEffect, useCallback, useRef } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage'; 
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import Header from "./components/Header"
  import Slider from "./components/Slider"
  import HTML from "react-native-render-html";
  import { useWindowDimensions } from 'react-native';
  import { useNavigation } from '@react-navigation/native';

 const OnboardingScreen = () => {
  const [isSpeaner, setIsSpeaner] = useState(true);

  const navigation = useNavigation();
    const { width } = useWindowDimensions();
    const [agentId, setAgentId] = useState('');
    const [CompanyID, setCompanyID] = useState('');
    const [loanProgram, setLoanPrgram] = useState('');
    
    const tagsStyles = {
        body: {
          whiteSpace: 'normal',
          color: 'gray'
        },
        p: {
          color: 'black',
          fontSize:18,
        }
      };

      useEffect(() => {
        getCalculation()
      })
      const getCalculation = async () => {
        try {
             
            const resultOne = await AsyncStorage.getItem('@agent_info')
            const resultTwo = await AsyncStorage.getItem('@user_id')
            var ok = JSON.parse(resultOne)
             setAgentId(ok.AgentID)
            setCompanyID(ok.CompanyID)
  
            homeValuation()
         } catch(e) {
  
          // error reading value
        }
      }

       
    const homeValuation = () => {
  
 
      const requestOptions = {
       method: 'POST',
       headers: { 
         
         Accept: 'application/json',
         'Content-Type': 'application/json',
         'Authorization': 'Bearer VaNX7DyjLkSCtZjBNTeHrVuVyD8TCP',
       },
       body: JSON.stringify({
      //   CompanyID: '62',
      AgentID: agentId,
     
        })
    };
    fetch('https://api.newhomesinorlando.net/getLoanProgram', requestOptions)
       .then(async response => {
           const isJson = response.headers.get('content-type')?.includes('application/json');
           const data = isJson && await response.json();
           
           // setAgnetData(agnetData)
           setLoanPrgram(data.DataLoanProgram[0].Description)
 
           // check for error response
           if (!response.ok) {
               // get error message from body or default to response status
               const error = (data && data.message) || response.status;
               return Promise.reject(error);
           }else{
            setIsSpeaner(false)
              var response = data.result
         
           }
           
        
       })
       .catch(error => {
     
          //  this.setState({ errorMessage: error.toString() });
       });
    };

      
    const _gotToLogin =()=>{
        navigation.navigate('SelectAgent')
      }
      const _gotToHome =()=>{
        navigation.navigate('TabScreen')
      }
    
  return   (
    <View style={styles.screenContainer}>
         {isSpeaner && 
           <View style={{position:'absolute',alignSelf:'center',zIndex: 2,height:'100%',width:'100%',backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
          <ActivityIndicator size="large" color="#fff" style={{top:'50%'}}   />
          </View>
 }
        <View style={{width:'100%',height:'99%',backgroundColor:'white',alignSelf:'center'}}>
        <View style={{height:  Platform.OS === 'ios' ? '15%' : '10%',paddingTop:Platform.OS === 'ios' ? 45 : 5,width:'100%',alignSelf:'center',backgroundColor:'white'}}>
                <Header
                 back
                 navPath='TabScreen'
                 />
            </View>
         <View style={{width:'100%',height:'100%',alignSelf:'center',backgroundColor:'white'}}>
         <Text style={{fontSize:22,alignSelf:'center',color:'#62a0f7',fontWeight:'bold'}}> Loan Programs</Text>

         <ScrollView style={{width:'90%',height:'100%',alignSelf:'center'}}>
       
 
<HTML      
contentWidth={width}
source={{html: loanProgram}}
tagsStyles={tagsStyles}
/>

        
        </ScrollView>
        </View>
        </View>
    </View>
     
)
}
const styles= StyleSheet.create({
  screenContainer:{
    backgroundColor:'white',
    height:'100%',
    width:'100%',
    alignSelf:'center',
  
  },
  textTitle:{
    fontSize:22,
    color:'black'
  } 
}) 
export default OnboardingScreen;