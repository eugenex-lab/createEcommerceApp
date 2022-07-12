for (i=0 ; i < 10 ; i++){
console.log("helllooooooo fucckiiinng worlllllddddd !!!!!")
}
console.log(process.argv)


const fs = require('fs');

console.log(fs);

fs.mkdir('Dog',{recursive:true},(err)=> {
    console.log("In a callback");

    if (err) {
        console.log(err);
    }

});


// fs.mkdirSync('Dog');
console.log("Outside a callback");



const folderName = process.argv[2] || 'projectTerminal'

fs.mkdirSync(folderName);