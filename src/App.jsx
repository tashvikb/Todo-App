import React, { useState } from 'react';
import './index.css';


function App(){

    let newTime = new Date().toLocaleTimeString();

    const [cTime, setCTime] = useState(newTime);

    function refresh(){
        newTime = new Date().toLocaleTimeString();
        setCTime(newTime);
    }
    
    setInterval(refresh, 1000);
    return(
    <>  
        <h1 className="time">{cTime}</h1>
    </>
    );
}


export default App;