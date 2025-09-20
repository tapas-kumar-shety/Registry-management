db = db.getSiblingDB("mydb"); // switch to 'mydb' using mydb but we are accessing the library db so change it and again have to 
                             /// build the mongo image after that ,else connect the mongo compass and create the user there 
db.createUser({
  user: "admin",
  pwd: "admin123", // choose a strong password for production
  roles: [
    {
      role: "readWrite",
      db: "mydb",
    },
  ],
});

db.users.insertOne({
  userName: "tks",
  password: "$2b$12$KF80JYR3QU1KuhwMU9KZUOf44RiLWxvPhMLXlecXSwjcLQbqUvLbC" // already hashed
});