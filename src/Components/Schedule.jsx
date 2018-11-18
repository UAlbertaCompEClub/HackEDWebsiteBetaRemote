import React from 'react'
import { Container, List } from 'semantic-ui-react'

const iconTypes = {
    general: "calendar alternate",
    trivia: "gift",
    food: "utensils",
    workshops: "graduation cap"
}

const scheduleData = [
    { name: "Doors Open", type: iconTypes.general, time: "10:00 am Saturday", description: "Doors open, Welcome Hackers!" },
    { name: "Opening Ceremonies", type: iconTypes.general, time: "11:00 am Saturday", description: "Opening Presentations and Quick words from our Sponsors" },
    { name: "Hacking Begins", type: iconTypes.general, time: "12:00 pm Saturday", description: "Ready, Set, HACK!" },
    { name: "Trivia I Begins", type: iconTypes.trivia, time: "12:00 pm Saturday", description: "Keep an eye out for Trivia Questions in Slack!" },
    { name: "Jobber API Presentation", type: iconTypes.workshops, time: "12:00 pm Saturday", description: "Learn about how to use Jobber's API!" },
    { name: "Servus Prize Presentation", type: iconTypes.workshops, time: "12:20 pm Saturday", description: "Learn about how to win Servus Credit Union's prize!" },
    { name: "Git Workshop", type: iconTypes.workshops, time: "12:30 pm Saturday", description: "Git Workshop presented by DevFacto" },
    { name: "Bluetooth Low Energy", type: iconTypes.workshops, time: "2:00 pm Saturday", description: "Bluetooth Low Energy Workshop presented by The Pod" },
    { name: "Intro to Vue.js", type: iconTypes.workshops, time: "3:30 pm Saturday", description: "Vue.js Workshop presented by DevFacto" },
    { name: "Fine-Tuning Your JavaScript Code", type: iconTypes.workshops, time: "4:30 pm Saturday", description: "JavaScript Workshop presented by Intuit" },
    { name: "Getting Started with AR Development Using Unity", type: iconTypes.workshops, time: "6:00 pm Saturday", description: "AR Development Using Unity Workshop presented by Megnath Ramesh" },
    { name: "Supper", type: iconTypes.food, time: "6:00 pm Saturday", description: "Hungry? Looks like It's time to fill up on _______!" },
    { name: "Intro to React", type: iconTypes.workshops, time: "6:45 pm Saturday", description: "React Workshop presented by Robin Verleun" },
    { name: "Intro to Android Architecture", type: iconTypes.workshops, time: "7:30 pm Saturday", description: "Android Workshop presented by DevFacto" },
    { name: "Trivia I Ends", type: iconTypes.trivia, time: "8:00 pm Saturday", description: "That's all the Trivia we have for today!" },
    { name: "Life after University", type: iconTypes.workshops, time: "9:00 pm Saturday", description: "A life after Uni talk by Clinton Wong" },
    { name: "Midnight Snacks", type: iconTypes.food, time: "12:00 am Sunday", description: "Attention Midnight Zombies! Come grab snacks!" },
    { name: "Trivia II Begins", type: iconTypes.trivia, time: "6:00 am Sunday", description: "Trivia Questions resume!" },
    { name: "Breakfast", type: iconTypes.food, time: "9:00 am Sunday", description: "It's been a long night huh? Breakfast?" },
    { name: "Trivia II Ends", type: iconTypes.trivia, time: "12:00 pm Sunday", description: "That's the end of all the Trivia Questions!" },
    { name: "Hacking Ends", type: iconTypes.general, time: "12:00 pm Sunday", description: "Phew - that was a lot of code! You should be proud!" },
    { name: "Lunch Time!", type: iconTypes.general, time: "12:00 pm Sunday", description: "Time for some food!!!" },
    { name: "Judging Begins!", type: iconTypes.general, time: "12:30 pm Sunday", description: "Judges will be coming around, be on your best sleepy behaviour." },
    { name: "Closing Ceremonies", type: iconTypes.general, time: "3:00 pm Sunday", description: "Woah that was awesome, hey? Ready for HackED?" },
];

export default class Schedule extends React.Component {
    
    render() {
        const scheduleList = scheduleData.map((value) =>
            <List.Item>
                <List.Icon verticalAlign='middle' name={value.type} />
                <List.Content>
                    <List.Header>{value.time} - {value.name}</List.Header>
                    <List.Description>
                        {value.description}
                    </List.Description>
                </List.Content>
            </List.Item>
        )

        return (
            <div style={{background: '#3399CC', paddingBottom: '40px'}}>
                <Container>
                    <h1 style={{textAlign: "center", color: "#FFFFFF"}}>Schedule</h1>
                    <List inverted divided selection size='massive'>
                        {scheduleList}
                    </List>
                </Container>
            </div>
        );
    }
}
