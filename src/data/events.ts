import { Event } from "../types/types";

export const events: Event[] = [
  {
    id: 1000,
    createdDate: new Date("2022-10-25T00:00:00-05:00"),
    updatedDate: new Date("2022-10-25T00:00:00-05:00"),
    userId: 1,
    name: "Thanksgiving in Durham!",
    description: "Durham, NC",
    location: {
      name: "Durham, NC",
      latitude: 36,
      longitude: -100
    },
    startDate: new Date("2022-11-22T00:00:00-05:00"),
    endDate: new Date("2022-11-25T00:00:00-05:00"),
    photoUrl:
      "https://cdn.pixabay.com/photo/2014/09/07/22/17/forest-438432_960_720.jpg"
  }
];
