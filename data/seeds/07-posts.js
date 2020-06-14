exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("posts").insert([
        {
          vendors_id: 1,
          title: "get you dog snacks here",
          description: "new puppy snacks are in",
        },
        {
          vendors_id: 2,
          title: "meow",
          description: "meow meow meow meow",
        },
        {
          vendors_id: 3,
          title: "don't let this deal slip away",
          description: "long sale here",
        },
        {
          vendors_id: 1,
          title: "Best deal of the century",
          description: "Awesome deal",
        },
      ]);
    });
};
