
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        { id: , customer_id: 1, product_id: 1, count: 1, total_price: 1 },
        { id: , customer_id: 1, product_id: 1, count: 1, total_price: 2 },
        { id: , customer_id: 1, product_id: 1, count: 1, total_price: 4 },
        { id: , customer_id: 2, product_id: 1, count: 1, total_price: 2 },
        { id: , customer_id: 2, product_id: 1, count: 1, total_price: 3 },
        { id: , customer_id: 2, product_id: 1, count: 1, total_price: 4 },
        { id: , customer_id: 3, product_id: 1, count: 1, total_price: 1 },
        { id: , customer_id: 3, product_id: 1, count: 1, total_price: 2 },
        { id: , customer_id: 3, product_id: 1, count: 1, total_price: 5 },
        { id: , customer_id: 3, product_id: 1, count: 1, total_price: 6 }
      ]);
    });
};
