const inventors = [
    { id:1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { id:2, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { id:3, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { id:4, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { id:5, first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { id:6, first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }
    ];

const express = require('express');
const app = express();
const port = 3000;
// fixx body undefined
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get('/inventors', (req,res)=>{
    let list = '<ul>Danh sách nhà khoa học'

    // const li = inventors.map((item)=>{
    //     `<li>${item.last}</li>`
    // }).join(' ')
    inventors.forEach((item)=>{
        list += `<a href="/inventors/${item.id}"><li>${item.last}</li></a>`
    })

    list+='</ul>'
    res.send(list)
})

app.get('/inventors/:id', (req, res)=>{
    const id = req.params.id
    const item = inventors.find(e=>e.id == id)
    const age = item.passed - item.year
    const infor = `<h2>Name: ${item.last} ${item.first} <br> Age:${age}</h2>`
    res.send(infor)
})
app.get('/inventors', (req, res)=>{
   
    const id = req.query
    const item = inventors.find(e=>e.id == id)
    const age = item.passed - item.year
    const infor = `<h2>Name: ${item.last} ${item.first} <br> Age:${age}</h2>`
    res.send(infor)
})
app.get('/add', (req, res)=>{
   
    
   const add = `<h2>Thêm mới</h2> <form action="/inventor" method="post">
   <label for="">Họ và tên</label>
   <input type="text" name="last"> <br>
   <label for="">Họ và tên</label>
   <input type="text" name="first"> <br>
   <label for="">Year</label>
   <input name="year" type="text" name="" id=""> <br>
   <label for="">Passed</label>
   <input name="passed" type="text"> <br>
   <button type="submit">Add inventor</button>
</form>`
    res.send(add)
})
app.post('/inventor',(req, res) => {
    let newpro = req.body
    newpro.id = inventors.length + 1;
    inventors.push(newpro)
    res.redirect('/inventors')
})

app.listen(port)



