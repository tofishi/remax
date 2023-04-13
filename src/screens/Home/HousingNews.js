import {FlatList,ActivityIndicator,ScrollView,ToastAndroid,Share, Text, View,Modal,Pressable, Image, StyleSheet,Dimensions,TextInput , TouchableOpacity,Linking, TouchableWithoutFeedback, Keyboard, Alert, YellowBox} from 'react-native';
 
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
  const [isSpeaner, setIsSpeaner] = useState(false);
  const [visible, setVisible] = useState(false);

  const navigation = useNavigation();
    const { width } = useWindowDimensions();
    const [agentId, setAgentId] = useState('');
    const [CompanyID, setCompanyID] = useState('');
    const [xml, setXml] = useState('');
    const [loanProgram, setLoanPrgram] = useState('');
    
    const tagsStyles = {
        body: {
          whiteSpace: 'normal',
          color: 'gray'
        },
        p: {
          color: 'black',
          fontSize:22,
        }
      };

      useEffect(() => {
        homeValuation()
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

       
  //   const homeValuation = () => {
  //  const requestOptions = {
  //    method: 'get',
  //    headers: { 
       
  //      Accept: 'application/json',
  //      'Content-Type': 'application/json',
  //      'Authorization': 'Bearer VaNX7DyjLkSCtZjBNTeHrVuVyD8TCP',
  //    },
  //    body: JSON.stringify({ company_code: 'home-1st-lending'})
  // };
  // fetch('https://api.newhomesinorlando.net/ok', requestOptions)
  //    .then(async response => {
  //        const isJson = response.headers.get('content-type')?.includes('application/json');
  //        const data = isJson && await response.json();
  //        console.log(data)
  //        // check for error response
        
      
        
  //    })
  //    .catch(error => {
   
  //        console.log('no');
  //    });

     const homeValuation = async () => {
      const resp = await fetch("https://api.newhomesinorlando.net/ok");
      const data = await resp.json();
      // console.log();
      setXml(data.channel.item)
      // setLoading(false);
    };
  
    // };

    

      
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
      
         <Text style={{fontSize:22,alignSelf:'center',color:'#62a0f7',fontWeight:'bold'}}> Housing News</Text>
         <FlatList
              data={xml}
              renderItem={({ item, index }) => { 
            
                return (
                  <TouchableOpacity  onPress={() => Linking.openURL(item.link)} >
                  <View style={{  height: 148, backgroundColor: 'white',   borderBottomWidth:1,borderBottomColor:'gray', padding: 5, marginTop: 5,paddingLeft:10,paddingRight:10}} >
                    <Text numberOfLines={2}  style={{fontSize:20,color:'black',fontWeight:'bold'}}>{item.title} </Text>
                    <Text numberOfLines={3}  style={{color:'black',fontSize:18,height:65}}>{item.description} </Text>
                    <Text style={{color:'gray',fontSize:15,marginTop:5}}>{item.pubDate} </Text>
  </View> 
  </TouchableOpacity>
  )
        
              }}

              />  
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