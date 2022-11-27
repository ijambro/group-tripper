import { Event } from "../types/types";
import "./TripInfo.css";

export declare interface TripInfoProps {
  event: Event;
}

export default function TripInfo(props: TripInfoProps) {
  const { event } = props;

  console.log("TripInfo component: event", event);

  return (
    <div id="trip-info">
      <img src={event.photoUrl ? event.photoUrl : "/vite.svg"} />
      <p>Where: </p>
      <p>{event.location?.name}</p>
      <p>Start Date: </p>
      <p>{event.startDate?.toLocaleDateString()}</p>
      <p>End Date: </p>
      <p>{event.endDate?.toLocaleDateString()}</p>
      {/* </span> */}
    </div>
  );
}
