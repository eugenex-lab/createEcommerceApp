const figlet = require('figlet');

const colors = require('colors');
// import chalk from 'chalk';


figlet('Fuck the world!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }




    console.log(data.green)
});





