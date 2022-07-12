const expressHelloWorld = require('express');

const app = expressHelloWorld();

// app.use((req,res) => {
//     console.log('WE got a new re quest');
//     res.send('<h1>This is my web page bitches</h1');
//     console.dir(req);
// })

//Above is to get on any type request we streamline it below


app.get('/united',(req,res) => {
    res.send('<h1>Official Page of Manchester United</h1');
})


app.post('/united',(req,res) => {
    res.send('<h1>Post a Player signing pls</h1');
})


app.get('/united/:subreddit/:postId',(req,res) => {

    const {subreddit , postId } = req.params;
    res.send(`<h1> A view of Post ID: ${postId} on  sub-page: ${subreddit}  for manchester united fans</h1>`);
}
)

app.get('/search',(req, res) => {
    const {q} = req.query;

    if(!q){
        res.send(`<h2 style="color:blue" > Nothing found , Ngnix missing nothing searched</h2>`)
    }else {
        res.send(`<h2> Searching results for: ${q}</h2>`);

    }
} )


app.get('/about',(req,res) => {
    res.send('<h1>About Manchester United</h1');

})






app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);



