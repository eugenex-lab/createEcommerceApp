// new Promise((resolve, reject) => {
//   resolve();
// })
//
//
// const romise = (url) => {
//     return new Promise ((resolve, reject) => {
//         const xhr = Math.random();
//         setTimeout(() => {
//         if (xhr > 0.3) {
//             resolve(xhr + 'data here is --> ' + url);
//         }
//         reject  ("Error: " + url);
//   }, 1000);
// }
// )
// }
//
//
//
// fakeApiCall('http://google.com').then(() => {
//   console.log('done with google');
// } ).then(() => {
//   console.log('done with google');
// }
// ).catch(() => {
//   console.log('error');
// }
// )


const delayColorChange = ( delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

          // random color
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            const color = `rgb(${r}, ${g}, ${b})`;
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

delayColorChange(1000)
delayColorChange(2000)
delayColorChange(3000)
delayColorChange(4000)
delayColorChange(5000)
delayColorChange(6000)
delayColorChange(1000)
delayColorChange(2000)
delayColorChange(3000)
delayColorChange(4000)
delayColorChange(5000)
delayColorChange(6000)
delayColorChange(2000)
delayColorChange(3000)
delayColorChange(4000)
delayColorChange(5000)
delayColorChange(6000)
delayColorChange(2000)
delayColorChange(3000)
delayColorChange(4000)
delayColorChange(5000)
delayColorChange(6000)
delayColorChange(2000)
delayColorChange(3000)
delayColorChange(4000)
delayColorChange(5000)
delayColorChange(6000)