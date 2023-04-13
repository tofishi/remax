import {ScrollView,ToastAndroid,Share, Text, View,Modal,Pressable, Image, StyleSheet,Dimensions,TextInput , TouchableOpacity,Linking, TouchableWithoutFeedback, Keyboard, Alert, YellowBox} from 'react-native';
 
import React,{ useState, useEffect, useCallback, useRef } from 'react';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import AsyncStorage from '@react-native-async-storage/async-storage'; 

  import Header from "./components/Header"
  import Slider from "./components/Slider"
  import { useNavigation } from '@react-navigation/native';
  import { useSelector, useDispatch } from 'react-redux';

  import {
    setCompanyLogo,setLoanAppUrl
 } from'../Mcfr/redux/actions';
 const OnboardingScreen = () => {
  const { companyLogo,loanAppUrl
  } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
    const navigation = useNavigation();
    const [appUrl, setAppUrl] = useState('');

    const _gotToHomeValuation =()=>{
        navigation.navigate('HomeValuation')
      }
      const _gotToPreQual =()=>{
        navigation.navigate('PreQual')
      }
      const _gotHousingNews =()=>{
         navigation.navigate('HousingNews')
      }
      const _gotToDocsRequiredl =()=>{
        navigation.navigate('DocsRequired')
      }
      const _gotToLoanPrograms =()=>{
        navigation.navigate('LoanPrograms')
      }
      const _gotRateSearch =()=>{
        navigation.navigate('RateSearch')
      }
      useEffect(() => {
        getCalculation()
      }, [])
      const getCalculation = async () => {
        try {
                const url = await AsyncStorage.getItem('@loanAppUrl')
              
                setAppUrl(url)
                
 
         } catch(e) {
  
          // error reading value
        }
      }
      
 
  return   (
    <View style={styles.screenContainer}>
         <View style={{  height:  Platform.OS === 'ios' ? '15%' : '10%',paddingTop:Platform.OS === 'ios' ? 45 : 5,width:'100%',alignSelf:'center',backgroundColor:'white'}}>
                <Header  />
            </View>
        <View style={{width:'100%',marginTop:0}}>
        <ScrollView style={{width:'95%',height:'100%',alignSelf:'center'}}>

        <Slider />

            <View style={{padding:10,justifyContent:'center',flexDirection:'row'}}>
               
                <TouchableOpacity style={styles.tabCol}
                onPress={() => _gotToHomeValuation()}
                >
                <Image
                style={styles.img} resizeMode='contain'
                source={require('../../assets/icons/Group_300.png')}
                />  
    <Text style={styles.boxText}>Home{"\n"}Valuation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabCol}
                onPress={() => navigation.navigate('Mcfr')}
                >
                <Image
                style={styles.img} resizeMode='contain'
                source={require('../../assets/icons/Group_301.png')}
                />  
                    <Text style={styles.boxText}>Mortgage{"\n"}Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabCol}
                     onPress={() => _gotToPreQual()}
                >
                <Image
                style={styles.img} resizeMode='contain'
                source={require('../../assets/icons/pre_qualify.png')}
                />  
    <Text style={styles.boxText}>Pre-Qual</Text>
                </TouchableOpacity>
            </View>


            {/*  */}
            <View style={{paddingRight:10,paddingLeft:10,justifyContent:'center',flexDirection:'row',}}>
               
               <TouchableOpacity style={styles.tabCol}
                onPress={() => _gotToLoanPrograms()}
               >
               <Image
               style={styles.img} resizeMode='contain'
               source={require('../../assets/icons/loan_program.png')}
               />  
   <Text style={styles.boxText}>Loan{"\n"}Programs</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.tabCol}
                onPress={() => _gotToDocsRequiredl()}
               >
               <Image
               style={styles.img} resizeMode='contain'
               source={require('../../assets/icons/docs_required.png')}
               />  
                   <Text style={styles.boxText}>Docs{"\n"}Required</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.tabCol}
                  onPress={() => Linking.openURL(appUrl)}
               >
               <Image
               style={styles.img} resizeMode='contain'
               source={require('../../assets/icons/loan_app.png')}
               />  
   <Text style={styles.boxText}>Loan App</Text>
               </TouchableOpacity>
           </View>
           <View style={{paddingBottom:100,padding:10,justifyContent:'center',flexDirection:'row'}}>
               
               <TouchableOpacity style={styles.tabCol}
                 onPress={() => _gotHousingNews()}>
               <Image
               style={styles.img} resizeMode='contain'
               source={require('../../assets/icons/housing_news.png')}
               />  
   <Text style={styles.boxText}>Housing{"\n"}News</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.tabCol}
                onPress={() => _gotRateSearch()}
               >
               <Image
               style={styles.img} resizeMode='contain'
               source={require('../../assets/icons/housing_news.png')}
               />  
                   <Text style={styles.boxText}>Rates</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.tabCol}>
               <Image
               style={styles.img} resizeMode='contain'
               source={require('../../assets/icons/pre_qualify.png')}
               />  
   <Text style={styles.boxText}>Comming{'\n'} Soon</Text>
               </TouchableOpacity>
           </View>
        </ScrollView>
        </View>
         </View>
   
     
)
}
const styles= StyleSheet.create({
    screenContainer:{
        backgroundColor:'#f8f8f8',
        flex:1,
         alignItems:'center'
      }, 
      tabCol:{
        marginLeft:5,
        marginRight:5,
        height:100,
        width:'32%',
        borderWidth:2,
        borderColor:'#62a0f7',
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'

      },
      img:{
        height:40,
        width:40
      },
      boxText:{
        textAlign:'center',
        color:'black',
        fontSize:responsiveFontSize(2)
      }
}) 
export default OnboardingScreen;