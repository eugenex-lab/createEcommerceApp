
const mongoose = require('mongoose');

const Player = require('./models/squad');


mongoose.connect('mongodb://localhost:27017/unitedMaster',{useNewUrlParser:true , useUnifiedTopology:true })
    .then(() => {
        console.log("Connection Open")
    })
    .catch(err => {
        console.log("error help ")
        console.log(err)
    })


// const p = new Player  ([
//     { name: "Wan Bissaka" , fanName: "spider" , averageRatings: 1.7 , position: "Right Back" , stayOrLeave: "leave" },
//     { name : "Marcos Rashford" , fanName: "MBE" , averageRatings: 2.0 , position: "Forward" , stayOrLeave: "one year of grace" },
//     { name: "Erick Bailey" , fanName: "african" , averageRatings: 1.2 , position: "Centre Back" , stayOrLeave: "stay" },
//     { name: "Juan Mata" , fanName: "juan" , averageRatings: 1.8 , position: "Center Midfield" , stayOrLeave: "leave" },
//     { name: "Green wood" , fanName: "assassin" , averageRatings: 4.0 , position: "Forward" , stayOrLeave: "leave" }
//     ])


const  p = [
    {
        name: "Wan Bissaka", fanName: "spider", averageRatings: 1.7, position: "Right Back", stayOrLeave: "leave",

    }
,
    { name : "Marcos Rashford" , fanName: "MBE" , averageRatings: 2.0 , position: "Attacker" , stayOrLeave: "one year of grace"
    },
{ name: "Erick Bailey" , fanName: "african" , averageRatings: 1.2 , position: "Centre Back" , stayOrLeave: "stay"
}
,
{ name: "Juan Mata" , fanName: "juan" , averageRatings: 1.8 , position: "Center Midfield" , stayOrLeave: "leave"
}
,
{ name: "Green wood" , fanName: "assassin" , averageRatings: 4.0 , position: "Attacker" , stayOrLeave: "leave"

},

]


Player.insertMany(p).then(res => {
    console.log("inserted")
    console.log(res)
}
).catch(err => {
    console.log("error")
    console.log(err)
}
)

