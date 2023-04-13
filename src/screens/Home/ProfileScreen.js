 import {ToastAndroid,BackHandler,Share, Text, View,Modal,Pressable, Image, StyleSheet,Dimensions,TextInput , TouchableOpacity,Linking, TouchableWithoutFeedback, Keyboard, Alert, YellowBox} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

import React,{useEffect,useState} from 'react';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import Header from "./components/Header"
  import Slider from "./components/Slider"
import { setCompanyLogo } from '../Mcfr/redux/actions';

 const OnboardingScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [website, setWebsite] = useState('');
  const [companyName, setCompanyName] = useState('');
 

   

  const mailLink = 'mailto:'+email+'?subject=Home 1st Lending &body=Home 1st Lending  '

    const _gotToLogin =()=>{
        navigation.navigate('SelectAgent')
      }
      const _gotToHome =()=>{
        navigation.navigate('TabScreen')
      }

      useEffect(() => {
        getCalculation()
      })
      const getCalculation = async () => {
        try {
 
const resultOne = await AsyncStorage.getItem('@agent_info')

var ok = JSON.parse(resultOne)
console.log(ok)
setPhone(ok.Phone)
setEmail(ok.EmailAddress)
setAddress(ok.Address)
setCity(ok.City)
setState(ok.State)
setZipCode(ok.ZipCode)
setCountry(ok.Country)
setWebsite(ok.OtherField7)

         } catch(e) {
  
          // error reading value
        }
      }
      
      const actionLogout = ()  => {
        Alert.alert(
          'Logout',
          'Are you sure you want to Logout?',
          [
            {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
            {text: 'YES', onPress: () => gotToOn()},
          ]
        );
      
      }
      

         const gotToOn = async () => {

          try {
            await AsyncStorage.setItem('@user_id', 'logout')
            // navigation.navigate('OnboardingScreen')
            BackHandler.exitApp()
          } catch (e) {
            // saving error
          }
    }

     
      const clickToCall = () =>{
        Linking.openURL(`tel:${phone}`)

      }
      const clickToWebsite = () =>{
         Linking.openURL(website)

      }

      const clickToMap = () =>{
        var link = 'https://www.google.com/maps/place/'+  city +' '+ state +' '+ zipCode +' '+ country
         Linking.openURL(link)

      }
      const onShare = async () => {
        try {
          const result = await Share.share({
            message:
            'Share '
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
          }
        } catch (error) {
          alert(error.message);
        }
      };
     



      useEffect(() => { 
        getMoviesFromApi();
          }, []); 
 
         
        

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
console.log(data)
setAddress(data.result.address)
setCompanyName(data.result.companyName)

console.log(data.result.zipCode)
  
     })
     .catch(error => {
   
         this.setState({ errorMessage: error.toString() });
     });
  };
  
  return   (
    <View style={styles.screenContainer}>
        <View style={{width:'100%',height:'99%',backgroundColor:'white',alignSelf:'center'}}>
        
        <View style={{height:  Platform.OS === 'ios' ? '15%' : '10%',paddingTop:Platform.OS === 'ios' ? 45 : 5,width:'100%',alignSelf:'center',backgroundColor:'white'}}>
                <Header
                 back
                 navPath='TabScreen'
                 />
            </View>
         <View style={{width:'100%',height:'100%',alignSelf:'center',backgroundColor:'white'}}>
           
        <View style={{width:'100%'}}>
            <View style={{padding:10,flexDirection:'row'}}>
               
                <TouchableOpacity style={styles.box}
                 onPress={() => clickToCall()}
                >
                <Image
                style={{height:35,width:35}} resizeMode='contain'
                source={require('../../assets/icons/call-1.png')}
                />  
    <Text style={styles.textTitle}>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}
              onPress={() => Linking.openURL(mailLink)  }
                >
                <Image
                style={{height:35,width:35}} resizeMode='contain'
                source={require('../../assets/icons/mail.png')}
                />  
                    <Text style={styles.textTitle}>Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}
                 onPress={(text)=>onShare(text)}  >
                <Image
                style={{height:35,width:35}} resizeMode='contain'
                source={require('../../assets/icons/text.png')}
                />  
    <Text style={styles.textTitle}>Text</Text>
                </TouchableOpacity>
            </View>


            {/*  */}
            <View style={{paddingLeft:10,paddingRight:10,flexDirection:'row'}}>
               
               <TouchableOpacity style={styles.box}
                onPress={() => clickToMap()}
               >
               <Image
               style={{height:35,width:35}} resizeMode='contain'
               source={require('../../assets/icons/map-1.png')}
               />  
   <Text style={styles.textTitle}>Map</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.box}
                           onPress={() => clickToWebsite()}
               >
               <Image
               style={{height:35,width:35}} resizeMode='contain'
               source={require('../../assets/icons/website.png')}
               />  
                   <Text style={styles.textTitle}>Website</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.box}
                 onPress={(text)=>onShare(text)}>
               <Image
               style={{height:35,width:35}} resizeMode='contain'
               source={require('../../assets/icons/refer-to-friend-1.png')}
               />  
   <Text style={styles.textTitle}>Refer to</Text>
               </TouchableOpacity>
           </View>
 
        </View>

        <View style={{alignItems:'center',marginTop:30}}>
          <TouchableOpacity style={styles.adressBtn} onPress={() => clickToMap()} >
           
   <Text style={{textAlign:'center',fontSize:responsiveFontSize(2.5),color:'black'}}>{companyName}</Text>
   <Text style={styles.textTitle}>{address}</Text>
   <Text style={styles.textTitle}>{city} {state} {zipCode}</Text>
               </TouchableOpacity>
          </View>


          <View style={{ padding:10,alignItems:'center'}}>
               
           
                
               <TouchableOpacity style={{padding:10,marginLeft:5,marginRight:5,height:100,width:'45%',borderWidth:2,borderColor:'#62a0f7',borderRadius:12,alignItems:'center'}}
                 onPress={() => actionLogout()} 
               >
               <Image
               style={{height:45,width:40}} resizeMode='contain'
               source={require('../../assets/icons/logout.png')}
              
               /> 
   <Text style={styles.textTitle}>Logout</Text>
               </TouchableOpacity>
           </View>
           <View style={{ padding:10,alignItems:'center'}}>
               
           
           
           </View>
        </View>
        
        </View>
             
        <TouchableOpacity style={{alignSelf:'center',position:'absolute',bottom:15,padding:5,marginLeft:5,marginRight:5,height:40,width:'35%',borderWidth:2,borderColor:'#62a0f7',borderRadius:12,alignItems:'center'}}
             onPress={() => Linking.openURL('https://www.mortgagecalculatorforrealtors.com/account-delete/')}
               >
               {/* <Image
               style={{height:35,width:35}} resizeMode='contain'
               source={require('../../assets/icons/delete-icon.png')}
              
               />  */}
   <Text style={styles.textTitle}>Delete Account</Text>
               </TouchableOpacity>
    </View>
     
)
}
const styles= StyleSheet.create({
  screenContainer:{
    backgroundColor:'#f8f8f8',
    height:'100%',
    width:'100%',
    alignSelf:'center',
  
  },
  textTitle:{
    fontSize:responsiveFontSize(2),
    color:'black'
  },
  adressBtn:{
    padding:10,
    padding:10,
    padding:5,
    marginLeft:5,
    marginRight:5,
    height:100,
    width:300,
    borderWidth:2,
    borderColor:'#62a0f7',
    borderRadius:12,
    alignItems:'center',
    backgroundColor:'white'
  },
  box:{
    padding:10,
    marginLeft:5,
    marginRight:5,
    height:90,
    width:'30%',
    borderWidth:2,
    borderColor:'#62a0f7',
    borderRadius:12,
    alignItems:'center',
    backgroundColor:'white'
  }
}) 
export default OnboardingScreen;