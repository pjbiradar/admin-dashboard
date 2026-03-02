const app =require('./app')

const PORT = 5000;

//start http server
app.listen(PORT,()=>{
    console.log(`server started on point ${PORT}`)
});


//Browser → HTTP Request
// → Express App
// → Middleware (express.json)
// → Route Handler
// → Response sent 
