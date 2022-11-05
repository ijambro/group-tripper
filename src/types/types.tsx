export declare interface Trip {
  id: number;
  name: string;
  destination: string;
  startDate: Date;
  endDate: Date;
}

export declare interface Comment {
  id: number;
  fromId: number;
  fromName: string;
  date: Date;
  text: string;
  topic: string;
}
