// Latihan 6.15
var http = require('http') 
var express = require('express') 
var app = express() 
var bodyParser = require('body-parser'); 
var mysql = require('mysql') 

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 

app.use((req, res, next)=>{     
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');     
    if (req.method === "OPTIONS") { 
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-RequestedWith, Content-Type, Accept, Authorization');         
        return res.status(200).json({}); 
    }     
    next(); 
});  

var conn = mysql.createConnection({     
     host : "localhost", //nama host database mysql     
     user : "root", //user mysql     
     password : "", //password mysql     
     database : "myDB" 
 })  

 conn.connect((err)=>{     
    if(err)         
       console.log("Problem with MySQL " + err);     
   else{         
       console.log("Connected with Database"); 
         } 
 })  

 app.post('/myguests', (req, res)=>{    
      var firstname = req.body.firstname     
      var lastname = req.body.lastname     
      var email = req.body.email     
      var query = "INSERT INTO myguests (firstname, lastname, email) VALUES('" + firstname + "','" + lastname + "','" + email + "')"     
 conn.query(query, (err, result)=>{         
        if(err)             
        res.json(err)        
        else             
        res.json(result) 
     }) 
}) 

app.delete('/myguests/:id', (req, res)=>{     
     var id = req.params.id 
     var query = "DELETE FROM myguests WHERE id = " + id     
     conn.query(query, (err, result)=>{         
        if(err)             
        res.json(err)         
        else             
        res.json(result) 
     }) 
})

app.put('/myguests/:id', (req, res)=>{     
     var id = req.params.id     
     var firstname = req.body.firstname     
     var lastname = req.body.lastname     
     var email = req.body.email 
     var query = "UPDATE myguests SET firstname = '" + firstname + "', lastname = '" + lastname + "', email = '" + email + "' WHERE id = " + id     
     conn.query(query, (err, result)=>{         
         if(err)             
         res.json(err)         
         else             
         res.json(result) 
     }) 
}) 

app.get('/myguests', (req, res)=>{     
    var query = "SELECT * FROM myguests LIMIT 10"     
    conn.query(query, (err, rows)=>{         
        res.json(rows) 
    }) 
}) 

http.createServer(app) 
.listen(8000, ()=>{     
     console.log('Server is running on port 8000') 
}) 


// Latihan 6.14
// var http = require('http') 
// var express = require('express') 
// var app = express() 
// var bodyParser = require('body-parser'); 
// var mysql = require('mysql') 

// app.use(bodyParser.urlencoded({ extended: false })); 
// app.use(bodyParser.json()); 

// var conn = mysql.createConnection({     
//     host : "localhost", //nama host database mysql     
//     user : "root", //user mysql     
//     password : "", //password mysql     
//     database : "myDB" 
// })  

// conn.connect((err)=>{     
//     if(err)         
//         console.log("Problem with MySQL " + err);     
//     else{         
//         console.log("Connected with Database"); 
//     } 
// })  

// app.post('/myguests', (req, res)=>{    
//      var firstname = req.body.firstname     
//      var lastname = req.body.lastname     
//      var email = req.body.email     
//      var query = "INSERT INTO MyGuests (firstname, lastname, email) VALUES('" 
// + firstname + "','" + lastname + "','" + email + "')"     
// conn.query(query, (err, result)=>{         
//     if(err)             
//     res.json(err)        
//     else             
//     res.json(result) 
//     }) 
// }) 

// app.delete('/myguests/:id', (req, res)=>{     
//     var id = req.params.id 
//     var query = "DELETE FROM MyGuests WHERE id = " + id     
//     conn.query(query, (err, result)=>{         
//         if(err)             
//         res.json(err)         
//         else             
//         res.json(result) 
//     }) 
// })

// app.put('/myguests/:id', (req, res)=>{     
//     var id = req.params.id     
//     var firstname = req.body.firstname     
//     var lastname = req.body.lastname     
//     var email = req.body.email 
//     var query = "UPDATE MyGuests SET firstname = '" + firstname + "', lastname = '" + lastname + "', email = '" + email + "' WHERE id = " + id     
//     conn.query(query, (err, result)=>{         
//         if(err)             
//         res.json(err)         
//         else             
//         res.json(result) 
//     }) 
// }) 
 
