import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Travelers from "../components/Travelers";
import Discussion from "../components/Discussion";
import CardView from "../components/CardView";
import Card from "../components/Card";
import TripInfo from "../components/TripInfo";

import { Comment } from "../types/types";

import { users } from "../data/users";
import { events } from "../data/events";
import { comments } from "../data/comments";
import travelerNames from "../data/travelers.json";

import tripNameIcon from "../assets/icons/zondicons/location.svg";
import travelerIcon from "../assets/icons/zondicons/user-group.svg";
import discussionIcon from "../assets/icons/zondicons/conversation.svg";
import travelIcon from "../assets/icons/zondicons/airplane.svg";
import lodgingIcon from "../assets/icons/zondicons/home.svg";
import activitiesIcon from "../assets/icons/zondicons/ticket.svg";
import "./TripScreen.css";

export default function TripScreen() {
  const eventId = 1000;
  console.log("Rendering TripScreen for event", eventId);

  const [commentsForEvent, setCommentsForEvent] = useState<Comment[]>(comments);

  const handleAddComment = (text: string, topic: string) => {
    console.log("TripScreen: handleAddComment", text, topic);

    if (text && topic) {
      // Note: comments.push doesn't re-render the Discussion component: https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
      // comments.push({
      setCommentsForEvent(existingCommentsForEvent => [
        ...existingCommentsForEvent,
        {
          id: nextCommentId(),
          createdDate: new Date(),
          updatedDate: new Date(),
          userId: 1,
          eventId: eventId,
          text: text,
          topic: topic
        }
      ]);
    }
  };

  const nextCommentId = () => {
    return commentsForEvent[commentsForEvent.length - 1].id + 1;
  };

  return (
    <div id="trip-screen">
      <CardView>
        <Card title={events[0].name || "Your Trip"} icon={tripNameIcon}>
          <TripInfo event={events[0]}></TripInfo>
        </Card>

        <Card title="Travelers" icon={travelerIcon}>
          <Travelers travelerNames={travelerNames as Array<string>} />
        </Card>

        <Card title="Discussion" icon={discussionIcon}>
          <Discussion
            users={users}
            comments={commentsForEvent}
            handleAddComment={handleAddComment}
          />
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
