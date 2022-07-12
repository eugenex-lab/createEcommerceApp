const btn = document.querySelector('#ad');

btn.onclick = function() {
    alert('Hello');
    console.log('Freaks ...lool ');
    console.log('Freaks ...lool ');

}

function wild() {
    console.log('Rock and ROlllll');
    alert('Rock and ROlllll');
}

btn.onmouseover = wild;

// const btn2 = document.querySelector('#lotoo');
// btn2.addEventListener('click', function() {
//     // random number between 1 and 10
//     const randomNumber = Math.floor(Math.random() * 10) + 1;
//     console.log(randomNumber);
//     alert(randomNumber);
// }
// );

const btn3 = document.querySelector('#btn3');
const h1 = document.querySelector('#show');

btn3.addEventListener('click', function() {
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
}
)

const  makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
