const productModel = require("../model/products.model");

async function get(request, response) {
  try {
    const products = await productModel.find();
    response.writeHead(200, { "content-type": "application/json" });
    response.write(JSON.stringify(products));
    response.end(request.url);
  } catch (error) {
    console.log(error);
  }
}

async function get(request, response) {
  try {
    const products = await productModel.create({
      id: Date.now(),
      name: "new name",
      description: "new description",
      price: 5200,
    });
    response.writeHead(201, { "content-type": "application/json" });
    response.write(JSON.stringify({ message: "product created successfully" }));
    response.end(request.url);
  } catch (error) {
    console.log(error);
  }
}
async function getByID(request, response) {
  try {
    // const [,,,id] = req.url.split("/");
    const id = request.url.split("/")[3];
    const product = await productModel.findByID(id);
    if (!product) {
      response.writeHead(404, { "content-type": "application/json" });
      response.write(JSON.stringify({ message: "Not found any product" }));
      response.end(req.url);
    }
  } catch (error) {}
}

const ProductControllers = {
  get,
  getByID,
};
module.exports = ProductControllers;
