import {ToastAndroid,Share, Text, View,Modal,Pressable, Image, StyleSheet,Dimensions,TextInput , TouchableOpacity,Linking, TouchableWithoutFeedback, Keyboard, Alert, YellowBox} from 'react-native';
 
import AsyncStorage from '@react-native-async-storage/async-storage'; 

import React,{useEffect,useState} from 'react';


import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import Header from "./components/Header"
  import Slider from "./components/Slider"

 const OnboardingScreen = ({navigation}) => {
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [Linkedin, setLinkedin] = useState('');
  const [instagram, setInstagram] = useState('');
  const [youtube, setYoutube] = useState('');
  const [skype, setSkype] = useState('');
  const [pinterest, setPinterest] = useState('');
  

  useEffect(() => {
    getCalculation()
  })
  const getCalculation = async () => {
    try {

const resultOne = await AsyncStorage.getItem('@agent_info')

var ok = JSON.parse(resultOne)
 
setFacebook(ok.OtherField1)
setPinterest(ok.OtherField3)
setLinkedin(ok.OtherField4)
setInstagram(ok.OtherField5)
setYoutube(ok.OtherField9)
setSkype(ok.OtherField8)
 

     } catch(e) {

      // error reading value
    }
  }
  
    const _gotToLogin =()=>{
        navigation.navigate('SelectAgent')
      }
      const _gotToHome =()=>{
        navigation.navigate('TabScreen')
      }
  return   (
    <View style={styles.screenContainer}>
      
        <View style={{height:  Platform.OS === 'ios' ? '15%' : '10%',paddingTop:Platform.OS === 'ios' ? 45 : 5,width:'100%',alignSelf:'center',backgroundColor:'white'}}>
                <Header
                 back
                 navPath='TabScreen'
                 />
            </View>
            <View  >
         <View style={styles.Row}>
           
        <View style={{width:'100%'}}>
            <View style={{padding:10,flexDirection:'row'}}>
               
                <TouchableOpacity style={styles.shareBtn}
                onPress={() => Linking.openURL(facebook)}
                >
                <Image
                style={{height:40,width:40}} resizeMode='cover'
                source={require('../../assets/icons/facebook-1.png')}
                />  
    <Text style={styles.textTitle}>Share on Facebook</Text>
                </TouchableOpacity>
                 
                <TouchableOpacity style={styles.shareBtn}
                 onPress={() => Linking.openURL(twitter)}>
                <Image
                style={{height:40,width:40}} resizeMode='cover'
                source={require('../../assets/icons/twitter.png')}
                />  
    <Text style={styles.textTitle}>Share on Twitter</Text>
                </TouchableOpacity>
            </View>


            <View style={{paddingRight:10,paddingLeft:10,flexDirection:'row'}}>
               
               <TouchableOpacity style={styles.shareBtn}
                onPress={() => Linking.openURL(pinterest)}
               >
               <Image
               style={{height:40,width:40}} resizeMode='cover'
               source={require('../../assets/icons/pinterest.png')}
               />  
   <Text style={styles.textTitle}>Share on Pinterest</Text>
               </TouchableOpacity>
                
               <TouchableOpacity style={styles.shareBtn}
                onPress={() => Linking.openURL(Linkedin)}
               >
               <Image
               style={{height:40,width:40}} resizeMode='cover'
               source={require('../../assets/icons/linkedin.png')}
               />  
   <Text style={styles.textTitle}>Share on Linkedin</Text>
               </TouchableOpacity>
           </View>

           <View style={{paddingTop:10,paddingRight:10,paddingLeft:10,flexDirection:'row'}}>
               
               <TouchableOpacity style={styles.shareBtn}
                onPress={() => Linking.openURL(instagram)}
               >
               <Image
               style={{height:40,width:40}} resizeMode='cover'
               source={require('../../assets/icons/insta.png')}
               />  
   <Text style={styles.textTitle}>Share on Instagram</Text>
               </TouchableOpacity>
                
               <TouchableOpacity style={styles.shareBtn}
                onPress={() => Linking.openURL(youtube)}
               >
               <Image
               style={{height:40,width:40}} resizeMode='cover'
               source={require('../../assets/icons/google.png')}
               />  
   <Text style={styles.textTitle}>Share on Youtube</Text>
               </TouchableOpacity>
           </View>

           <View style={{padding:10,flexDirection:'row'}}>
               
               <TouchableOpacity style={styles.shareBtn}
                onPress={() => Linking.openURL(skype)}
               >
               <Image
               style={{height:40,width:40}} resizeMode='cover'
               source={require('../../assets/icons/skype.png')}
               />  
   <Text style={styles.textTitle}>Share on Skype</Text>
               </TouchableOpacity>
                
               <TouchableOpacity style={{padding:10,marginLeft:5,marginRight:5,height:100,width:'45%',borderWidth:2,borderColor:'#ffffff',borderRadius:12,alignItems:'center'}}>
              
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
    flex:1,
     alignItems:'center'
  }, 
  textTitle:{
    fontSize:responsiveFontSize(2.2),
    color:'black'
  },
  Row:{
    width:'100%',
    height:'100%',
    alignSelf:'center',
    backgroundColor:'white'
  },
  shareBtn:{
    padding:10,
    marginLeft:5,
    marginRight:5,
    height:100,
    width:'48%',
    borderWidth:2,
    borderColor:'#62a0f7',
    borderRadius:12,
    alignItems:'center'
  }
}) 
export default OnboardingScreen;