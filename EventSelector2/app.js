document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt);

});

const  input = document.querySelector('input');
input.addEventListener('keyup', function(evt) {
        // console.log(evt);
        // console.log(evt.target.value);
        console.log("KEYUp");
        console.log(evt.code);
        console.log(evt.key);
    }
);


const  inputs = document.querySelector('input');
inputs.addEventListener('keydown', function(evt) {
        // console.log(evt);
        // console.log(evt.target.value);
        console.log("KEYDOWN");
        console.log(evt.code);
        console.log(evt.key);
    }
);