import React, {useState} from "react";


const Cards = ({data, setAdd, add}) => {


const styleLi = {
    display: 'flex', 
    flexDirection: 'column',
    margin:'10px',
    alignItems: 'center',
}


const styleImg = {
        width: '100px',
        height:'100px',
        borderRadius: '3px',

    }
        
const style = {
    display: 'flex', 
    flexDirection: 'column'}

    return(
        <ul style={{display: 'flex', flexWrap:'wrap', alignItems: 'center', justifyContent: 'center'}}>
                {data.map((obj) => 
                <li style={styleLi}>
                    <h3>{obj.nome}</h3>
                    <img style={styleImg} alt={obj.nome} src={obj.img}/>
                    <p>R$ {obj.preco}</p>
                    <span>{obj.secao}</span>
                    <button onClick={() => setAdd([...add, obj.id])} id={obj.id }>Selecionar</button>
                </li>
            )}
        </ul>
    )
}


export default Cards;