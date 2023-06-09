var express=require('express');  
var app=new express();  
var port=3000;  
app.listen(port,function(err){  
    if(typeof(err)=="undefined"){  
        console.log('Your application is running on : '+ port+' port');  
    }  
});  
var navMenu=[  
                {href:'/articles',text:'Articles'},  
                {href:'/projects',text:'Projects'},  
                {href:'/books',text:'Books'},  
                {href:'/Contact',text:'Contact Us'}  
           ];   
  
app.use(express.static('public')); //making public directory as static diectory   

app.use(express.projectsRouter(static));// making static to public//user himself create

  
app.set('views','./src/views');   
  
app.set('view engine','ejs');  
var articlesRouter=require('./src/routes/articlesRoute')(navMenu);  
var projectsRouter=require('./src/routes/projectsRoute')(navMenu);  
var booksRouter=require('./src/routes/booksRoute')(navMenu);  
var contactRouter=require('./src/routes/contactRoute')(navMenu);  
  
app.use('/articles',articlesRouter);  
app.use('/projects',projectsRouter);  
app.use('/books',booksRouter);  
app.use('/contact',contactRouter);  
  
app.get('/',function(req,res){  
    res.render('index', {  
        title:'Node.js By Sourabh Somani',  
        menu:navMenu  
    });  
});  