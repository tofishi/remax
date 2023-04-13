import {ToastAndroid,Share, Text, View,Modal,Pressable, Image, StyleSheet,Dimensions,TextInput , TouchableOpacity,Linking, TouchableWithoutFeedback, Keyboard, Alert, YellowBox} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import React, { useState, useEffect } from 'react';

 
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import { useNavigation } from '@react-navigation/native';
  import { useSelector, useDispatch } from 'react-redux';

 
import {
setCompanyLogo 
} from'../../Mcfr/redux/actions';
 const OnboardingScreen = ({back,navPath}) => {
  const { companyLogo
  } = useSelector(state => state.userReducer);
const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const navigation = useNavigation();

    const _gotToLogin =()=>{
        navigation.navigate('SelectAgent')
      }
      
      useEffect(() => {
        getCalculation()
      })
      const getCalculation = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@agent_info')
          var ok = JSON.parse(jsonValue)
if(ok.AgentName){
  setName(ok.AgentName)

}else{
  setName(ok.RealtorName)
}

          setPhone(ok.Phone)
          setProfileImage(ok.profilePhoto)
            // console.log(jsonValue)
         } catch(e) {
          // error reading value
        }
      }
      
      const _gotToBack =()=>{
      
        navigation.navigate(navPath)
      }

  return   ( 
    <View style={styles.header}>
          <View style={{flexDirection:'row'}}>
          <View style={{flexDirection:'row'}}>
{back &&
          <TouchableOpacity  onPress={() => _gotToBack()} style={{marginTop:10,paddingRight:5}} >
      <Image  
              style={{height:30,width:30}} resizeMode='cover'
              source={require('../../../assets/icons/left-icon.png')}
              />  
              </TouchableOpacity>
            }     
          <Image
                  style={{height:50,width:50,borderRadius:10}}
                  source={{uri:profileImage ? profileImage : null}}
                  />
            </View>
                  <View style={{marginLeft:10}}>
            <Text style={{fontSize:responsiveFontSize(2.5),color:'#62a0f7'}}>{name}</Text>
            <Text style={{fontSize:responsiveFontSize(2.2),color:'#000000'}}>{phone}</Text>
            </View>
          </View>
          
          <View style={{backgroundColor:'white',height:45,width:75}}>

          <Image
            resizeMode='contain'
                  style={{height:'100%',width:'100%'}}
                  // source={require('../../../assets/logos/Home-1st-Lending.png')}
                  source={{uri:companyLogo ? companyLogo : null}}
                  />
          </View>
    </View>
     
)
}
const styles= StyleSheet.create({
    header:{
    backgroundColor:'white',
    height:'100%',
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:'lightgray'
  
  }, 
}) 
export default OnboardingScreen;