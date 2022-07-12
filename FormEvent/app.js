const form = document.querySelector('#bugs');
const input1 = document.querySelector('#name');
const input2 = document.querySelector('#email');
const input3 = document.querySelector('#phone');
const input4 = document.querySelector('#address');
const input5 = document.querySelector('#city');
const input6 = document.querySelector('#state');

const list1 = document.querySelector('#names');
const list2 = document.querySelector('#emails');
const list3 =  document.querySelector('#phones');
const list4 = document.querySelector('#addresses');
const list5 = document.querySelector('#cities');
const list6 = document.querySelector('#states');


form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    // alert('Thank you for your feedback!');
    const name = input1.value;
    const li1 = document.createElement('p');
    li1.innerText = name;
    list1.appendChild(li1);

    const email = input2.value;
    const li2 = document.createElement('p');
    li2.innerText = email;
    list2.appendChild(li2);

    const phone = input3.value;
    const li3 = document.createElement('p');
    li3.innerText = phone;
    list3.appendChild(li3);

    const address = input4.value;
    const li4 = document.createElement('p');
    li4.innerText = address;
    list4.appendChild(li4);

    const city = input5.value;
    const li5 = document.createElement('p');
    li5.innerText = city;
    list5.appendChild(li5);

    const state = input6.value;
    const li6 = document.createElement('p');
    li6.innerText = state;
    list6.appendChild(li6);
    //remove the value from the input after submitting
    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';
    input5.value = '';
    input6.value = '';
}
);



