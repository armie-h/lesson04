const products = require("./..data/products");
async function find() {
    return new Promise((resolve, reject ) => {
        resolve(products)
    })
}
async function findByID() {
    return new Promise((resolve, reject ) => {
        resolve(products.find(product => product.id == id))
    })
}
async function create(product) {
    return new Promise((resolve, reject ) => {
        products.push(product)
    })
}

const productModels = {
    find,
    findByID,
    create
}

module.exports = productModels