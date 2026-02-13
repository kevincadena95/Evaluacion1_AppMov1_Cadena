import React from 'react'
import { Button, Text, View } from 'react-native';


export const Clasificar = () => {

const arreglo: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];



const Pares = (arreglo: number[]): number[] => {
    return arreglo.filter(num => num % 2 === 0);
};
const npares= Pares(arreglo);

const Impares = (arreglo: number[]): number[] => {
    return arreglo.filter(num => num % 2 !== 0); 
};
const ninpares= Impares(arreglo);



    return (
    <View>
        <Text>Pares: {npares.join(", ")}</Text>
        
        <Text>Imares: {ninpares.join(", ")}</Text>
        
        
        
    </View>
    )
}
