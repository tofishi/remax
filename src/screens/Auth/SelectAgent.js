import React,{useEffect,useState} from 'react';
import {ToastAndroid,Share,FlatList, Text, View,Modal,Pressable, Image, StyleSheet,Dimensions,TextInput , TouchableOpacity,Linking, TouchableWithoutFeedback, Keyboard, Alert, YellowBox} from 'react-native';
 
 
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import { useSelector, useDispatch } from 'react-redux';
  import {
      setCompanyLogo 
   } from'../../redux/actions';
 const OnboardingScreen = ({navigation}) => {
  const { companyLogo
  } = useSelector(state => state.userReducer);
    const [agnetData, setAgnetData] = useState([]);

    const _gotToLogin =(text)=>{
      navigation.navigate({
        name: 'Signup',
        params: { referral_code: text},
        merge: true,
      });
       }
 
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
     body: JSON.stringify({ CompanyID: '91'})
  };
  fetch('https://api.newhomesinorlando.net/RealtorList', requestOptions)
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
        const agnetData =  data.data
        console.log(agnetData.referral_code)
        setAgnetData(agnetData)
   
     })
     .catch(error => {
   
         this.setState({ errorMessage: error.toString() });
     });
  };
  


  return   (
    <View style={styles.screenContainer}>
         <View style={{width:'90%',height:'100%',alignSelf:'center',backgroundColor:'white'}}>
         
        <View style={{backgroundColor:'white',alignItems:'center'}}>
        <Image
 style={{height:100,width:200,marginTop:'15%'}}
 resizeMode='contain'
                  source={{uri:companyLogo}}
                  />
        <Text style={{color:'#62a0f7',fontSize:responsiveFontSize(3),marginTop:20,alignSelf:'center'}}>
Select Agent</Text>

    
        <View style={{height:'65%',marginTop:20}}>
            {/*  */}
            <FlatList 
            style={{borderWidth:1,borderColor:'gray',borderRadius:15,width: '80%',}}
              data={agnetData}
              renderItem={({ item, index }) => { 
                 return (
                  <View style={{ width: '100%', height: 50, backgroundColor: 'white', color: "white", borderRadius: 10, padding: 3, marginTop: 10, flexDirection:'row'}}
                >


                    <TouchableOpacity style={{flexDirection:'row',width:'100%',backgroundColor:'white',paddingLeft:10,borderBottomWidth:1,borderBottomColor:'gray'}}    
                    onPress={() => _gotToLogin(item.referral_code_recive)}
                    >
                    <Image
                  style={{height:40,width:40,borderRadius:10,resizeMode:'center'}}
                  source={{uri:item.profilePhoto}}
                  />
                    
  <Text style={{marginLeft:10,marginTop:5,fontSize:responsiveFontSize(2.8)}}>{item.RealtorName}</Text>

                    </TouchableOpacity>


                  </View>







                )
            
              }}

            />

<TouchableOpacity style={{backgroundColor:'#62a0f7',width:'80%',alignSelf:'center',padding:10,borderRadius:12,marginTop:15,marginBottom:40}}
                   onPress={() => _gotToLogin('718236')}
        >
            <Text style={{alignSelf:'center',fontSize:responsiveFontSize(2.5),color:'white'}}>Prcced Wthout Loan Officer</Text>
        </TouchableOpacity> 
            {/*  */}
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
justifyContent:'center',
   alignContent:'center',
  alignItems:'center',
  }, 
}) 
export default OnboardingScreen;