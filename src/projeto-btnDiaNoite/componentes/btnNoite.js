import React, {useState} from "react";


const BtnBoaNoite = ({setValor, style}) => {
   

    return (
    <>
    <button style={style} onClick={() => setValor("noite")}>Boa noite</button>
    </>
    )
}

export default BtnBoaNoite;