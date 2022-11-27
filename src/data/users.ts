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
      "https://media-exp1.licdn.com/dms/image/C4D03AQFFi-OH_7o34w/profile-displayphoto-shrink_100_100/0/1596142214469?e=1675296000&v=beta&t=b-edFL07h5FKrT4sZ6d8Esf2PGWRWlOrzm3FUH6eNjs"
  }
];
