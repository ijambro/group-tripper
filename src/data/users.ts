import { User } from "../types/types";

export const users: User[] = [
  {
    id: 1,
    createdDate: new Date(),
    updatedDate: new Date(),
    firstName: "Jake",
    lastName: "Palmer",
    email: "jakepalmer@duck.com",
    passwordHash: "abcdef",
    photoUrl:
      "https://lh3.googleusercontent.com/ogw/AOh-ky0q3xUxlqnm9AWyHT1ebiMKgX7shWiPY6t_Jy3c"
  },
  {
    id: 2,
    createdDate: new Date(),
    updatedDate: new Date(),
    firstName: "Sarah",
    lastName: "Palmer",
    email: "sarah@duck.com",
    passwordHash: "abcdef",
    photoUrl:
      "https://lh3.googleusercontent.com/contacts/ABsqplvehIN_DgMuKWmszCyAEkiDTgZBH-K44GwiD-2WqmR-xRSlSqH_"
  },
  {
    id: 3,
    createdDate: new Date(),
    updatedDate: new Date(),
    firstName: "Leon",
    lastName: "Palmer",
    email: "leon@duck.com",
    passwordHash: "abcdef"
  },
  {
    id: 4,
    createdDate: new Date(),
    updatedDate: new Date(),
    firstName: "Adrian",
    lastName: "Palmer",
    email: "adrian@duck.com",
    passwordHash: "abcdef"
  },
  {
    id: 5,
    createdDate: new Date(),
    updatedDate: new Date(),
    firstName: "Shira",
    lastName: "Palmer",
    email: "shira@duck.com",
    passwordHash: "abcdef"
  }
];
