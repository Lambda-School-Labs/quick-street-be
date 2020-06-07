const db = require("../data/db-config");

module.exports = {
  findBy,
  add,
  find,
  updatePost,
  deletePost
};

function findBy(filter) {
  return db("posts").where(filter);
}

function add(newPost) {
  return db("posts").insert(newPost);
}

function find() {
  return db("posts").select("*");
}

function updatePost(id, data) {
  return db("posts")
    .where({ id })
    .update(data)
    .returning("*");
}

function deletePost(id) {
  return db("posts")
    .where({ id })
    .del();
}
