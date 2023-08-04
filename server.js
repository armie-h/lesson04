const http = require("http");
const products = require("./data/products.json");
const ProductControllers = require("./controllers/product.controllers.js");
const errorHandler = require("./controllers/errorHandler.controllers.Js");
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.method)
  if (req.url == "/api/products" && req.method =="GET") {
    ProductControllers.get(request, response);
  } else if (request.url.match("//api/products/[0-9]+")) {
        ProductControllers.getByID(request, response)
  } else {
    errorHandler.notFound(res);
  }
});
server.listen(PORT);
console.log(`run server on port: ${PORT} http://127.0.0.1:${PORT}`);
