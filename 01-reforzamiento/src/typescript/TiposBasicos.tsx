import React from 'react'

export const TiposBasicos = () => {
    let nombre: string = 'Bryan Ariel Sanchez Anariba';
    let nombreONumero: string | number;
    let isActivo: boolean = true;
    const poderes: string[] = [ "Super Velocidad", "Ultra Vision", "Super Guapo" ]; 
    nombreONumero = 'Erick';
    nombreONumero = 25;
    
    return (
        <>
            <h3>Tipos Basicos</h3>
            <p>
                <small><b>Tipo string:</b> <i>{ nombre.toUpperCase() }</i></small>
                <br />
                <small><b>Tipo string | number:</b> <i>{ nombreONumero }</i></small>
                <br />
                <small><b>Tipo bool:</b> <i>{ ( isActivo === true)  ? 'Si' : 'No' }</i></small>
                <br />
                <small><b>Arreglo de strings:</b> <i>{ poderes.join( ',' ) }</i></small>
            </p>
        </>
    )
}
