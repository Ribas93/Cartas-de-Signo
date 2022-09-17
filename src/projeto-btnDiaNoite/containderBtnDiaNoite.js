import React, {useState} from "react";
import BtnBoaNoite from "./componentes/btnNoite";
import BtnBomDia from "./componentes/btnDia";
import MostrarDiaeNoite from "./componentes/monstrarBtn";



const BlocoBtnHead =() => {
    const [diaNoite, setDiaNoite] = useState("")

    let style = {
        padding: "10px",
        width: "150px",
        height: "50px",
        fontSize: "18px",
        borderRadius: "8px",
        margin: "auto 10px",
        border: "none",
        fontWeight: "bold"
       }
    return(
        
        <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', flexWrap: 'wrap',}}>
        <BtnBomDia style={style} setValor={setDiaNoite}/>
        <MostrarDiaeNoite valor={diaNoite}/>
        <BtnBoaNoite style={style} setValor={setDiaNoite}/>
        </div>
    )
}

export default BlocoBtnHead;