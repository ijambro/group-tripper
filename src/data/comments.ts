import { Comment } from "../types/types";

export const comments: Comment[] = [
  {
    id: 10000,
    createdDate: new Date("2022-10-22T00:00:00-05:00"),
    updatedDate: new Date("2022-10-22T00:00:00-05:00"),
    userId: 1,
    eventId: 1000,
    text: "I think we should go to Iceland instead!",
    topic: "GENERAL"
  }
];
