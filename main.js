const app = require("express")();

app.use(require("express-prom-bundle")({includeMethod: true}));
app.use(require('body-parser').raw({ 'type': '*/*' }))
app.post('/', (req, res) => {
    var body = req.body;
    if (!body)
        return;
    var type = typeof body;
    if (type === 'String') {
        console.log(req.body)
        return;
    }
    if (type === 'object')
        if (body instanceof Buffer)
            console.log(req.body.toString())
    res.send('ok');
})

app.listen(80);
console.log("Logger listening on 80!");
