import React from 'react';
import myPicture from '../mypicture.jpg';

const Bio = () =>{
    return(
        <div style={{textAlign:"center"}}>
            <h1>Bio</h1>
             <p>Hi there, I am Henok Mengesha, I am a web developer with set of skills like <b>JavaScript, HTML, CSS, Node Js and Mongodb</b>. If You want to reach me here is my email: Henokmengesha91@gmai.com</p>
             <img src={myPicture} style={{width:"50%", height:'50%'}}   alt="Profile Photo" />
        </div>
    );
}

export default Bio;