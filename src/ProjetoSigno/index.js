import React, {useState} from "react"
import data from "./data"


const Cards = () => {
    const [signo, setSigno] = useState(data)

    return(
        <> 
            <h3 className="titulo">Baralho de Signos</h3>
            <div className="cards_div">
                {signo.map((sig) => { return(
                    <div id="cards" className="cards" >
                        <div className="flip">
                            <div key={`${signo.length}`}  className="card_front">
                                <h4 className="card_front_titulo">{sig.nome} </h4>
                                <img className="card_front_img" src={sig.img} />
                                <h4 className="card_front_data">{sig.data}</h4>
                            </div>
                            <div  className="card_back">
                                <h4 className="card_back_titulo">{sig.nome}</h4>
                                <p className="card_back_p">{sig.descricao}</p>
                            </div>
                        </div>
                    </div>
                )})}
          </div>
        </>
    )
}


export default Cards