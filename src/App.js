import React, {Component} from 'react';
import {BrowserRouter, Route, Switch,Link} from 'react-router-dom';
import Certificate from './components/Certificate';
import Capstone from './components/Capstone';
import Summary from './components/Summary';
import Bio from './components/Bio';
import Resume from './components/Resume';
import CoverLetter from './components/CoverLetter';
import CareerGoal from './components/CareerGoal';
import AcademicWorkSample from './components/AcademicWorkSample';

import logo from './mypicture.jpg';
import './App.css';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div>
        <nav style={{border:20, textAlign:'center', fontSize:25, background:"gray"}} >
          
          <Link to="/" style={{textDecoration: "none"}}>Bio Page &nbsp;</Link>
          <Link to="/resume" style={{textDecoration: "none"}}>Resume &nbsp;</Link>
          <Link to="/cover letter" style={{textDecoration:"none"}}>Cover Letter &nbsp;</Link>
          <Link to="/career goal" style={{textDecoration:'none'}}>Career Goal &nbsp;</Link>
          <Link to="/certificates" style={{textDecoration: "none"}}>Certificates &nbsp;</Link>
          <Link to="/academic work sample" style={{textDecoration:'none'}}>Academic Work Sample &nbsp;</Link>
          <Link to="/capstone" style={{textDecoration: "none"}}>Capstone Project &nbsp;</Link>
          <Link to="/professional summary" style={{textDecoration: "none"}}>Professional Summary &nbsp;</Link>
          <h1>Henok Mengesha's Portofolio web Page</h1>
        </nav>
        <Route path="/" component={Bio} exact />
        <Route path='/resume' component={Resume}/>
        <Route path='/cover letter' component={CoverLetter}/>
        <Route path='/career goal' component={CareerGoal}/>
        <Route path="/certificates" component={Certificate}/>
        <Route path="/academic work sample" component={AcademicWorkSample}/>
        <Route path="/capstone" component={Capstone}/>
        <Route path="/professional summary" component={Summary}/>
      
      </div>
      </BrowserRouter>
      
    );
  }
  
}
export default App;
