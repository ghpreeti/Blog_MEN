const express = require('express');
const morgan = require('morgan')


//express app
const app = express();

//register view engine
app.set( 'view engine', 'ejs' );

//listen for requests
app.listen(3000);

//custom middleware
// app.use((req,res,next)=>{
// console.log('new request made:');
// console.log('host:',req.hostname);
// console.log('path:',req.path);
// console.log('method:',req.method);
// next();//calls the next function as express doesent know wht to do next and so browser keep browsing.
// });

// app.use((req,res,next)=>{
//   console.log('in the next middleware');
//   next();
//   });


//middlewares & static files
app.use(express.static('public'));
app.use(morgan('dev'));




app.get('/',(req,res)=>{
  //res.send('<p>Home Page</p>');
  // res.sendFile('./views/index.html',{root:__dirname});
  const blogs = [
    {title: 'Yoshi finds eggs',snippet:"lorem"},
    {title: 'Yoshi finds eggs',snippet:"lorem"},
    {title: 'Yoshi finds eggs',snippet:"lorem"},
  ];
    
  res.render('index',{title:'Home',blogs});
});

app.get('/about',(req,res)=>{
    //res.send('<p>ABOUTpage</p>');
    // res.sendFile('./views/about.html',{root:__dirname});
    res.render('about',{title:'About'});
  });


 //redirect
//  app.get('/about-us',(req,res)=>{
//   res.redirect('/about');
//  }) 

app.get('/blogs/create',(req,res)=>{
  res.render('create',{title:'Create a new blog'});
})


 //404 page
app.use((req,res)=>{
  // res.status(404).sendFile('./views/404.html',{root:__dirname});
  res.status(404).render('404',{title:"Page Not Found"});
});