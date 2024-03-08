    // Cách tạo server
// const http = require('http');

// server = http.createServer(()=>{
//     console.log('Xin chào các bạn!');
// })

// server.listen(3000)

// Tạo server bằng express

const express = require('express');
const app = express();
const port = 3000;
app.listen(port,()=>{
    console.log(`server đang chạy cổng : ${port}`);
});

// router 

app.get('/', function(req, res,next){
    console.log('Home');
    res.send('<p>Đây là trang home</p>')
})
app.get('/product', function(req, res,next){
    console.log('product');
    res.send('<p>Đây là trang admin</p>')
})
app.get('/product/:id', function(req, res,next){
    console.log('Chi tiết sản phẩm');
    res.send(`<p>Đây là trang chi tiết sản phẩm id là: ${req.params.id} </p>` )
})