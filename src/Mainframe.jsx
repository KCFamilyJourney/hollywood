import React, { useState } from "react";
import FetchJFile from './FetchJFile'
import Mainpage from './Mainpage'
import MyMap from "./MyMap";

function Mainframe(){
    const [dataLoaded, setDataLoaded] = useState(false);
    const [data, setData] = useState(null);
    
    function loadData(jObj){
          console.log(`loadData ${JSON.stringify(jObj)}`);
          setData(jObj);
          setDataLoaded(true);
    }

    //if(!dataLoaded) return <><p>Loading</p></>;
    //{!dataLoaded && <FetchJFile loadData={loadData}/>}
    //{dataLoaded && <Mainpage data={data}/>}

    return <>
    <h1>Test</h1>  
        <MyMap />
    </>;
}

export default Mainframe;