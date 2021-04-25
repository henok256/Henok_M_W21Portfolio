import React from 'react';
import Letter from '../coverLetter.png';
const CoverLetter = () =>{
    return(
        <div style={{textAlign:"center"}}>
            <h1>Cover Letter</h1>
            <img src={Letter} alt="cover Letter" />
           
        </div>
    );
}

export default CoverLetter;