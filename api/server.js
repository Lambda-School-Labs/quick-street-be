const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const authRouter = require("../routes/auth-router");
const vendorRouter = require("../routes/vendor-router");
const customerRouter = require("../routes/customer-router");
const postsRouter = require("../routes/posts-router");
const ordersRouter = require("../routes/orders-router");
const productsRouter = require("../routes/products-router");
const imagesRouter = require("../routes/productImages-router");

// const authRouter = require(../auth/auth-router)
// const auth = require('./routes/auth');
// const vendors = require('./routes/vendors');
// const customers = require('./routes/customers');
// const products = require('./routes/products');
// const cart = require('./routes/cart');
// const productImages = require('./routes/productImages');
// const posts = require('./routes/posts');
// const orders = require('./routes/order');

const server = express();

server.use(cors());
server.use(helmet());
server.use(morgan("combined"));
server.use(express.json());
server.use(cookieParser());

server.use("/api/auth", authRouter);
server.use("/api/vendors", vendorRouter);
server.use("/api/customers", customerRouter);
server.use("/api/posts", postsRouter);
server.use("/api/orders", ordersRouter);
server.use("/api/products", productsRouter);
server.use("/api/images", imagesRouter);

// app.use('/api/auth', auth);
// app.use('/api/vendors', vendors);
// app.use('/api/customers', customers);
// app.use('/api/products', products);
// app.use('/api/cart', cart);
// app.use('/api/product-images', productImages);
// app.use('/api/posts', posts);
// app.use('/api/orders', orders);

// server.get("/", (req, res) => {
//   res.status(200).json({ api: "up" });
// });

server.get("/test", (req, res) => {
  res.send(
    "<h1>Server Status</h1><h2>Server running succesfully.</h2><p>Deployment is all good, continue working.. nothing to see here.</p>"
  );
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

module.exports = server;
