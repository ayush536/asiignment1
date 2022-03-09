import React, { useState } from "react"

const ListCom = (props) => {

    const [line,setLine]= useState(false)

    const cutIt = () => {
        setLine(true)
    }
    return(
        <div>
            <span>
                <button onClick={cutIt}>X</button>
            </span>
        <li style={{textDecoration : line ? 'line-through': 'none'}} >{props.text}</li>
        </div>
    )
};

export default ListCom;