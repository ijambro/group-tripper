import { useState } from "react";

export declare interface TravelersProps {
  travelerNames: Array<string>;
}

export default function Travelers(props: TravelersProps) {
  const { travelerNames } = props;
  console.log("Travelers: travelerNames", travelerNames);

  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count => count + 1)}>
        Click to add travelers: {count}
      </button>

      <ul>
        {travelerNames.map(tn => (
          <li key={tn}>{tn}</li>
        ))}
      </ul>
    </>
  );
}
