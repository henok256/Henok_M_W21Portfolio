import React from 'react';
import resume from '../resume.png'
const Resume = () =>{
    return(
        <div style={{textAlign:"center"}}>
            <h1>Resume</h1>
            <img src={resume} alt="Resume" />
           
        </div>
    );
}

export default Resume;