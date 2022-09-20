import React, {useState} from "react"
import data from "./data"


const Cards = () => {
    const [signo, setSigno] = useState(data)

    return(
        <> 
            <h3 className="titulo">Baralho de Signos</h3>
            <div className="cards_div">
                {signo.map((sig) => { return(
                    <div id="cards">
                        <div key={`${signo.length}`} id="front" className="card">
                            <h4 className="card_front_margin">{sig.nome} </h4>
                            <img className="card_front_img" src={sig.img} />
                            <h4 className="card_front_margin">{sig.data}</h4>
                        </div>
                        <div id="back" className="card">
                            <h4 className="card_back_titulo">{sig.nome}</h4>
                            <p className="card_back_descricao">{sig.descricao}</p>
                        </div>
                    </div>
                )})}
          </div>
        </>
    )
}


export default Cards