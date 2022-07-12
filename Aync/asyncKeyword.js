
const forthNinja = async (shiobi,atkasuki) => {
    if(!shiobi || !atkasuki)  throw new Error('shiobi and atkasuki are required to start war');

    if(shiobi === 'Naruto' && atkasuki === 'Madara') return 'War is starting';

    throw new Error('shiobi and atkasuki are not valid');
}

forthNinja('Naruo','Madara').then(result => console.log("Naruto need all shinobi's")).catch(err => console.log(err));