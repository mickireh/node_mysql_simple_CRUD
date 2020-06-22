module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    // Create a new User
    app.post("/users", users.create);
  
    // Retrieve all Users
    app.get("/users", users.findAll);
  
    // Retrieve a single User with customerId
    app.get("/users/:userId", users.findOne);
  
    // Update a User with customerId
    app.put("/users/:userId", users.update);
  
    // Delete a User with customerId
    app.delete("/users/:userId", users.delete);
  
    // Create a new User
    app.delete("/users", users.deleteAll);
};