import React, {Component} from 'react';

import { Grid, Accordion } from 'semantic-ui-react'

const generalPanels = [
    {
      key: 'what-happens-at-a-hackathon',
      title: 'What happens at a hackathon?',
      content: [
        'For 24 hours, participants work together in teams of 1 to 5 people to build a project.',
        'Teams can work on hardware or software projects. There is no limit on creativity. This hackathon',
        'acts as a sort of incubator to your mini projects as it provides a focused time to work on your idea',
        'with mentors and workshops to help you along.',
      ].join(' '),
    },
    {
      key: 'know-programing',
      title: 'Do I need to know programming?',
      content: [
        'Not at all! The hackathon’s purpose is to create a welcoming and supportive environment to learn.',
        'That works for any experience level, and any type of learning. The hackathon has plenty of mentors and',
        'resources to help you work on your hack. It’s the best place to try something new.'
      ].join(' '),
    },
    {
        key: 'organizes-hacked-beta',
        title: 'Who organizes HackED Beta?',
        content: [
            'HackEDbeta is an event by the Computer Engineering Club of the University of Alberta! This will be',
            'the second time running this event and the sixth hackathon organized overall.'
        ].join(' '),
      },
      {
        key: 'is-this-a-comp',
        title: 'Is this a competition? Do I have to compete and present my work?',
        content: [
            'Our hackathon has a competition portion where you will present your work at the end, but',
            'this is NOT mandatory. If you do not feel comfortable entering the competition with your work,',
            'no worries! At the event you can opt out before presentations begin on Sunday. The most important',
            'part of this hackathon is that you come out of it having tried something new.'
        ].join(' '),
      },
  ]

  const logisticsPanels = [
    {
      key: 'do-i-have-to-be-compe',
      title: 'Do I have to be in Computer Engineering/Computer Science to participate in this hackathon?',
      content: [
        'Not at all! Any students interested in participating, regardless of skill, faculty or school is welcome to join.'
      ].join(' '),
    },
    {
      key: 'hows-wifi',
      title: 'How’s the wifi situation?',
      content: [
        'Pretty good, but it can get laggy! If you have ideas on what you wish to create already, and know',
        'what tools you need, we recommend downloading them at home the night before. This will help you kickstart',
        'your project and help to keep the WiFi fast!'
      ].join(' '),
    },
    {
        key: 'location-q',
        title: 'Where is it located? Will there be parking available?',
        content: [
            'HackED Beta will take place at Startup Edmonton (301, 10359 104 St Mercer Warehouse). The',
            'closest LRT station is MacEwan station, only a 2 minute walk away. There are parking lots',
            'within walking distance, but these lots are paid.'
        ].join(' '),
      },
      {
        key: 'what-should-i-bring',
        title: 'What should I bring?',
        content: [
            'Make sure to bring your laptop, charger and any other required tech you’ll need for your hack.',
            'You will find it helpful to bring along key items you would bring to a sleepover: pillows, blanket,',
            'toothbrush/toothpaste, deodorant, earphones, etc.'
        ].join(' '),
      },
      {
        key: 'what-shouldnt-i-bring',
        title: 'What shouldn’t I bring?',
        content: [
            'Please do not bring any drugs or alcohol. If you are not sure about bringing a certain item, please',
            'send us a message ahead of time.'
        ].join(' '),
      },
      {
        key: 'will-there-be-food',
        title: 'Will there be food?',
        content: [
            'Of course! We will provide snacks and drinks (coffee is key!) throughout the event. Dinner will be',
            'provided saturday evening, as well as breakfast and lunch on Sunday. Please let us know if you have',
            'dietary restrictions - we’ll ensure you’re covered.'
        ].join(' '),
      },
      {
        key: 'can-i-work-remotely',
        title: 'Can I work remotely?',
        content: [
            'Please contact us at hacked@compeclub.com.'
        ].join(' '),
      },
      {
        key: 'whats-the-best-group',
        title: 'What’s the best group size?',
        content: [
            'You can have up to 5 people in your group! Please keep in mind that prizes are purchased for team',
            'sizes around 3 people.'
        ].join(' '),
      },
  ]

  const applicationPanels = [
    {
      key: 'where-do-i-apply',
      title: 'Where do I apply?',
      content: 'Applications now open at https://www.eventbrite.ca/e/hacked-beta-2018-tickets-50994820882'
    },
    {
      key: 'when-is-the-deadline',
      title: 'When is the application deadline?',
      content: 'November 16, 2018',
    },
    {
        key: 'who-can-apply',
        title: 'Who can apply?',
        content: 'Any students in high school or in their 1st, 2nd or 3rd of undergraduate studies. And it must be your first or second hackathon',
      },
      {
        key: 'are-there-any-fees',
        title: 'Are there any fees?',
        content: "Only $5! This pays for your entry and some of your food throughout the hackathon!",
      },
  ]

  const hackingPanels = [
    {
      key: 'i-dont-have-a-team',
      title: 'I don’t have a team...',
      content: [
            'There will be opportunities for willing participants to look for, make or join a team before',
            'and at the hackathon through the Slack and after opening ceremonies. If you want to hack as a team,',
            'be sure to be proactive during these opportunities! Alternatively, if you have a team and want to',
            'find an additional member, these are also opportunities for your team.'
        ].join(' '),
    },
    {
      key: 'i-dont-have-any-ideas',
      title: 'I don’t have any ideas...',
      content: [
            'Don’t let this detract you from participating! There is a lot of time and inspiration at the event!',
            'A good recommendation for coming up with ideas is to think about annoyances in your everyday life that',
            'you could potentially solve. Talk to your friends and family to help you!'
        ].join(' '),
    },
    {
        key: 'any-available-resources',
        title: 'Any available resources?',
        content: [
            'Hardware resources are not provided to hackers at HackEDbeta, but APIs and software are! Feel free',
            'to bring your own hardware resources such as monitors, Arduino boards, etc. We hope you can get all',
            'the tools necessary to complete your hack!'
        ].join(' '),
      },
  ]

  const helpPanels = [
    {
      key: 'can-i-volunteer',
      title: 'Can I volunteer instead?',
      content: [
            'Of course! All help will be throughly appreciated. Reach out to us at at hacked@compeclub.com'
        ].join(' '),
    },
    {
      key: 'how-can-i-sponsor-this',
      title: 'How can I sponsor this?',
      content: [
            'If you and your company are interested in getting your APIs in hackers hand’s, face-to-face',
            'mentorship with students and general outreach with swag, prizes and/or traditional sponsorship,',
            'please reach out to us at hacked@compeclub.com and we can work out how HackED Beta can benefit you!'
        ].join(' '),
    },
    {
        key: 'ive-got-another-question',
        title: 'I’ve got another question...',
        content: [
            'Please reach out to us at hacked@compeclub.com! We’re always willing to answer your needs :)',
            'We hope to help you be the best hacker you can be.'
        ].join(' '),
      },
  ]

