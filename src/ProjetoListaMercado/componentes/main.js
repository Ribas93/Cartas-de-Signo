import React,{useState} from "react";
import Carrinho from "./main/carrinho";
import Cards from "./main/cards";



const Main = ({data,listaProd, setLista}) => {
     const [add, setAdd] = useState([])
    return(
        <main >
             <Cards data={listaProd} add={add} setAdd={setAdd}/>
             <hr/>
             <Carrinho add={add} data={data}/>
       </main>
    )
}

export default Main;