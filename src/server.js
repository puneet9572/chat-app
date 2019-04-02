const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname,'../public');
let app = express();

app.use(express.static(publicPath));

app.listen(process.env.PORT||4500, ()=>{
    console.log('server is live');
    
})
console.log(publicPath);

