import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Interfaz5 = () => {
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
    //height: 400,
    backgroundColor: '#1d137a',
    flexDirection: 'row',
    
    //flexDirection: 'row-reverse',
    //justifyContent: 'space-around'
    justifyContent: 'space-between'
    //justifyContent: 'space-evenly'
    //justifyContent: 'center'
    //justifyContent: 'flex-end',
    //alignItems: 'center'
    //alignItems: 'flex-end'

    
    },

    box1: {
        
        width: 100,
        height: 770,
        backgroundColor: '#9b05ff',
        borderWidth: 3,
        borderColor: 'white',
        top: 10,
        bottom:10,            
    },  

    box2: {
        width: 100,
        height: 770,
        backgroundColor: '#e3f309',
        borderWidth: 3,
        borderColor: 'white',
        top: 10,
        bottom:10,
        
        
    },

    box3: {
        width: 100,
        height: 770,
        backgroundColor: '#0099ff',
        
        borderWidth: 3,
        borderColor: 'white',
        top: 10,
        bottom:10,
        
        
    },


})
