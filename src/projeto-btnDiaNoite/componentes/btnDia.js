import React, {useState} from "react";

const BtnBomDia = ({setValor, style}) => {
   

    return ( 
            <>
            <button style={style} onClick={() => setValor("dia")}>Bom dia</button>
            </>
    )
}


export default BtnBomDia;