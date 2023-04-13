import React, {useState,useEffect} from 'react';
import {ActivityIndicator,useWindowDimensions ,ToastAndroid,Share, Text, View,Modal,Pressable, Image, StyleSheet,Dimensions,TextInput , TouchableOpacity,Linking, TouchableWithoutFeedback, Keyboard, Alert, YellowBox} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

import { WebView } from 'react-native-webview';
import HTML from "react-native-render-html";
import Spinners from './Home/components/Spinners'

import { useSelector, useDispatch } from 'react-redux';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import {
setCompanyLogo 
} from'./Mcfr/redux/actions';
 const OnboardingScreen = ({navigation}) => {


  const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      color: 'gray'
    },
    p: {
      color: 'black',
      fontSize:23,
      textAlign:'center'
    }
  };
  const { companyLogo
  } = useSelector(state => state.userReducer);
const dispatch = useDispatch();
  const [userId, setUserId] = useState('');
  const [isSpeaner, setIsSpeaner] = useState(true);
  
  const [companyInfo, setCompanyInfo] = useState([]);
  
  const [companyIntro, setCompanyIntro] = useState('Loading....');
  const { width } = useWindowDimensions();

    const _gotToLoginType =()=>{
 
if(userId==='logout'){
  navigation.navigate('LoginType')

}else if(userId===null){
  navigation.navigate('LoginType')

}else{
  navigation.navigate('TabScreen')

}

      }

      useEffect(() => { 
        getMoviesFromApi();
        getCalculation()
         }, []); 
 
         
        const getCalculation = async () => {
          try {
      const resultOne = await AsyncStorage.getItem('@user_id')
        setUserId(resultOne)
  
           } catch(e) {
    
            // error reading value
          }
        }

const getMoviesFromApi = () => {
  
 
    const requestOptions = {
     method: 'POST',
     headers: { 
       
       Accept: 'application/json',
       'Content-Type': 'application/json',
       'Authorization': 'Bearer VaNX7DyjLkSCtZjBNTeHrVuVyD8TCP',
     },
     body: JSON.stringify({ company_code: 'remax-innovations'})
  };
  fetch('https://api.newhomesinorlando.net/getCompanyInfo', requestOptions)
     .then(async response => {
         const isJson = response.headers.get('content-type')?.includes('application/json');
         const data = isJson && await response.json();
  
         // check for error response
         if (!response.ok) {
             // get error message from body or default to response status
             const error = (data && data.message) || response.status;
             return Promise.reject(error);
         }
 
         var  uniq_id =data['Data'] 
        const agnetData = data.result

        setCompanyInfo(agnetData)
        
        setCompanyIntro(agnetData.splash_text)
        setIsSpeaner(false)
        dispatch(setCompanyLogo(agnetData.logo))
  
     })
     .catch(error => {
   
         this.setState({ errorMessage: error.toString() });
     });
  };
  

  return   (
    <View style={styles.screenContainer}>
      


        <View style={{width:'100%',height:'99%',backgroundColor:'white',alignSelf:'center'}}>
     

        <View style={{width:'90%',height:'100%',alignSelf:'center',backgroundColor:'white'}}>
        <View style={{height:'30%',backgroundColor:'white'}}>
        </View>
        <View style={{height:'40%',backgroundColor:'white',alignItems:'center'}}>
        <Image
                  style={{height:150,width:200}}
                  resizeMode='contain'
                  source={{uri:companyLogo ? companyLogo : null}}
                
                  />
        <HTML      
              contentWidth={width}
              tagsStyles={tagsStyles}

        source={{html: companyIntro}}/>
 
       
        </View>
       
        <View style={{backgroundColor:'white',position:'absolute',bottom:5,width:'100%'}}>
        
        {/* <View style={{alignItems:'center'}}>
            <TouchableOpacity>
                <Text style={{color:'#62a0f7',fontSize:responsiveFontSize(2.5),alignSelf:'center'}}>{companyInfo.website}</Text>
            </TouchableOpacity>

        </View>  */}
        <View style={{justifyContent:'space-between',flexDirection:'row',marginTop:10}}>
            <TouchableOpacity>
                <Text style={{color:'#62a0f7',fontSize:responsiveFontSize(2.2)}}>v 1.01</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{color:'#62a0f7',fontSize:responsiveFontSize(2.2)}}>{companyInfo.website}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => _gotToLoginType()}>
            <Image
                  style={{height:30,width:40}}
                  source={require('../assets/icons/right.png')}
                  />
            </TouchableOpacity>
        </View>        
        </View>
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
}) 
export default OnboardingScreen;