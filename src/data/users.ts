import { User } from "../types/types";

export const users: User[] = [
  {
    id: 1,
    createdDate: new Date(),
    updatedDate: new Date(),
    name: "Jake",
    email: "jakepalmer@duck.com",
    passwordHash: "abcdef",
    photoUrl:
      "https://lh3.googleusercontent.com/ogw/AOh-ky0q3xUxlqnm9AWyHT1ebiMKgX7shWiPY6t_Jy3c"
  },
  {
    id: 2,
    createdDate: new Date(),
    updatedDate: new Date(),
    name: "Sarah",
    email: "sarah.hiller@gmail.com",
    passwordHash: "abcdef",
    photoUrl:
      "https://lh3.googleusercontent.com/contacts/ABsqplvehIN_DgMuKWmszCyAEkiDTgZBH-K44GwiD-2WqmR-xRSlSqH_"
  },
  {
    id: 3,
    createdDate: new Date(),
    updatedDate: new Date(),
    name: "Leon",
    email: "leon@duck.com",
    passwordHash: "abcdef"
  },
  {
    id: 4,
    createdDate: new Date(),
    updatedDate: new Date(),
    name: "Adrian",
    email: "adrian@duck.com",
    passwordHash: "abcdef"
  },
  {
    id: 5,
    createdDate: new Date(),
    updatedDate: new Date(),
    name: "Shira",
    email: "shira@duck.com",
    passwordHash: "abcdef"
  }
];
