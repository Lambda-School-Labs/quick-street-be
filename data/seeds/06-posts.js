
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, vendor_id: 1, title: "", description: "", time_of_post: },
        {id: 2, vendor_id: 1, title: "", description: "", time_of_post: },
        {id: 3, vendor_id: 1, title: "", description: "", time_of_post: }
      ]);
    });
};
