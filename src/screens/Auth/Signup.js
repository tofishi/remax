import {ScrollView,Share, Text, View,Modal,Pressable, Image, StyleSheet,Dimensions,TextInput , TouchableOpacity,Linking, TouchableWithoutFeedback, Keyboard, Alert, YellowBox} from 'react-native';
 
import React,{useEffect,useState} from 'react';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import { useSelector, useDispatch } from 'react-redux';
  import {
      setCompanyLogo 
   } from'../../redux/actions';
   import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

 const OnboardingScreen = ({navigation,route}) => {
  const { companyLogo
  } = useSelector(state => state.userReducer);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [referral_code, setreferral_code] = useState(route.params.referral_code);
  const [realtorCode, setRealtorCode] = useState();
  
  
 useEffect(() => { 
  getRealtor();
   }, []); 

const getRealtor = () => {


const requestOptions = {
method: 'POST',
headers: { 
 
 Accept: 'application/json',
 'Content-Type': 'application/json',
 'Authorization': 'Bearer VaNX7DyjLkSCtZjBNTeHrVuVyD8TCP',
},
body: JSON.stringify({ referral_code_lo: referral_code})
};
fetch('http://api.newhomesinorlando.net/getDefaultRealtor', requestOptions)
.then(async response => {
   const isJson = response.headers.get('content-type')?.includes('application/json');
   const data = isJson && await response.json();

   // check for error response
   if (!response.ok) {
       // get error message from body or default to response status
       const error = (data && data.message) || response.status;
       return Promise.reject(error);
   }else{
    const response = data.msg
    if(response==='success'){
      const referral_code = data.data['referral_code']
      setRealtorCode(referral_code)
 
    }
   }

 
})
.catch(error => {

   this.setState({ errorMessage: error.toString() });
});
};

    const _signupAction =()=>{
      if(firstName ==='' || lastName ==='' || email ==='' || password ===''){
      alert('Please Fill All Required Fields');
      return false;
      }else if(password !=  cPassword  ){
        alert('Confirm Password not match');
        return false;
      }
      else{
        customerSignup()
      }
    }



    const customerSignup = () => {
  
 
      const requestOptions = {
       method: 'POST',
       headers: { 
         
         Accept: 'application/json',
         'Content-Type': 'application/json',
         'Authorization': 'Bearer VaNX7DyjLkSCtZjBNTeHrVuVyD8TCP',
       },
       body: JSON.stringify({
        CompanyID: '91',
         first_name: firstName,
         last_name: lastName,
         phone: '765',
         email:email,
         password:password,
         deviceType:'Android',
         deviceToken:'sheikh',
         referral_code_lo: referral_code,
         referral_code: realtorCode,
         userType:2,

        })
    };
    fetch('https://api.newhomesinorlando.net/customerSignup', requestOptions)
       .then(async response => {
           const isJson = response.headers.get('content-type')?.includes('application/json');
           const data = isJson && await response.json();
           
           // setAgnetData(agnetData)
           
    
           // check for error response
           if (!response.ok) {
               // get error message from body or default to response status
               const error = (data && data.message) || response.status;
               return Promise.reject(error);
           }else{
              var response = data.result
              if(response===1){
                alert('Customer Registration Succesfully done');
                
                
                navigation.navigate({
                  name: 'Login',
                  params: { displayIndex: 'Customer'},
                  merge: true,
              });

              }else{
                alert(data.message)
              }
           }
           
        
       })
       .catch(error => {
     
           this.setState({ errorMessage: error.toString() });
       });
    };


  return   (
    <View style={styles.screenContainer}>
        <View style={{width:'100%',height:'99%',backgroundColor:'white',alignSelf:'center'}}>
         
        <View style={{alignSelf:'center',width:'80%',height:'90%',backgroundColor:'white',alignItems:'center'}}>
        <KeyboardAwareScrollView style={{marginTop:'20%',width:"100%",}}>

        <Image
        style={{height:100,width:200,marginTop:'25%',alignSelf:'center'}}
        resizeMode='contain'
                  source={{uri:companyLogo}}
                  />
        <Text style={{marginTop:'5%',color:'#62a0f7',fontSize:responsiveFontSize(3),alignSelf:'center'}}>
Customer  Signup</Text>
<ScrollView style={{ width:"100%", height:'100%',}}>
    <View style={{width:"100%"}}>
        <TextInput
        placeholder='First Name'
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        style={styles.inputText}
        keyboardType="default"
        />
        <TextInput
            value={lastName}
            onChangeText={(text) => setLastName(text)}
        placeholder='Last Name'
        style={styles.inputText}
        keyboardType="default"
        />
        <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder='Email'
        style={styles.inputText}
        keyboardType="email-address"
        />
        <TextInput
         value={password}
         onChangeText={(text) => setPassword(text)}
        placeholder='Password'
        style={styles.inputText}
        secureTextEntry={true} 
        />
        <TextInput
         value={cPassword}
         onChangeText={(text) => setCPassword(text)}
        placeholder='Confirm Password'
        style={styles.inputText}
        secureTextEntry={true} 
        />
 
        </View>
      
        <TouchableOpacity style={{backgroundColor:'#62a0f7',width:'80%',alignSelf:'center',padding:10,borderRadius:12,marginTop:15}}
                     onPress={() => _signupAction()}
        >
            <Text style={{alignSelf:'center',fontSize:responsiveFontSize(2.5),color:'white'}}>Signup</Text>
        </TouchableOpacity> 
       
      </ScrollView>

      </KeyboardAwareScrollView>
       
        </View>
        </View>
    </View>
     
)
}
const styles= StyleSheet.create({
  screenContainer:{
    flex:1,
    justifyContent:'center',
 
  
  }, 
  inputText:{
    width:'100%',
    borderWidth:1,
    borderColor:'gray',
    borderRadius:5,
    fontSize:responsiveFontSize(2),
    padding:5,
    marginTop:'5%',
    paddingLeft:10
  }
}) 
export default OnboardingScreen;