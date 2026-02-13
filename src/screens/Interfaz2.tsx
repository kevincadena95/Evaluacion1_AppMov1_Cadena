import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Interfaz2 = () => {
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
    //flexDirection: 'column',
    
    //flexDirection: 'row-reverse',
    //justifyContent: 'space-around'
    //justifyContent: 'space-between'
    //justifyContent: 'space-evenly'
    //justifyContent: 'center'
    //justifyContent: 'flex-end',
    //alignItems: 'center'
    //alignItems: 'flex-end'

    
    },

    box1: {
        width: 100,
        height: 100,
        backgroundColor: '#9b05ff',
        borderWidth: 3,
        borderColor: 'white',
        position: 'absolute',
        top: 200,
        left: 0        
    },  

    box2: {
        width: 100,
        height: 100,
        backgroundColor: '#e3f309',
        borderWidth: 3,
        borderColor: 'white',
        position: 'absolute',
        left: 0,
        top: 300  
        
    },

    box3: {
        width: 390,
        height: 100,
        backgroundColor: '#0099ff',
        
        borderWidth: 3,
        borderColor: 'white',
        fontSize: 30,
        position: 'absolute',
        top: 400,
        left: 0 
        
    },


})
