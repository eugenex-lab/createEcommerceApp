 const mongoose = require('mongoose');


const playerSchema =  mongoose.Schema({
    name: {
        unique: true,
        type: String,
        required: true
    }
    ,
    fanName: {
        type: String,
        required: true
    }
    ,
    position: {
        type: String,
        required: false,
        enum: ["GoalKeeper",'Center Back' , "Left Back" , "Right Back" , "Central Midfield","Attacking Midfield"
        , "Right Wing" , "Left Wing", "Center Forward" ,"Left Forward", "Right Forward","Second Striker" , "Attacker" ]
    }
    ,
    averageRatings: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    }
    ,
    image: {
        type: String,
        required: false
    }
    ,
    teamStatus: {
        type: String,
        required: false,
     enum:["First Eleven" , "Substitute" ,  "First Team Bench","loan",]

    }
    ,
    fanPerformanceMeter: {
        type: Number,
        required: false
    }
,
    fanDecision: {
        type: String,
        required: true,
        enum: ["One Year Grace", "Sell" , "Hold" , "Loan" , "Transfer" , "None"]
    }
    ,

    nominateFanCategory: {
        type: String,
        enum:["None","Shit team nominee", "Team of the Year"  ]
    }
});


 const Player = mongoose.model('Player', playerSchema);

 module.exports = Player;






