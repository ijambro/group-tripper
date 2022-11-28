import { useRef, useState } from "react";

import "./Travelers.css";

export declare interface TravelersProps {
  travelerNames: Array<string>;
}

export default function Travelers(props: TravelersProps) {
  const { travelerNames } = props;
  console.log("Travelers: travelerNames", travelerNames);

  const [count, setCount] = useState(0);

  const newInviteRef = useRef<HTMLInputElement>(null);

  return (
    <div id="travelers-component">
      <div className="form">
        <input ref={newInviteRef} placeholder="Email address"></input>
        <button onClick={() => setCount(count => count + 1)}>Invite</button>
      </div>
      <ul>
        {travelerNames.map(tn => (
          <li key={tn}>{tn}</li>
        ))}
      </ul>
      (Invite click count: {count})
    </div>
  );
}
