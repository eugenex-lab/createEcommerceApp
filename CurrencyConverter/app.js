
const form = document.querySelector('#populateCurrency');

form.addEventListener(
    'submit', async function (e) {
        e.preventDefault();
        const parent = form.elements.currencyParent.value;
        const child = form.elements.currencyChild.value
        const amount = form.elements.amount.value

        // from exchange rate API  https://v6.exchangerate-api.com/v6/760f3849a20e029d375e41c8/pair/EUR/GBP/AMOUNT

        const url = await axios.get(`https://v6.exchangerate-api.com/v6/760f3849a20e029d375e41c8/pair/${parent}/${child}/${amount}`);
        console.log(url.data.conversion_result);

        const countryCode  = await axios.get(`https://restcountries.com/v2/all/`);

        console.log(countryCode.data);






        const img = document.querySelector('#output');
        img.innerHTML = url.data.conversion_result;

        img.style.display = 'block';
        img.style.margin = 'auto';
        img.style.width = '50%';
        img.style.height = '50%';
        img.style.border = '1px solid black';
        img.style.borderRadius = '5px';
        img.style.padding = '10px';
        img.style.backgroundColor = '#f2f2f2';
        img.style.textAlign = 'center';
        img.style.fontSize = '2em';
        img.style.fontWeight = 'bold';
        img.style.color = '#000';
        img.style.fontFamily = 'sans-serif';

    }
)











