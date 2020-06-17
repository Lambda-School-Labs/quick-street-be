exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { email: "dog@dog.com", password: "puppy", isVendor: 1, isAdmin: 0 },
        { email: "cat@cat.com", password: "kitty", isVendor: 1, isAdmin: 0 },
        {
          email: "snake@snake.com",
          password: "slither",
          isVendor: 1,
          isAdmin: 0,
        },
        {
          email: "gunner@dog.com",
          password: "feedme",
          isVendor: 0,
          isAdmin: 0,
        },
        { email: "speedy@cat.com", password: "run", isVendor: 0, isAdmin: 0 },
        {
          email: "slimy@snake.com",
          password: "snake",
          isVendor: 0,
          isAdmin: 0,
        },
        {
          email: "test4@test.com",
          password:
            "$2a$08$dJK9A3jGlZyktH1qffWfieDWoE3qH/cZ7XD1QOG/iZh/5jPxhtLHq",
          isVendor: 1,
          isAdmin: 1,
        },
      ]);
    });
};
