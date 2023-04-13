import {ToastAndroid,Share, Text, View,Modal,Pressable, Image, StyleSheet,Dimensions,TextInput , TouchableOpacity,Linking, TouchableWithoutFeedback, Keyboard, Alert, YellowBox} from 'react-native';
 
 
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import Button from './components/Button'
import { useSelector, useDispatch } from 'react-redux';
import {
    setCompanyLogo,setUserType
 } from'../../redux/actions';
 const OnboardingScreen = ({navigation}) => {
  const gotToSignup = () =>{
    alert('yes')
  }
  const { companyLogo,userType
  } = useSelector(state => state.userReducer);
  return   (
    <View style={styles.screenContainer}>
       
         <Image
    style={{height:100,width:200}}
    resizeMode='contain'
                  source={{uri:companyLogo}}
                  />
        <Text style={{color:'black',fontSize:responsiveFontSize(3),marginTop:10}}>
        Select one to proceed
        </Text>
      <View style={{width:"80%"}}>
      <Button title='Customer'    onPress={() => gotToSignup()} />
      <Button title='Realtor' />
      <Button title='Loan Officer' />
      </View>            
      

        </View>
   
)
}
const styles= StyleSheet.create({
  screenContainer:{
    backgroundColor:'white',
     flex:1,
    alignContent:'center',
   alignItems:'center',
   justifyContent:'center'
   
  }, 
}) 
export default OnboardingScreen;