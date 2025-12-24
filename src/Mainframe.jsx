import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Header from "./Header";
import MyHikingMap from "./MyHikingMap";

function Mainframe(){

    const reference = "https://www.hollywoodsign.org";
    const choices = [ 
        {   name: "Lake Hollywood Trail",
            file: "LakeHollywood.csv",
            pos: {lat: 34.129156995834606,lng: -118.33640918218002} //34.129156995834606,-118.33640918218002
        },
        {   name: "Hollywood Sign via Canyon Drive",
            file: "CanyonDrive.csv" ,
            pos: { lat: 34.12545624202727,lng: -118.31386991416954 } //34.12545624202727,-118.31386991416954
        },
        {   name: "Hollywood Sign via Innsdale Trail and Mt Lee Drive",
            file: "InnsdaleMtLee.csv",
            pos: {lat: 34.1301075672801,lng: -118.3269378549816}//34.1301075672801,-118.3269378549816
        } 
    ];
    const [selectedOption, setSelectedOption] = useState(0); // Initial selected option

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return <>
        <Header title={"Hollywood Sign"} reference={reference}/>
        <Stack spacing={1} direction="row">
        {
            choices.map((item, index) => {
            return <Button key={index} value={index} variant={selectedOption==(index) ? "contained" : "outlined"} onClick={handleChange}>{item.name}</Button>
            })
        }
        </Stack>
        <hr></hr>
        <MyHikingMap csv={choices[selectedOption].file} mark={choices[selectedOption].pos}/>
        <hr></hr>
        <h3><a href="https://www.alltrails.com/parks/us/california/griffith-park">More trails ...</a></h3>
        <p><a href="https://kcfamilyjourney.github.io/home/">Home</a> | <a href="https://forms.gle/ErqZysKrBFxnL5SV7">Contact Us</a></p>
    </>;
}

export default Mainframe;