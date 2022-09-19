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
    
    const styleDivCards = {
        display: 'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }

    return(
        <> <h3 style={styleTitulo}>Baralho de Signos</h3>
          <div style={styleDivCards}>
            {signo.map((sig) => {
                
                return(
                    <div id="cards">
                    <div key={`${signo.length}`} id="front" className="card">
                        <h4 style={style}>{sig.nome} </h4>
                        <img style={styleImg}src={sig.img} />
                        <h4 style={style}>{sig.data}</h4>
                    </div>
                    <div id="back" className="card">
                        <h4 style={{padding:'0px', margin:'0px'}}>Ola eu sou de Aquario</h4>
                    </div>
                </div>
                )
})}
          </div>
        </>
    )
}

export default Cards