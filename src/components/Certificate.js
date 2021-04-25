import React from 'react';
import react_cer from '../react_certificate.png';
import BSc from '../Bsc certificate.png';
const Certificate = () =>{
    return(
        <div style={{textAlign:"center"}}>
            <h1>Academics Certificates</h1>
            <h2>React certificate from Linkiden</h2>
            <img src={react_cer}/><br></br>
            <h2>Bsc Certificate</h2>
            <img src={BSc} alt="BSc certificate" /><br></br>
            <br></br>
            
        </div>
    );
}

export default Certificate;