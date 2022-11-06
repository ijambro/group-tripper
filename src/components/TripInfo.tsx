import { Trip } from "../types/types";
import "./TripInfo.css";

export declare interface TripInfoProps {
  trip: Trip;
}

export default function TripInfo(props: TripInfoProps) {
  const { trip } = props;
  const { id, name, destination, startDate, endDate } = trip;

  console.log("TripInfo: trip", trip);

  return (
    <div id="trip-info">
      {/* <span> */}
      <img src="https://cdn.pixabay.com/photo/2014/09/07/22/17/forest-438432_960_720.jpg" />
      {/* </span> */}
      {/* <span> */}
      <p>Where: </p>
      <p>{destination}</p>
      <p>Start Date: </p>
      <p>{startDate.toLocaleDateString()}</p>
      <p>End Date: </p>
      <p>{endDate.toLocaleDateString()}</p>
      {/* </span> */}
    </div>
  );
}
