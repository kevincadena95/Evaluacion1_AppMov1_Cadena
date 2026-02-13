import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Interfaz6 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box1}></View> 
            <View style={styles.box2}></View> 
            <View style={styles.box3}></View> 
    </View>
  )
}
const styles= StyleSheet.create({
    container: {
    flex: 1, 
    
    backgroundColor: '#1d137a',
    flexDirection: 'column',
    //justifyContent: 'space-around'
    //justifyContent: 'space-between'
    //justifyContent: 'space-evenly'
    //justifyContent: 'center'
    //justifyContent: 'flex-end',
    //alignItems: 'center'
    //alignItems: 'flex-end'
    

    
    },

    box1: {
        
        height: 200,
        backgroundColor: '#9b05ff',
        borderWidth: 3,
        borderColor: 'white',
        top: 10,      
    },  

    box2: {
        
        height: 250,
        backgroundColor: '#e3f309',
        borderWidth: 3,
        borderColor: 'white',
          
        
    },

    box3: {
        height: 300,
        backgroundColor: '#0099ff',
        
        borderWidth: 3,
        borderColor: 'white',
        
        
    },


})
