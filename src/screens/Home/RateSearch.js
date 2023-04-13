import {ActivityIndicator,ScrollView,ToastAndroid,Share, Text, View,Modal,Pressable, Image, StyleSheet,Dimensions,TextInput , TouchableOpacity,Linking, TouchableWithoutFeedback, Keyboard, Alert, YellowBox} from 'react-native';
 
import React,{ useState, useEffect, useRef } from 'react';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import Header from "./components/Header"
  import Slider from "./components/Slider"
  import HTML from "react-native-render-html";
  import { useWindowDimensions } from 'react-native';
  import { WebView } from 'react-native-webview';

 const OnboardingScreen = ({navigation}) => {
    const [visible, setVisible] = useState(false);
    const [isSpeaner, setIsSpeaner] = useState(true);
    const { width } = useWindowDimensions();
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
      
    const _gotToLogin =()=>{
        navigation.navigate('SelectAgent')
      }
      const _gotToHome =()=>{
        navigation.navigate('TabScreen')
      }
      setTimeout(function(){ 
        setIsSpeaner(false)
      }, 13000);
      var result =  'https://thefinancials.com/TabbedWidgets/ShowWidgetIFRAME.aspx?code=document.write(%22%3Ciframe%20src=%27https%3a%2f%2fwww.thefinancials.com%2fWidgets%2fShowWidget.aspx%3fid%3d0274105714%26width%3d290%26height%3d410%27%20width=%27295%27%20height=%27465%27%20scrolling=%27no%27%20marginheight=%270%27%20marginwidth=%270%27%20hspace=%270%27%20vspace=%270%27%20frameborder=%27no%27%20allowtransparency=%27true%27%3E%3C/iframe%3E%22)'
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
         <Text style={{fontSize:22,alignSelf:'center',color:'#62a0f7',fontWeight:'bold'}}> Rate Search</Text>

         <WebView
 
 source={{ uri: "https://www.theFinancials.com/Widgets/ShowWidget.aspx?id=0274105714&width=850&height=800&mode=iframe" }} 
 
        onLoad={console.log('lodded')}
        onLoadStart ={()=> setVisible(true)}
        onLoadEnd ={()=> setVisible(false)}

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