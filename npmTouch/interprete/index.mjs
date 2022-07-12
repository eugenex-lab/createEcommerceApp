


import { franc } from 'franc';
// import { colors } from 'colors';


import pkg from 'colors';
const { colors } = pkg;


import pkl from 'langs';
const {langs} = pkl;



const input = process.argv[2];


const langcode =franc (input)

if(langcode === 'und'){
    console.log('Language not found'.bgWhite.red);
}
else{
    const lang =  langs.where('6', langcode);
    console.log(`our best guess is " ${lang.name} .green);"`
    );
}




