import React from 'react'

const types = {
    general: "general",
    trivia: "trivia",
    food: "food",
    workshops: "workshops"
}

const colorTypes = {
    general: "rgba(0, 31, 84, 1)",
    trivia: "rgba(56, 174, 204 1)",
    food: "rgba(10, 17, 40, 1)",
    workshops: "rgba(0, 161, 228, 1)"
}

const colorTypes2 = [
    "#FFFFFF", "#F8F8F8"
]

const scheduleData = [
    { name: "Doors Open", type: types.general, time: "10:00am", description: "Doors open, Welcome Hackers!" },
    { name: "Opening Ceremonies", type: types.general, time: "11:00am", description: "Opening Presentations and Quick words from our Sponsors" },
    { name: "Hacking Begins", type: types.general, time: "12:00pm", description: "Ready, Set, HACK!" },
    { name: "Trivia I Begins", type: types.trivia, time: "12:00pm", description: "Keep an eye out for Trivia Questions!" },
    { name: "Jobber API Presentation", type: types.workshops, time: "12:00pm", description: "Jobber API Presentation" },
    { name: "Git Workshop", type: types.workshops, time: "12:30pm", description: "Git Workshop presented by DevFacto" },
    { name: "Bluetooth Low Energy Workshop", type: types.workshops, time: "2:00pm", description: "Bluetooth Low Energy Workshop presented by The Pod" },
    { name: "Supper", type: types.food, time: "5:30pm", description: "Hungry? Looks like It's time to fill up on _______!" },
    { name: "Intro to Android Architecture Workshop", type: types.workshops, time: "6:30pm", description: "Android Workshop presented by DevFacto" },
    { name: "Trivia I Ends", type: types.trivia, time: "8:00pm", description: "That's all the Trivia we have for today!" },
    { name: "Midnight Snacks", type: types.food, time: "12:00am", description: "Attention Midnight Zombies! Come grab snacks!" },
    { name: "Trivia II Begins", type: types.trivia, time: "6:00am", description: "Trivia Questions resume!" },
    { name: "Breakfast", type: types.food, time: "9:00am", description: "It's been a long night huh? Breakfast?" },
    { name: "Trivia II Ends", type: types.trivia, time: "12:00pm", description: "That's the end of all the Trivia Questions!" },
    { name: "Hacking Ends", type: types.general, time: "12:00pm", description: "Phew - that was a lot of code! You should be proud!" },
    { name: "Judging Begins!", type: types.general, time: "1:00pm", description: "Judges will be coming around, be on your best sleepy behaviour." },
    { name: "Closing Ceremonies", type: types.general, time: "3:00pm", description: "Woah that was awesome, hey? Ready for HackED?" },
];

export default class Schedule extends React.Component {
    render() {
        return (
            <div
                style={{
                    background: "#3399CC",
                    margin: 0,
                    paddingBottom: 40,
                    textAlign: "center",
                    alignContent: "center",
                }}
            >
                <h1 style={{ color: "white" }}>Schedule</h1>
                <div>
                    {scheduleData.map((value, index) => {
                        return (
                            <div style={{
                                textAlign: "left !important",
                                backgroundColor: colorTypes2[index % 2],
                                color: "black",
                                paddingTop: "20px",
                                paddingBottom: "calc(1.5em + 20px)",
                                marginLeft: "10%",
                                marginRight: "10%",
                                position: "relative"
                            }}>
                                <div style={{ fontSize: "1.3em", top: "calc(0.1em + 20px)", left: "5%", position: "absolute" }}>
                                    {value.time}
                                </div>
                                <div style={{ fontSize: "1.5em", left: "30%", position: "absolute" }}>
                                    {value.name}
                                </div>
                                <div style={{ opacity: 0.7, fontSize: "1em", top: "calc(0.25em + 20px)", right: "5%", position: "absolute" }}>
                                    {/* {value.description} */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}