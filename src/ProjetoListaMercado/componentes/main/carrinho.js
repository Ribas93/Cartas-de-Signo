import React, {useState} from "react";


const Carrinho = ({add,data}) => {

    

    return(
        <>
        <div style={{border:'2px solid black', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {add.map((id) => {
             const newData = data.filter(obj => obj.id === id)
             return(
                <div key={newData.indexOf(id)}>
                <img alt={newData[0].nome} src={newData[0].img}/>
                <h3>{newData[0].preco}</h3>
                </div>
             )
            })}
        </div>
        
        </>
    )
}


export default Carrinho;