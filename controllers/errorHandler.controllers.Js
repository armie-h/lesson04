const notFound = (res) => {
    res.writeHead(404, {'content-type':'application/json'})
    res.write(JSON.stringify({
        message: "route not found"
    }))
    res.end(req.url)
}

const errorHandler = {
    notFound
}

module.exports = errorHandler;
