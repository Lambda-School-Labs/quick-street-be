exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { email: "dog@dog.com", password: "puppy", is_vendor: 1 },
        { email: "cat@cat.com", password: "kitty", is_vendor: 1 },
        { email: "snake@snake.com", password: "slither", is_vendor: 1 },
        { email: "gunner@dog.com", password: "feedme", is_vendor: 0 },
        { email: "speedy@cat.com", password: "run", is_vendor: 0 },
        { email: "slimy@snake.com", password: "snake", is_vendor: 0 }
      ]);
    });
};
