const Url = require('../models/Url');

var { nanoid } = require("nanoid");

exports.store = (req, res) => {
    console.log("Storing url")
    let url = {};
    url.original = req.body.originalUrl;
    url.new = "http://localhost:4000/" + nanoid(5)
    url.new.replace('+','')
    Url.create(url).then((id) => {
        res.redirect('/');
    });
}

exports.match = (req, res) => {
    console.log("Matching url")
    let code = "http://localhost:4000/"
    code += req.params.id
    if(code.charAt(code.length-1) === '+'){
        console.log("Going to info panel")
        code = code.slice(0, -1)
        Url.findByShortened(code).then((url) => {
            console.log(url)
            res.render('homepage/index', {urls: url});;
        })
    }
    else{
        console.log(code)
        Url.findByShortened(code).then((url) => {
            console.log(url)
            let count = url.redirects
            count+= 1
            Url.updateRedirected(url.id,count ).then((urlNEW) => {
                res.redirect(url.original);
            })
        })
    }
    

}