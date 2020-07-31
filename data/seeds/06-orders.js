exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("orders")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("orders").insert([
        { user_id: 4, business_name: "doggy", subtotal: 7658, date_of_order: "1/1/20" },
        { user_id: 4, business_name: "kitty", subtotal: 235, date_of_order: "1/1/20" },
        { user_id: 4, business_name: "kitty", subtotal: 18, date_of_order: "1/1/20" },
        { user_id: 8, business_name: "doggy", subtotal: 7658, date_of_order: "7/1/20" },
        { user_id: 8, business_name: "kitty", subtotal: 235, date_of_order: "8/1/20" },
        { user_id: 8, business_name: "doggy", subtotal: 18, date_of_order: "9/1/20" },
      ]);
    });
};
