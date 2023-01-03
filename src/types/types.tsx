export declare interface User {
  id: number;
  createdDate: Date;
  updatedDate: Date;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  photoUrl?: string;
}

export declare interface Event {
  id: number;
  createdDate: Date;
  updatedDate: Date;
  userId: number;
  name?: string;
  description?: string;
  location?: {
    name: string;
    latitude: number;
    longitude: number;
  };
  startDate?: Date;
  endDate?: Date;
  photoUrl?: string;
  invited?: [
    {
      userId: string;
      status: string;
      invitedDate: Date;
      updatedDate: Date;
    }
  ];
}

export declare interface Comment {
  id: number;
  createdDate: Date;
  updatedDate: Date;
  userId: number;
  eventId: number;
  text: string;
  topic: string;
}
