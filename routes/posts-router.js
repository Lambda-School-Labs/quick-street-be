const express = require("express");
const bcrypt = require("bcryptjs");
const Posts = require("../models/posts-models");

const restrict = require("../middleware/restrict");
const router = express.Router();

// ALL posts

router.get("/", restrict, (req, res) => {
  Posts.find()
    .then(posts => {
      res.json(posts);
    })
    .catch(err => {
      res.json(err);
    });
});

// by post ID
router.get("/:id", restrict, (req, res) => {
  const id = req.params.id;
  console.log("is this the payload", req.token.subject);
  Posts.findBy({ id })
    .first()
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      res.send(err);
    });
});

// ADD post
router.post("/", restrict, (req, res) => {
  const post = req.body;
  Posts.add(post)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status().json(err);
    });
});

// UPDATE post
router.post("/:id", restrict, (req, res) => {
  const id = req.params.id;
  const updatedPost = req.body;
  console.log(id, updatedPost);
  Posts.updatePost(id, updatedPost)
    .then(updatedPost => {
      res.json(updatedPost);
    })
    .catch(err => {
      res.send(err);
    });
});

// DELETE post

router.delete("/:id", restrict, (req, res) => {
  const id = req.params.id;

  Posts.deletePost(id)
    .then(post => {
      res.json(post); // add delete confirmation message
    })
    .catch(err => {
      res.send(err);
    });
});
// OLD

// const express = require("express");
// const {
//   getAllPosts,
//   getPost,
//   addPost,
//   updatePost,
//   deletePost
// } = require("../controllers/posts");

// const Posts = require("../models/Post");
// const advancedResults = require("../middleware/advancedResults");

// const { protect } = require("../middleware/auth");

// const router = express.Router({ mergeParams: true });

// router
//   .route("/")
//   .get(
//     advancedResults(Posts, {
//       path: "vendor",
//       select: "title description date"
//     }),
//     getAllPosts
//   )
//   .post(protect, addPost); // POST /api/v1.0/vendors/:vendorId/posts

// router
//   .route("/:id")
//   .get(getPost)
//   .put(protect, updatePost) // PUT /api/v1.0/post/:id
//   .delete(protect, deletePost); // DELETE /api/v1.0/vendors/:vendorId/posts

module.exports = router;
