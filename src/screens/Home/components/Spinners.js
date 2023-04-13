import React, { useState, useEffect } from 'react';
 import {ActivityIndicator, View, StyleSheet} from 'react-native';

const loaderScreen = () => {
  <View>
<ActivityIndicator size="large" color="#0000ff" style={{top:'50%'}}  />
 </View>
}
const styles= StyleSheet.create({
    header:{
    backgroundColor:'white',
    height:'100%',
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10
  
  }, 
}) 
export default loaderScreen;