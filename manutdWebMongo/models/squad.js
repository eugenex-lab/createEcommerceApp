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
        required: true,
        enum: ["GoalKeeper",'Center Back' , "Left Back" , "Right Back" , "Central Midfielder"
        , "Right Wing" , "Left Wing", "Center Forward" ,"Left Forward", "Right Forward","Second Striker" , "Attacker" ]
    }
    ,
    averageRatings: {
        type: String,
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
    stayOrLeave: {
        type: String,
      required: true,
        enum: ['Stay', 'Leave' , 'one year of grace' , 'Loan' ]
    },


});

 const Player = mongoose.model('Player', playerSchema);

 module.exports = Player;






