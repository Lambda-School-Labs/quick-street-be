exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("orders")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("orders").insert([
        { customer_id: 1, product_id: 1, total_price: 7658, date_of_order: "1/1/20" },
        { customer_id: 2, product_id: 2, total_price: 235, date_of_order: "1/1/20" },
        { customer_id: 3, product_id: 3, total_price: 18, date_of_order: "1/1/20" },
        { customer_id: 4, product_id: 1, total_price: 7658, date_of_order: "7/1/20" },
        { customer_id: 4, product_id: 2, total_price: 235, date_of_order: "8/1/20" },
        { customer_id: 4, product_id: 3, total_price: 18, date_of_order: "9/1/20" },
      ]);
    });
};