class Faq extends Component {
    

    render() {
        return (
            <Grid style={{
                background: "#3399CC",
                margin: 0,
                paddingBottom: 40,
            }}
            columns={3}
            stackable
            relaxed='very'
            centered>
                <Grid.Row>
                    <Grid.Column>
                        <h1 style={{textAlign: "center", color: "#FFFFFF"}}>FAQ</h1>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <h2 style={{textAlign: "center", color: "#FFFFFF"}}>General</h2>
                        <Accordion 
                            style={{color: "#f2f2f2"}} 
                            panels={generalPanels} 
                            exclusive={false} 
                            inverted
                            fluid />

                        <h2 style={{textAlign: "center", color: "#FFFFFF"}}>Logistics</h2>
                        <Accordion 
                            style={{color: "#f2f2f2"}} 
                            panels={logisticsPanels} 
                            exclusive={false} 
                            inverted
                            fluid />
                    </Grid.Column>
                    <Grid.Column width={1}/>
                    <Grid.Column>
                        <h2 style={{textAlign: "center", color: "#FFFFFF"}}>Application</h2>
                        <Accordion 
                            style={{color: "#f2f2f2"}} 
                            panels={applicationPanels} 
                            exclusive={false} 
                            inverted
                            fluid />

                        <h2 style={{textAlign: "center", color: "#FFFFFF"}}>Hacking</h2>
                        <Accordion 
                            style={{color: "#f2f2f2"}} 
                            panels={hackingPanels} 
                            exclusive={false} 
                            inverted
                            fluid />

                        <h2 style={{textAlign: "center", color: "#FFFFFF"}}>Help!</h2>
                        <Accordion 
                            style={{color: "#f2f2f2"}} 
                            panels={helpPanels} 
                            exclusive={false} 
                            inverted
                            fluid />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Faq;