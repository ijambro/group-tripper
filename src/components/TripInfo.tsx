import { Trip } from "../types/types";
export declare interface TripInfoProps {
  trip: Trip;
}

export default function TripInfo(props: TripInfoProps) {
  const { trip } = props;
  const { id, name, destination, startDate, endDate } = trip;

  console.log("TripInfo: trip", trip);

  return (
    <div>
      <p>Where: </p>
      <p>{destination}</p>
      <p>Start Date: </p>
      <p>{startDate.toLocaleDateString()}</p>
      <p>End Date: </p>
      <p>{endDate.toLocaleDateString()}</p>
    </div>
  );
}