// http.createServer(app) 
// .listen(8000, ()=>{     
//     console.log('Server is running on port 8000') 
// }) 


// Latihan 6.13
// var http = require('http') 
// var express = require('express') 
// var app = express() 
// var bodyParser = require('body-parser'); 
// var mysql = require('mysql') 

// app.use(bodyParser.urlencoded({ extended: false })); 
// app.use(bodyParser.json()); 

// var conn = mysql.createConnection({     
//     host : "localhost", //nama host database mysql     
//     user : "root", //user mysql     
//     password : "", //password mysql     
//     database : "myDB" 
// })  

// conn.connect((err)=>{     
//     if(err)         
//         console.log("Problem with MySQL " + err);     
//     else{         
//         console.log("Connected with Database"); 
//     } 
// })  

// app.post('/myguests', (req, res)=>{    
//      var firstname = req.body.firstname     
//      var lastname = req.body.lastname     
//      var email = req.body.email     
//      var query = "INSERT INTO MyGuests (firstname, lastname, email) VALUES('" 
// + firstname + "','" + lastname + "','" + email + "')"     
// conn.query(query, (err, result)=>{         
//     if(err)             
//     res.json(err)        
//     else             
//     res.json(result) 
//     }) 
// }) 

// app.delete('/myguests/:id', (req, res)=>{     
//     var id = req.params.id 
//     var query = "DELETE FROM MyGuests WHERE id = " + id     
//     conn.query(query, (err, result)=>{         
//         if(err)             
//         res.json(err)         
//         else             
//         res.json(result) 
//     }) 
// })
 
// http.createServer(app) 
// .listen(8000, ()=>{     
//     console.log('Server is running on port 8000') 
// }) 



// Latihan 6.12
// var http = require('http') 
// var express = require('express') 
// var app = express() 
// var bodyParser = require('body-parser'); 
// var mysql = require('mysql') 

// app.use(bodyParser.urlencoded({ extended: false })); 
// app.use(bodyParser.json()); 

// var conn = mysql.createConnection({     
//     host : "localhost", //nama host database mysql     
//     user : "root", //user mysql     
//     password : "", //password mysql     
//     database : "myDB" 
// })  

// conn.connect((err)=>{     
//     if(err)         
//         console.log("Problem with MySQL " + err);     
//     else{         
//         console.log("Connected with Database"); 
//     } 
// })  

// app.post('/myguests', (req, res)=>{    
//      var firstname = req.body.firstname     
//      var lastname = req.body.lastname     
//      var email = req.body.email     
//      var query = "INSERT INTO MyGuests (firstname, lastname, email) VALUES('" 
// + firstname + "','" + lastname + "','" + email + "')"     
// conn.query(query, (err, result)=>{         
//     if(err)             
//     res.json(err)        
//     else             
//     res.json(result) 
//     }) 
// }) 

// app.delete('/myguests/:id', (req, res)=>{     
//     var id = req.params.id 
//     var query = "DELETE FROM MyGuests WHERE id = " + id     
//     conn.query(query, (err, result)=>{         
//         if(err)             
//         res.json(err)         
//         else             
//         res.json(result) 
//     }) 
// })
 
// http.createServer(app) 
// .listen(8000, ()=>{     
//     console.log('Server is running on port 8000') 
// }) 



// Latihan 6.11
// var mysql = require('mysql') 
// var conn = mysql.createConnection({     
//     host : "localhost", //nama host database mysql     
//     user : "root", //user mysql     
//     password : "", //password mysql     
//     database : "myDB" 
// })  

// conn.connect((err)=>{     
//     if(err)         
//         console.log("Problem with MySQL " + err);     
//     else{         
//         console.log("Connected with Database"); 
//         conn.query("CREATE TABLE MyGuests (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(30) NOT NULL, lastname VARCHAR(30) NOT NULL, email VARCHAR(50), reg_time TIMESTAMP)", (err, result)=>{             
//             if(err)                 
//                 console.error('Error creating table ' + err)            
//             else                 
//                 console.log('Table MyGuests created successfully') 
//         }) 
//     } 
// }) 


