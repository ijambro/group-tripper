import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Travelers from "./components/Travelers";
import Discussion from "./components/Discussion";
import Header from "./components/Header";
import CardView from "./components/CardView";
import Card from "./components/Card";
import TripInfo from "./components/TripInfo";

// import { Trip } from "./types/types";

import { tripInfo } from "./data/tripInfo";
import { destinationComments } from "./data/destinationComments";
import travelerNames from "./data/travelers.json";

// import tripNameIcon from "./assets/icons/conversation-svgrepo-com.svg";
import tripNameIcon from "./assets/icons/zondicons/location.svg";
// import travelerIcon from "./assets/icons/profile-svgrepo-com.svg";
import travelerIcon from "./assets/icons/zondicons/user-group.svg";
// import discussionIcon from "./assets/icons/chat-svgrepo-com.svg";
import discussionIcon from "./assets/icons/zondicons/conversation.svg";
// import travelIcon from "./assets/icons/travel-svgrepo-com.svg";
import travelIcon from "./assets/icons/zondicons/airplane.svg";
import lodgingIcon from "./assets/icons/zondicons/home.svg";
import activitiesIcon from "./assets/icons/zondicons/ticket.svg";

function App() {
  // console.log("Rendering App");

  return (
    <div className="App">
      <Header></Header>

      <CardView>
        <Card title={tripInfo[0].name} icon={tripNameIcon}>
          <TripInfo trip={tripInfo[0]}></TripInfo>
        </Card>

        <Card title="Travelers" icon={travelerIcon}>
          <Travelers travelerNames={travelerNames as Array<string>} />
        </Card>

        <Card title="Discussion" icon={discussionIcon}>
          <Discussion comments={destinationComments} />
        </Card>

        <Card title="Travel / Airfare" icon={travelIcon}>
          <p>Travel content goes here</p>
        </Card>

        <Card title="Lodging" icon={lodgingIcon}>
          <p>Lodging content goes here</p>
        </Card>

        <Card title="Activities / Excursions" icon={activitiesIcon}>
          <p>Activities content goes here</p>
        </Card>
      </CardView>
    </div>
  );
}

export default App;
