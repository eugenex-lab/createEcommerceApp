const express = require('express');
const app = express();
const path = require('path');


const mongoose = require('mongoose');


const Player = require('./models/squad');


mongoose.connect('mongodb://localhost:27017/united',{useNewUrlParser:true , useUnifiedTopology:true })
    .then(() => {
        console.log("Connection Open")
                                })
    .catch(err => {
        console.log("error help ")
        console.log(err)
    })

app.set('views' ,path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));



// const manutdDb = new mongoose.Schema({
//     name: String,
//     fanName: String,
//     position: String,
//     averageRatings: Number,
// });

// const ManutdRepo = mongoose.model('ManutdRepo', manutdDb)

// ManutdRepo.insertMany([
//     { name: "Wan Bissaka" , fanName: "spider" , averageRatings: 1.7 , position: "Right Back" },
//     { name: "Erick Bailey" , fanName: "african" , averageRatings: 2.0 , position: "Centre Back" },
//     { name: "Juan Mata" , fanName: "juan" , averageRatings: 2.0 , position: "Centre Back" },
//     { name: "Green wood" , fanName: "assassin" , averageRatings: 4.0 , position: "Forward" }
//     ]).then(data => {
//         console.log("inserted")
//     console.log(data)
//     }
//     ).catch(err => {
//         console.log("error")
//         console.log(err)
//     }
//     )




app.get('/players/new', (req, res) => {
        // res.send("New Player Page")
        res.render('players/new')
    }
)



app.get('/players', async (req, res) => {
        // res.send("Hello World");

        const players = await Player.find({})
        console.log(players)
        // res.send("Player profile page")
        res.render('players/index' , {players})
        // res.send('ALL PLAYERS ARE HERE ')
        // res.render('players', {players});

    }
)

app.post('/players', async (req, res) => {
    const newPlayer = new Player(req.body);
    await newPlayer.save();
    // console.log(newPlayer)
    res.redirect(`/players/${newPlayer._id}`)
    // console.log(req.body)
    // print starts


    // res.send("Player profile page")

})

app.get('/players/:id', async (req, res) => {
        const player = await Player.findById(req.params.id)
        // res.render('players/profile', {player})
        // res.send("Player profile page")
        res.render('players/profile' , {player})
        console.log(player)
    }
)




app.listen(8282, () => {
    console.log("server is running on port 8282")
}
)


