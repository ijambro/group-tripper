import { ReactNode } from "react";
import "./CardView.css";

export declare interface CardViewProps {
  children: ReactNode;
}
export default function CardView(props: CardViewProps) {
  const { children } = props;

  return <div className="card-view">{children}</div>;
}
