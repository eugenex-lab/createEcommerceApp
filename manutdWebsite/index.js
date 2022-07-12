const express = require('express');
const app = express();
const path = require('path');
const { v4: getId } = require('uuid');
const methodOverride = require('method-override')
getId();

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs')



let playerspick =[{
    id:getId(),
    playername :' Harry Maguire',
    position: 'Center Back',
    fanName: 'Fridge Head',
    averageratings : 0.8
},{
    id:getId(),
    playername :' Anthony Martial',
    position: 'Forwarder',
    fanName: 'Stone cold game killer',
    averageratings : 0.9
},
    {
        id:getId(),
        playername :' Marcus Rashford',
        position: 'Forwarder',
        fanName: 'MBA',
        averageratings : 1.1},
    {
        id:getId(),
        playername :' Bruno Fernandes',
        position: 'Midfielder',
        fanName: 'Bruno Bruno Bruno',
        averageratings : 2.8
    },
    {
        id:getId(),
        playername :' Jadon Sancho',
        position: 'Forwarder',
        fanName: 'none',
        averageratings : 2.6
    },
    {
        id:getId(),
        playername :' Scott McTominay',
        position: 'Midfielder',
        fanName: 'all Muscle no brain',
        averageratings : 1.2}
]

app.get('/playerspick',(req, res) =>{
    res.render('playerspick/index',{ playerspick })
}
)

// app.get('/playerspick', (req, res ) => {
//
//     res.send("GET /united worse players vote response response")
// })

// app.post('/playerspick', ( req, res ) => {
//    const {playername,averageratings} = req.body
//     res.send(`Shitties Player is ${playername} with a rating of : ${averageratings}`)
//     console.log(req.body)
//     res.send("Post /playerspick response")
// })

app.get('/playerspick/addplayer',(req,res)=>{
    const {playername,averageratings} = req.body
    console.log(req.body)
    res.render('playerspick/addplayer');

})

app.post('/playerspick',(req,res)=>{
    // res.send('<h1>Get the band ready</h1>')
    const {playername,averageratings,position,fanName} = req.body;
    playerspick.push({playername,averageratings,position,fanName, id: getId()})
    // res.send('<h1>Get the\  <b>${playername}</b> band ready</h1>')
    res.redirect('/playerspick');
    console.log(req.body);
})



app.patch('/playerspick/:id', (req,res) =>{
    const {id } = req.params;
    const newPick = req.body.playername;
    const newAvg = req.body.averageratings;
    const fanName = req.body.fanName;
    const position = req.body.position;
    const foundPick = playerspick.find(lol => lol.id === id);
    foundPick.playername = newPick;
    foundPick.averageratings = newAvg
    foundPick.fanName = fanName
    foundPick.position = position
    res.redirect('/playerspick')
})

app.get('/playerspick/:id/edit', (req, res)=>{
    const {id} = req.params;
    const pick = playerspick.find(lol => lol.id === id);
    res.render('playerspick/edit', { pick })
} )

app.get('/playerspick/:id', (req,res)=>{
    const {id} =  req.params;
    // const pick =  playerspick.find(c => c.id === parseInt(id));
    const pick =  playerspick.find(c => c.id === id);
    res.render('playerspick/profile' , {pick})
})

app.delete('/playerspick/:id', (req, res)  => {
    const {id} = req.params;
    // const pick =  playerspick.find(c => c.id === id);
   playerspick =  playerspick.filter(c => c.id !== id );
   res.redirect('/playerspick');
})

const listener = app.listen(8181, function(){
    console.log('Your application is running on  ' + listener.address().port); //Listening on port 8888
});

