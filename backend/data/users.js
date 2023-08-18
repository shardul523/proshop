import bcrypt from "bcrypt";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John Doe",
    email: "john@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Joan Doe",
    email: "joan@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