// Latihan 6.10
// var mysql = require('mysql') 
// var conn = mysql.createConnection({     
//     host : "localhost", //nama host database mysql     
//     user : "root", //user mysql     
//     password : "", //password mysql 
// })  

// conn.connect((err)=>{     
//     if(err)         
//         console.log("Problem with MySQL " + err);     
//     else{         
//         console.log("Connected with Database");         
//         conn.query("CREATE DATABASE myDB", (err, result)=>{             
//             if(err)                 
//                 console.error('Error creating database ' + err)             
//             else                 
//                 console.log('Database created successfully') 
//         }) 
//     } 
// }) 


//Test npm install mysql save
// var mysql = require('mysql') 

// var conn = mysql.createConnection({     
//     host : "localhost", //nama host database mysql     
//     user : "root", //user mysql     
//     password : "", //password mysql     
//     database : "db_react_training" //database mysql 
// })  

// conn.connect((err)=>{     
//     if(err)         
//         console.log("Problem with MySQL " + err);     
//     else        
//     console.log("Connected with Database"); 
// }) 



// Latihan 7.9
// var http = require('http') 
// var express = require('express') 
// var app = express() 
// var bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: false })); 
// app.use(bodyParser.json()); 

// var persons = [] 
// app.post('/person', (req, res)=>{
//     persons.push(req.body)
//     res.json(req.body)
// })
	 
// app.get('/person', (req, res)=>{
//     res.json(persons)  
// })

// http.createServer(app) 
// .listen(8000, ()=>{     
//     console.log('Server is running on port 8000')
// })


// Latihan 7.8
// var data = []; app.get('/data', (req, res)=>{     
//     res.json(data) 
// })  

// app.post('/data', (req, res)=>{     
//     data.push(Date.now())     
//     res.json(data) 
// }) 

// Latihan 7.7
// app.get('/users/:userId/books/:bookId', (req, res) => {     
//     res.send(req.params) 
// }) 

// Latihan 7.6
// app.get('/home', (req, res)=>{     
//     res.end('Home') 
// })  

// app.get('/about', (req, res)=>{     
//     res.end('About') 
// }) 


// Latihan 7.5
// var http = require('http') 
// var express = require('express') 
// var app = express() 

// app.get('/', (req, res)=>{ 
//     res.end('Konten dari method GET') 
// })  

// app.post('/', (req, res)=>{     
//     res.end('Konten dari method POST') 
// })  

// http.createServer(app) 
// .listen(8000, ()=>{     
//     console.log('Server is running on port 8000') 
// }) 


// Latihan 7.4
// var http = require('http') 
// var express = require('express') 
// var app = express() 

//     app.get('/', (req, res)=>{     
//         res.end('Konten dari method GET') 
//     })  

//     http.createServer(app) .listen(8000, ()=>{     
//         console.log('Server is running on port 8000') 
//     }) 


// Latihan 7.3
// var express = require('express') 
// var app = express() 
 
// app.get('/', (req, res)=>{ 
//     res.end('Konten dari method GET') 
// })  
// app.listen(8000, ()=>{ console.log('Server is running on port 8000') }) 


// Latihan 7.2
// var http = require('http'); 
//  http.createServer( (req, res)=>{     
//      if(req.url == '/home')         
//         res.write('<p>Konten Home</p>')     
//      else if(req.url == '/product')         
//         res.write('<p>Konten Product</p>')     
//      else if(req.url == '/order')         
//         res.write('<p>Konten Order</p>')     
//      else if(req.url == '/')         
//         res.write('<p>Pengembangan Aplikasi Aplikasi Web dengan Nodejs</p>')     
//      else          
//         res.write('<h1>404</h1>')     
//      res.end(); 
//     }).listen(8000, ()=>{     
//          console.log('Server is running on port 8000') 
//     }); 


// Latihan 7.1
// var http = require('http'); 
 
//create a server object: 
//http.createServer( (req, res) => {   
//    res.write('<p>Pengembangan Aplikasi Aplikasi Web dengan Nodejs</p>'); 
//write a response to the client   res.end(); //end the response 
// }).listen(8000, ()=>{ 
//     console.log('Server is running on port 8000') 
// }); 
//the server object listens on port 8000 
