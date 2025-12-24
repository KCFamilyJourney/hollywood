import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Header from "./Header";
import MyHikingMap from "./MyHikingMap";

function Mainframe(){
    const choices = [ "Lake Hollywood Trail", "Hollywood Sign via Canyon Drive", "Hollywood Sign via Innsdale Trail and Mt Lee Drive" ];
    const [selectedOption, setSelectedOption] = useState(0); // Initial selected option

    const handleChange = (event) => {
        //checkIfDataLoaded();
        //if(gapi.isLoaded){
        setSelectedOption(event.target.value);
        //}
    };


    return <>
        <Header title={"Hollywood Sign"}/>
        <Stack spacing={1} direction="row">
        {
            choices.map((item, index) => {
            return <Button key={index} value={index} variant={selectedOption==(index) ? "contained" : "outlined"} onClick={handleChange}>{item}</Button>
            })
        }
        </Stack>
        <hr></hr>
        <MyHikingMap />
        <hr></hr>
        <a href="https://kcfamilyjourney.github.io/home/">Home</a>
    </>;
}

export default Mainframe;