const button = document.querySelector('#btn');
const input = document.querySelector('h1');

button.addEventListener('click', function() {
    const newContent = getRandomColor()
    document.body.style.backgroundColor = newContent;
    input.innerText = newContent;

    console.log(newContent);

});


 const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const button2 = document.querySelectorAll('button');

 for (let button of button2) {
     button.addEventListener('click', colorize);
     console.log(button);
    }
 // button.addEventListener('click', function() {
     // button.style.backgroundColor = getRandomColor();
     //     this.style.backgroundColor = getRandomColor();
     //     this.style.color = getRandomColor();

    const button3 = document.querySelectorAll('h4');


function colorize(evt) {
    this.style.backgroundColor = getRandomColor();
    this.style.color = getRandomColor();
}

for (let button of button3) {
     button.addEventListener('click', function (evt) {
    // button.addEventListener('click', function() {
        this.style.backgroundColor = getRandomColor();
        this.style.color = getRandomColor();
            console.log(this);
            console.log(evt);
    }
    )
 }


