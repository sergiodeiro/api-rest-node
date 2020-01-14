module.exports = function(req,res,next) {
    res.header('Acess-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE')
    res.header('Acess-Control-Allows-Headers', 'Origin, X-Request-With, Content-Type, Accept')
    next()
}