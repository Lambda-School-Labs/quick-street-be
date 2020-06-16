exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("posts").insert([
        {
          vendors_id: 2,
          title: "meow",
          description: "meow meow meow meow",
        },
        {
          vendors_id: 3,
          title: "don't let this deal slip away",
          description: "long sale here",
          date: "1-6-20",
        },
      ]);
    });
};
