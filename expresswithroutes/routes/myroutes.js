module.exports = function(app){
    app.get('/myroute', (req,res,next) => {
        res.send("myroute")
    })
    app.post('/myroute2', (req,res,next) => {
        res.send("myroute")
    })
    app.get('/myroute3', (req,res,next) => {
        res.send("myroute")
    })
    app.get('/myroute4', (req,res,next) => {
        res.send("myroute")
    })
}