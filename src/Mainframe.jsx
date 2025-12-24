import React, { useState } from "react";
import Header from "./Header";
import MyHikingMap from "./MyHikingMap";

function Mainframe(){
    return <>
        <Header title={"Hollywood Sign"}/>
        <MyHikingMap />
        <hr></hr>
        <a href="https://kcfamilyjourney.github.io/home/">Home</a>
    </>;
}

export default Mainframe;