import React, { Component } from 'react';
import { Grid, Image, Button } from 'semantic-ui-react'
import HackEDLogo from './HackEDBetaLogo.svg';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import Sponsors from './Components/Sponsors';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Grid 
          verticalAlign='middle' 
          columns={2} 
          centered 
          style={{height: '100vh', background: "linear-gradient(180deg, #FFFFFF 70%, #3399cc 90%)"}}>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Image src={HackEDLogo} fluid />
              <h2>A 24-hour hackathon for students, novice hackers and first time programmers!</h2>
              <h3>November 17th - 18th at Startup Edmonton</h3>
              <Button color='betablue' size='huge'>Registration Opening Soon!</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Faq/>

        <Sponsors/>

        <Footer/>
        
      </div>
    );
  }
}

export default App;
