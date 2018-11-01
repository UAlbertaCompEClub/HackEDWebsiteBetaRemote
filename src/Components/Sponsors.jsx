import React, {Component} from 'react';

import { Grid, Image, Divider } from 'semantic-ui-react'

import StartupEdmontonLogo from '../logos/StartupEdmonton.png'
import IntuitLogo from '../logos/Intuit.png'
import ResolverLogo from '../logos/Resolver.jpg'
import IdxLogo from '../logos/IDX.png'

import DevFactoLogo from '../logos/DevFacto.png'
import ThePodLogo from '../logos/ThePod.png'

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
                <Divider horizontal>Gold</Divider>
                <Grid.Row verticalAlign='middle' centered>
                    <Grid.Column>
                        <Image
                            src={ResolverLogo}
                            fluid
                            as='a'
                            href='https://www.resolver.com/'
                            target='_blank'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image
                            src={IntuitLogo}
                            fluid
                            as='a'
                            href='https://www.intuit.com/'
                            target='_blank'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image
                            src={IdxLogo}
                            fluid
                            as='a'
                            href='https://www.interdynamix.com/'
                            target='_blank'/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row verticalAlign='middle' centered>
                    <Grid.Column>
                        <Image
                            src={StartupEdmontonLogo}
                            fluid
                            as='a'
                            href='https://www.startupedmonton.com/'
                            target='_blank'/>
                    </Grid.Column>
                </Grid.Row>
                <Divider horizontal>Silver</Divider>
                <Grid.Row verticalAlign='middle' centered>
                    <Grid.Column>
                        <Image
                            src={DevFactoLogo}
                            fluid
                            as='a'
                            href='https://www.devfacto.com/'
                            target='_blank'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image
                            src={ThePodLogo}
                            fluid
                            as='a'
                            href='https://www.pod-innovation.ca/'
                            target='_blank'/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Sponsors;