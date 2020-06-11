exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { email: "dog@dog.com", password: "puppy", isVendor: 1 },
        { email: "cat@cat.com", password: "kitty", isVendor: 1 },
        { email: "snake@snake.com", password: "slither", isVendor: 1 },
        { email: "gunner@dog.com", password: "feedme", isVendor: 0 },
        { email: "speedy@cat.com", password: "run", isVendor: 0 },
        { email: "slimy@snake.com", password: "snake", isVendor: 0 },
      ]);
    });
};
