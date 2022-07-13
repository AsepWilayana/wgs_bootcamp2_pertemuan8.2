const http = require('http');
const fs = require('fs');
const express = require('express')
const app = express();
const port = 3000


app.get('/', (req, res) =>{
    res.sendFile('./index.html', {root: __dirname})
})
app.get('/contact', (req, res) =>{
    res.sendFile('./contact.html', {root: __dirname})
})
app.get('/about', (req, res) =>{
    res.sendFile('./about.html', {root: __dirname})
})
app.get('/product/:id', (req, res) =>{
    res.send('product id :' + req.params.id + '<br/>' + 'category id :' + req.query.category)
})
app.use('/', (req,res) => {
    res.status(404).send('page not found : 404');
})

// function page(page,res) {
//     fs.readFile(page, (err,data) => {
//         if(err){
//             res.writeHead(404);
//             res.write('Error : page not found');
//         }else{
//             res.write(data);
//         }
//     })
//     res.end();
// }

// http.createServer((req, res) => {
//     const url = req.url;
//     console.log(url);

//     if(url === '/about'){
//         page('./about.html', res);
//     } else if(url ==='/contact'){
//         page('./contact.html', res)
//     }else{
//         page('./index.html', res)
//     }

//     res.writeHead(200,{
//         'Content-Type' : 'text/html'
//     })
// })

.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})