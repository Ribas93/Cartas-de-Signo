import React, {useState} from "react"
import BtnVer from "./header/btnVer"
import BtnCin from "./header/btnCin"
import InputBtn from "./header/inputBtn"
import data from "../data"


const Header = ({setData, data}) => {
    
    

    const style = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: '15px'
    }
        

    return(
        <>
        <header style={style}>
           <BtnCin data={data} setData={setData}/>
           <BtnVer data={data} setData={setData}/>
           <InputBtn data={data} setData={setData}/>
        </header>
        </>
    )
}

export default Header;