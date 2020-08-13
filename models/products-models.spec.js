const db = require('../data/db-config.js');
const Products = require('./products-models.js');
const server = require('../api/server.js');
const request = require('supertest');

describe("producst models", () => {
  

describe("GET /", () => {
    it("is using right testing environment", () => {
      expect(process.env.NODE_ENV).toBe("testing");
    });
  });

  describe("GET /api/products", () => {
    it("gets products", async () => {
      const res = await Products.getProducts();
      const length = res.length
      expect(res).toHaveLength(length);
    });
  });

  describe("GET /api/products", () => {
    it("gets user by id", async () => {
      const res = await Products.findProductById(2);
      expect(res.name).toBe("catnip");
      expect(res.description).toBe("time to get high kitty");
    });
  });

  describe("GET /api/products", () => {
    it("gets user by id", async () => {
      const res = await Products.findProductById(1);
      expect(res.name).toBe("bone");
      expect(res.description).toBe("dog bone treat");
    });
  });

  describe("GET /api/products", () => {
    it("gets user by id", async () => {
      const res = await Products.findProductById(3);
      expect(res.name).toBe("mouse");
      expect(res.description).toBe("dinner");
    });
  });

  describe("DELETE a product", () => {
  it('should remove a snack from the db', async () => {
    await Products.deleteProduct(4)
    const newProductsList = await Products.getProducts()
    // console.log('SNACKS', newProductsList)
    const length = newProductsList.length
    expect(newProductsList.length).toBe(length)
  })
})

describe("ADD a product", () => {
  it("should add a product", async () => {
    await Products.addProduct({
      vendor_id: 3,
      name: "TEST",
      price: 16,
    })
    const newProducts = await db('products')
    let productCount = newProducts.length
    expect(newProducts.length).toBe(productCount)
  })
})

})