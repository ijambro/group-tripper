import { Comment } from "../types/types";

export const comments: Comment[] = [
  {
    id: 10000,
    createdDate: new Date("2022-10-22T00:00:00-05:00"),
    updatedDate: new Date("2022-10-22T00:00:00-05:00"),
    userId: 1,
    eventId: 1000,
    text: "Let's spend Thanksgiving together in Durham this year",
    topic: "GENERAL"
  },
  {
    id: 10001,
    createdDate: new Date("2022-10-23T00:00:00-05:00"),
    updatedDate: new Date("2022-10-23T00:00:00-05:00"),
    userId: 3,
    eventId: 1000,
    text: "I think we should go to Iceland instead!",
    topic: "GENERAL"
  },
  {
    id: 10002,
    createdDate: new Date("2022-10-24T00:00:00-05:00"),
    updatedDate: new Date("2022-10-24T00:00:00-05:00"),
    userId: 4,
    eventId: 1000,
    text: "Do they have volcanos?",
    topic: "GENERAL"
  }
];
