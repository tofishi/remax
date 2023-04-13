import React from 'react';
import {Keyboard,Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
 import { useNavigation } from '@react-navigation/native';

const AppHeader = ({ menu,back,title, right, rightFunction, optionalIcon}) => {
  const navigation = useNavigation();

    const _gotTohome =()=>{
        navigation.navigate('HomeScreen')
      }
      const _gotToInfo =()=>{
        Keyboard.dismiss()
        setTimeout(function(){
            navigation.push('InfoScreen')
            }, 1);
      }
      const IconSize =35;
      const IconColor ='white';
    return (
        <View style={styles.header}>
   
        <View style={styles.view}>
        <TouchableOpacity 
         onPress={()=>{_gotTohome()}}
        ><Text>ok</Text></TouchableOpacity>

        </View>
        <View style={styles.view}>
            <Text style={styles.title}>{title}</Text>
        </View>
        {/* <View style={[styles.view , styles.rightView]}>
        {optionalIcon && <TouchableOpacity 
          onPress={()=>{_gotToInfo()}}
        ><MaterialCommunityIcons name="information-outline"  size={IconSize} color={IconColor} /></TouchableOpacity>}
        {rightFunction && <TouchableOpacity 
        onPress={()=>{_gotToInfo()}}
        ><MaterialCommunityIcons name="information-outline"  size={IconSize} color={IconColor} /></TouchableOpacity>}
   
        </View> */}
        <Text>&nbsp;</Text>
    {/* </Surface> */}
    </View>
  )
}
const styles= StyleSheet.create({ 
    header:{
        height:  Platform.OS === 'ios' ? 95 : 60,
        elevation: 60,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection: 'row',
        backgroundColor:'#62a0f7',
        paddingTop: Platform.OS === 'ios' ? 40 : 0,
      },
      view:{
        margin:10,
        alignItems:'center',
        flexDirection:'row'
      },
      rightView:{
        justifyContent:'flex-end',width:50
      },
      title:{
        color:'white',
        fontSize:22,
        fontFamily:'IBMPlexSans-BoldItalic'

      }
});
export default AppHeader;