exports.up = function(knex) {
  return knex.schema
    .createTable("vendors", tbl => {
      tbl.increments();
      tbl.text("business_name", 255).notNullable();
      tbl
        .text("email", 255)
        .unique()
        .notNullable();
      tbl.text("password", 255).notNullable();
      tbl
        .text("phone_number", 255)
        .unique()
        .notNullable();
      tbl.text("address", 1000).notNullable();
      tbl.integer("zip_code").notNullable();
      tbl.text("description", 1000).notNullable();
      tbl.text("vendor_category", 255);
      tbl.text("bulletin", 1000);
    })

    .createTable("products", tbl => {
      tbl.increments();
      tbl
        .integer("vendor_id")
        .unsigned()
        .notNullable()
        .references("vendors.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.text("name", 255).notNullable();
      tbl.text("description", 1000).notNullable();
      tbl.text("product_category", 255).notNullable();
      tbl.text("diet_cateogry", 255).notNullable();
      tbl.float("price").notNullable();
    })

    .createTable("customers", tbl => {
      tbl.increments();
      tbl.text("customer_name", 255).notNullable();
      tbl
        .text("email", 255)
        .unique()
        .notNullable();
      tbl.text("password", 255).notNullable();
      tbl
        .text("phone_number", 255)
        .unique()
        .notNullable();
      tbl.text("address", 1000).notNullable();
      tbl.integer("zip_code").notNullable();
    })

    .createTable("vendor_customer_map", tbl => {
      tbl
        .integer("vendors_id")
        .unsigned()
        .notNullable()
        .references("vendors.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl
        .integer("customer_id")
        .unsigned()
        .notNullable()
        .references("customers.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("orders", tbl => {
      tbl.increments();
      tbl
        .integer("customer_id")
        .unsigned()
        .notNullable()
        .references("customers.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl
        .integer("product_id")
        .unsigned()
        .notNullable()
        .references("products.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      tbl.integer("count");
      tbl.float("total_price");
    })

    .createTable("posts", tbl => {
      tbl.increments();
      tbl
        .integer("vendors_id")
        .unsigned()
        .notNullable()
        .references("vendors.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.text("title", 255).notNullable();
      tbl.text("description", 1000).notNullable();
      tbl.datetime("time_of_post");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("vendors")
    .dropTableIfExists("products")
    .dropTableIfExists("customers")
    .dropTableIfExists("vendor_customer_map")
    .dropTableIfExists("orders")
    .dropTableIfExists("posts");
};
