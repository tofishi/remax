import { Text, View, Image,StyleSheet, TouchableOpacity,} from 'react-native';
 
 
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import Header from "./components/Header"
  import { useNavigation } from '@react-navigation/native';

 const OnboardingScreen = () => {
  const navigation = useNavigation();

    const _gotToProfile =()=>{
        navigation.navigate('ProfileScreen')
      }
      const _gotToShare =()=>{
        navigation.navigate('ShareScreen')
      }
      const _gotToHome =()=>{
        navigation.navigate('TabScreen')
      }
  return   (
    <View style={styles.screenContainer}>
        <View style={{width:'100%',height:'99%',backgroundColor:'white',alignSelf:'center'}}>
        <View style={{height:  Platform.OS === 'ios' ? '15%' : '10%',paddingTop:Platform.OS === 'ios' ? 45 : 5,width:'100%',alignSelf:'center',backgroundColor:'white'}}>
                <Header

                 />
            </View>
         <View  >
            
        <View style={{width:'100%',marginTop:20}}>
            <View style={{padding:10}}>
                <TouchableOpacity style={styles.listRow}
                   onPress={() => _gotToProfile()}
                >
                <View style={{flexDirection:'row'}}>
                <Image
                style={{height:25,width:25}} resizeMode='cover'
                source={require('../../assets/icons/contact.png')}
                />  
                <Text style={styles.rowTex}>Profile</Text>
                </View>
                <View>
                <Image
                style={{height:25,width:25}} resizeMode='cover'
                source={require('../../assets/icons/right-move-icon.png')}
                /> 
                
                </View>
                </TouchableOpacity>
                
               
            </View>

            <View style={{padding:10}}>
               
               <TouchableOpacity style={styles.listRow}
                      onPress={() => _gotToShare()}
               >
               <View style={{flexDirection:'row'}}>
               <Image
               style={{height:25,width:25}} resizeMode='cover'
               source={require('../../assets/icons/connect.png')}
               />  
               <Text style={styles.rowTex}>Connect</Text>
               </View>
               <View>
             
               <Image
                style={{height:25,width:25}} resizeMode='cover'
                source={require('../../assets/icons/right-move-icon.png')}
                /> 
               </View>
               </TouchableOpacity>
               
              
           </View>
           <View style={{padding:10,}}>
               
               <TouchableOpacity style={styles.listRow}
               onPress={() => navigation.navigate('InfoScreen')}
               >
               <View style={{flexDirection:'row'}}>
               <Image
               style={{height:25,width:25}} resizeMode='cover'
               source={require('../../assets/icons/info-1.png')}
               />  
               <Text style={styles.rowTex}>Info</Text>
               </View>
               <View>
               <Image
                style={{height:25,width:25}} resizeMode='cover'
                source={require('../../assets/icons/right-move-icon.png')}
                /> 
               </View>
               </TouchableOpacity>
               
              
           </View>


            {/*  */}
          
      
        </View>
        </View>
        </View>
    </View>
     
)
}
const styles= StyleSheet.create({
  screenContainer:{
    backgroundColor: 'white',
    flex: 1,

    alignItems: 'center'
  }, 
  listRow:{
    height:50,
    width:'100%',
    borderBottomWidth:1,
    borderColor:'lightgray',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  rowTex:{
    marginLeft:10,
    fontSize:responsiveFontSize(2.5),
    color:'black'
  }
}) 
export default OnboardingScreen;