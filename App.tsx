import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Interfaz1 } from './src/screens/Interfaz1';
import { Interfaz2 } from './src/screens/Interfaz2';
import { Interfaz3 } from './src/screens/Interfaz3';
import { Interfaz4 } from './src/screens/Interfaz4';
import { Interfaz5 } from './src/screens/Interfaz5';
import { Interfaz6 } from './src/screens/Interfaz6';
import { Interfaz7 } from './src/screens/Interafz7';
import { Interfaz8 } from './src/screens/Interfaz8';
import { Interfaz9 } from './src/screens/Interfaz9';
import { Clasificar } from './src/screens/Clasificar';





const App = () => {
  return(
    <SafeAreaView style={{flex: 1}}>
    <Clasificar/>
    {/* <Interfaz1/> */}
   {/*  <Interfaz2/> */}
    {/* {<Interfaz3/>} */}
    {/* <Interfaz4/> */}
    {/* <Interfaz5/> */}
    {/* <Interfaz6/> */}
    {/* <Interfaz7/> */}
    {/* <Interfaz8/> */}
    {/* <Interfaz9/> */}
    </SafeAreaView>
    
  )
}

export default App;