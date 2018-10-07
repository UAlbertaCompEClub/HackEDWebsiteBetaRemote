import React, {Component} from 'react';

import { Grid, Image } from 'semantic-ui-react'

import StartupEdmontonLogo from '../StartupEdmonton.png'

class Sponsors extends Component {
    

    render() {
        return (
            <Grid 
                centered
                style={{
                background: "#FFFFFF",
                marginTop: 40,
                marginBottom: 40
            }}
            columns={3}
            container
            stackable
            relaxed='very'>
                <Grid.Row centered>
                    <Grid.Column>
                        <h1 style={{textAlign: "center", color: "#3399CC"}}>Sponsors</h1>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column>
                        <Image
                            src={StartupEdmontonLogo}
                            fluid
                            as='a'
                            href='https://www.startupedmonton.com/'
                            target='_blank'/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Sponsors;