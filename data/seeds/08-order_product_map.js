exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("order_product_map")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("order_product_map").insert([
        { order_id: 1, product_id: 1, product_count: 2, product_cost: 10 },
        { order_id: 1, product_id: 2, product_count: 3, product_cost: 10 },
        { order_id: 1, product_id: 3, product_count: 4, product_cost: 10 },
        { order_id: 2, product_id: 1, product_count: 1, product_cost: 20 },
        { order_id: 2, product_id: 2, product_count: 3, product_cost: 20 },
        { order_id: 2, product_id: 3, product_count: 5, product_cost: 20 },
        { order_id: 3, product_id: 1, product_count: 4, product_cost: 30 },
        { order_id: 3, product_id: 2, product_count: 1, product_cost: 30 },
        { order_id: 3, product_id: 3, product_count: 2, product_cost: 30 },
      ]);
    });
};
