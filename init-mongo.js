db = db.getSiblingDB("mydb"); // switch to 'mydb'

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