import React, { useState } from "react";
import MyHikingMap from "./MyHikingMap"

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
        <MyHikingMap />
    </>;
}

export default Mainframe;