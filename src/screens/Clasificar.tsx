import React from 'react'


export const Clasificar = () => {

const arreglo: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];



const Pares = (arreglo: number[]): number[] => {
    return arreglo.filter(num => num % 2 === 0);
};

const Impares = (arreglo: number[]): number[] => {
    return arreglo.filter(num => num % 2 !== 0); 
};



    return (
    <div>
        <h3 className="font-bold">Ejercicio 5:</h3>
        <span>Valor: {contador} </span>
        <br /><br />
        <button className="btn btn-primary m-4" onClick={()=>actulizarContador(5)}>+5</button>
        
    </div>
    )
}
