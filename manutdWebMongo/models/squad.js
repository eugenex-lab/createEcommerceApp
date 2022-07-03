 const mongoose = require('mongoose');


const playerSchema =   mongoose.Schema({
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
        enum: ["Goal Keeper",'Center Back' , "Left Back" , "Right Back" , "Central Midfield","Attacking Midfield"
        ,  "Center Forward" ,"Left Forward", "Right Forward" , "Center Forward" ]
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
     enum:["None" , "First Eleven", "Substitute" , "Bench" , "u23 Reserve Team" ]

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
        enum: ["None" ,"One Year Grace", "Sell" , "Hold" , "Loan" , "Transfer" ]

    }
    ,

    nominateFanCategory: {
        type: String,
        enum:["None","Shit team nominee", "Team of the Year"  ]
    }
});


 const Player = mongoose.model('Player', playerSchema);

 module.exports = Player;






