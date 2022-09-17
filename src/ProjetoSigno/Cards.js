import React, {useState} from "react"
import data from "./data"


const Cards = () => {
    const [signo, setSigno] = useState(data)

    const style= {
        textAlign: 'center',
        margin: '0px'
    }
   
    const styleTitulo = {
         marginTop:'20px',
         marginBottom: '15px',
         textAlign: 'center',
    }
    
    const styleImg = {
        width:'130px',
         borderRadius:'4px',
         marginTop:'8px',
         marginBottom: '12px'
    }
    

    return(
        <> <h3 style={styleTitulo}>Baralho de Signos</h3>
        <div style={{display: 'flex',flexDirection:'row',flexWrap: 'wrap'}}>
            {signo.map((sig) => {
                
                return(
                <div key={`${signo.length}`} id="cards">
                    <h4 style={style}>{sig.nome}</h4>
                    <img style={styleImg}src={sig.img} />
                    <h4 style={style}>{sig.data}</h4>
                </div>)
})}
        </div>
        </>
    )
}

export default Cards