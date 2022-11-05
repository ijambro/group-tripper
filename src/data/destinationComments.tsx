import { Comment } from "../types/types";

export const destinationComments: Comment[] = [
  {
    id: 1,
    fromId: 1000,
    fromName: "Jake",
    date: new Date("2022-10-22T00:00:00-05:00"),
    text: "I think we should go to Iceland instead!",
    topic: "GENERAL"
  } as Comment
];
