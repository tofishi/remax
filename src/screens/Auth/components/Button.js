import { Text, View, StyleSheet, TouchableOpacity,} from 'react-native';
 
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import { useNavigation } from '@react-navigation/native';
  
  import { useSelector, useDispatch } from 'react-redux';
  import {
    setCompanyLogo,setUserType
 } from'../../../redux/actions';
 const Button = ({title}) => {
  
  const navigation = useNavigation();
  
  const { companyLogo,userType
  } = useSelector(state => state.userReducer);
const dispatch = useDispatch();
    const _gotToLogin =()=>{
if(title==='Customer'){
  dispatch(setUserType(2))
}else if(title==='Realtor'){
  dispatch(setUserType(1))
}else{
  dispatch(setUserType(3))

}
        navigation.navigate({
            name: 'Login',
            params: { displayIndex: title},
            merge: true,
        });
      }
  return   (
    <View >
          <TouchableOpacity style={styles.buttonCs}
             onPress={() => _gotToLogin(title)}
        >
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    </View>
     
)
}
const styles= StyleSheet.create({
  
  buttonCs:{
    backgroundColor:'#62a0f7',
    // borderWidth:2,
    // borderColor:'#62a0f7',
    width:'100%',
    alignSelf:'center',
    padding:10,
    borderRadius:12,
    margin:10
  },
  btnText:{
    alignSelf:'center',
    fontSize:responsiveFontSize(2.5),
    color:'white',
  }
}) 
export default Button;