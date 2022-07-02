const express = require('express');
const app = express();
const path = require('path');


const mongoose = require('mongoose');

// add method override to express
const methodOverride = require('method-override');



const Player = require('./models/squad');

//
// mongoose.connect('mongodb://localhost:27017/unitedFanWeb',{useNewUrlParser:true , useUnifiedTopology:true })
//     .then(() => {
//         console.log("Connection Open")
//                                 })
//     .catch(err => {
//         console.log("error help ")
//         console.log(err)
//     })




//
mongoose.connect('mongodb://localhost:27017/unitedFanWeb',{useNewUrlParser:true  ,  useUnifiedTopology:true })

  db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {
console.log('connected to mongoDB');
}
);


app.use(methodOverride('_method'));
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


const teamStatus = ["None" ,"First Eleven", "Substitute" , "Bench" ,"One Year of Grace" ,"loan",]

const fanDecision = ["None" ,"One Year Grace", "Sell" , "Hold" , "Loan" , "Transfer" ]

const nominateFanCategory = [  "None"  ,"Shit team nominee", "Team of the Year" ]

app.get('/players/new', (req, res) => {
        // res.send("New Player Page")
        // res.render('players/new', {teamStatus , fanDecision , nominateFanCategory} )

    // throw error for wrong validation

    if (req.query.name === "") {
        throw new Error("Name is required")
    }
    if (req.query.fanName === "") {
        throw new Error("Fan Name is required")
    }
    if (req.query.position === "") {
throw new Error("Position is required")
    }
    if (req.query.averageRatings === "") {
        throw new Error("Average Ratings is required")
    }
    if (req.query.country === "") {
        throw new Error("Country is required")
    }
    if (req.query.image === "") {
        throw new Error("Image is required")
    }
    if (req.query.teamStatus === "") {
        throw new Error("Team Status is required")
    }
    if (req.query.fanPerformanceMeter === "") {
        throw new Error("Fan Performance Meter is required")
    }
    if (req.query.fanDecision === "") {
throw new Error("Fan Decision is required")
    }
    if (req.query.nominateFanCategory === "") {
        throw new Error("Nominate Fan Category is required")
    }else {
    res.render('players/new', {teamStatus , fanDecision , nominateFanCategory}

)
    }
}
);



app.get('/players', async (req, res) => {
        // res.send("Hello World");

        // const players = await Player.find({})
        // console.log(players)
        // // res.send("Player profile page")
        // res.render('players/index' , {players})
        // // res.send('ALL PLAYERS ARE HERE ')
        // // res.render('players', {players});

    const {nominateFanCategory} = req.query;

        if(nominateFanCategory)
        {
            const players = await Player.find({nominateFanCategory})
            res.render('players/index' , {players,nominateFanCategory})
        }else {
            const players = await Player.find({})
            res.render('players/index' , {players, nominateFanCategory:"All"})
        }
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

// add edit route

app.get('/players/:id/editPlayer', async (req, res) => {
    const player = await Player.findById(req.params.id)
    //     const player = await Player.findById(id)
        res.render('players/editPlayer', {teamStatus , fanDecision, player , nominateFanCategory})
}
)

app.put('/players/:id', async (req, res) => {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body , {runValidators: true , new : true} )
    // console.log(req.body)
    res.redirect(`/players/${player._id}`);

    // console.log(req.body)
    // res.send("Player profile page Edited" )

}
)

// app delete route

app.delete('/players/:id', async (req, res) => {
    // res.send("Player profile page Deleted")
    await Player.findByIdAndDelete(req.params.id)
    res.redirect('/players')


    res.send("Player profile page Deleted")

}
)


app.get('*', (req, res) => {
res.send("404 Page Not Found")
}
)


app.listen(8282, () => {
    console.log("server is running on port 8282")
}
)


