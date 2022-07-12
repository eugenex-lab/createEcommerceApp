console.log("Hello World , Welcome to Javascript Basics from Udacity");


console.log("Keep Coding");
// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:


if(22 == "22"){
    console.log(true , "2++2 is equal to 2--2");
}else{
    console.log(false);
}

// random array of string 


var randomArray = ["md","analyst","developer","web developer","web designer"];


// CREATE a variable that select random string from randomArray

let select = randomArray[Math.floor(Math.random() * randomArray.length)];

if(select === "analyst"){
    console.log("Pay more attention to the analyst");
}else if (select === "developer"){
    console.log("You are a developer");
}else if (select === "web developer"){
    console.log("You are a web developer");
}else if (select === "web designer"){
    console.log("You are a web designer");
}


// password to check for input longer than 8 characters say "not long enough" and no space in between say "no space"

// const password = prompt("Enter your password");

let  password = "asjbs"

if(password.length < 8){
    console.log("Password is not long enough");
}else if(password.indexOf(" ") > -1){
    console.log("No space in between");
}else{
    console.log("Password is valid");
}


//create an array of 3 united planets

var planets = ["mercury", "venus", "earth", "mars"];

planets.push("jupiter");

console.log(planets);

planets.pop();

console.log(planets);




// Dont run this code 

// for (let i = 20; i >= 0; i++) {
//     console.log(i);
// }


//create and object of of task with id, name, and completed properties


// while (true){
//     var  input = prompt("Enter your task").split(","); ;
//     if(input === "q"){
//         break;
//     }if (input === "d"){
//         input.pop();
//         // delete task
//     }else if (input === "p"){
//         for (let i = 0; i < input.length; i++) {
//             console.log(input[i]);
//         }
//     }
   
// }

    // create an arrau of task
    let  input = prompt("what would you like to do") ;
    console.log(input);
    const task = [ 'sleep', 'eat', 'code', 'repeat'];


    while(input !== 'q'){
        input = prompt("what would you like to do") ;
    
    if (input === "del"){
        // delete tas  k by id
        const  id = parseInt(prompt("Enter the id of the task you want to delete"));


        if(!Number.isNaN(id)){
            const del = task.splice(id, 1);
            console.log(`ok, deleted ${del[0]}`);
        

        }else{
            console.log('unkown index inputed, type "del" to try again')}

        
        console.log(`task del[0] has been deleted`);

        // check if index is null
        
        
        

}
    else if (input === 'p'){
        // print all task 
        console.log("********Task*************")
        for (let i = 0; i < task.length; i++) {
            count = i + 1;
            console.log(count  + ": " + task[i]);
            // console.log( ` ${task[i]}`);
        }
        console.log("*********End******")
    }else if (input === "new"){
        const  newTask = prompt("Enter the task you want to add");
       
        // task.push(newTask);

        // check if null or empty
        if(newTask === "" || newTask === null){
            console.log("Please enter a valid task");
        }else{
            task.push(newTask);
            console.log(`${newTask} added to the list`);   
        }

       
    }
}

