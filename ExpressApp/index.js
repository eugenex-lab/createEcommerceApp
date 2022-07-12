const express = require('express');
const  app = express();
const squadData = require('./playlist.json')
const path = require("path");

console.log(squadData)

// app.get('/home   ', (req, res) => {
//     res.send('Hello World!');
// }
// );


app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname,''))

app.get('/home', (req, res) => {
    res.render('home.ejs');
}
);


app.get('/rand', (req, res) => {

    res.render("rand.ejs")

})

app.get('/squad' , (req , res) => {
    const  team= [
        'Ronaldo' , 'Fred' , 'Scot' , 'Bruno' , 'David Degea'
    ]
    res.render ('squad', {team})
})

app.get('/r/:squadlist' , (req , res) => {

    const {squadlist} = req.params;

    const data = squadData[squadlist]
    console.log(data)

    if(data){
        res.render ('squadlist', {...data} );
    }else{
        res.render("notfound", {squadlist})
    }


})

app.get('*', function(req, res){

    const {squadlist} = req.params;

    const data = squadData[squadlist]
    console.log(data)
    res.render("notfound", {squadlist})
});


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
}
);


app.get('/comments/:subreddit',(req,res) => {
        const {subreddit} = req.params;
        res.render('subreddit',{subreddit});
        // res.send(`<h1> Comment: Sign two midfielder  ${subreddit}  for manchester united fans please </h1>`);

    }
)


// const bootstrap = require('bootstrap')



app.use(express.static(path.join(__dirname,'/addon')))


