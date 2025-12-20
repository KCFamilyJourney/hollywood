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

    return <>
        {!dataLoaded && <FetchJFile loadData={loadData}/>}
        {dataLoaded && <Mainpage data={data}/>}
        <MyMap />
    </>;
}

export default Mainframe;