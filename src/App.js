import React, { Component } from 'react';
import { Grid, Image, Button } from 'semantic-ui-react'
import HackEDLogo from './logos/HackEDBetaLogo.svg';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import Schedule from './Components/Schedule';
import Sponsors from './Components/Sponsors';
import './App.css';

class App extends Component {
  
  redirectToEventBrite = event => {
    const url = 'https://www.eventbrite.ca/e/hacked-beta-2018-tickets-50994820882';
    window.open(url, '_blank');
  };

  redirectToApplications = event => {
    const url = 'https://goo.gl/forms/LW9t1VSZczkJz4lM2';
    window.open(url, '_blank');
  };

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
              <h3>First wave of tickets are sold out!</h3>
              <Button onClick={this.redirectToApplications} color='betablue' size='huge'>Applications are now open!</Button>
              <Button onClick={this.redirectToEventBrite} basic color='blue' size='huge'>Eventbrite tickets</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Schedule/>

        <Faq/>

        <Sponsors/>

        <Footer/>
        
      </div>
    );
  }
}

export default App;
