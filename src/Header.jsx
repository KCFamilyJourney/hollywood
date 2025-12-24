import React from "react";
import "./header.css"
import sign from "./assets/Hollywood_Sign.jpeg"

function Header(props){

    return <>
    <div className="container">
        <table className="table">
        <thead className="thead">
        <tr>
            <th>
                <img src={sign} alt="Hollywood Sign picture" style={{width: "200px"}}></img>
            </th>
            <th>
                <h1><a href={props.reference}>{props.title}</a></h1>  
            </th>
        </tr>
        </thead>    
        </table>
    </div>
    </>;
}

export default Header;