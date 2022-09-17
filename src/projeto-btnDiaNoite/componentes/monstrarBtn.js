import React, {useState} from "react";

const MostrarDiaeNoite = ({valor}) => {
   
    if (valor === "dia")
    {
    return (
        <div>
             {<h2 style={{backgroundColor: 'yellow', color:"white",padding:'20px', width: '300px'}}>Ola Mundo, Bom dia</h2>}
        </div>
    )}

    else if(valor === 'noite')
    {
        return(
            <div>
            {<h2 style={{backgroundColor: 'black', color:"blue",padding:'20px', width: '300px'}}>Ola Mundo, Boa Noite</h2>}
            </div>
        )
    }

    else{
        return(
            <h1>Ola seja Bem-vindo</h1>
        )
    }
}

export default MostrarDiaeNoite;