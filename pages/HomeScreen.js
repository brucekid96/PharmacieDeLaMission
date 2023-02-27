import React, { useState} from "react";
import {Button, View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"

const HomeScreen = ({navigation}) => {

  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
      
       
       <TouchableOpacity
       style={styles.circle}
       onPress= {() => navigation.navigate('AddProduct')} >
        
        <Icon name="plus" size={25} color="#fff" />
    
       </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};



export default HomeScreen;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: '#f52d56',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 40,
    right: 40,
    borderRadius: 50,
    justifyContent:'center',
    alignItems:'center'
 }
})