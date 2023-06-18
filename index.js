// Code your solutions in this file
/*const names = ["Guadalupe", "Ollie", "Aki"];
let response=string;

function writeCards(names){
    for(let i = 0; i < names.length; i++){
    response = (`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    return response;
    
}   
}*/

const thankYouMessages = [];
const name=["Guadalupe", "Ollie", "Aki"]

function writeCards(name, occassion){
    for(let i = 0; i < name.length; i++){
        const messages = (`Thank you, ${name[i]}, for the wonderful ${occassion} gift!`);

        thankYouMessages.push(messages);
    }
    return thankYouMessages;
}

/*function countDown(number){
    let count=10
    while(count=>0);{
        return console.log(count++);
    }
}*/

function countDown(number){
    let countDown=10;
    while (countDown >= 0){
        console.log(countDown-- )
    }
}
