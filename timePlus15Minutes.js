function timePlus15Minutes(input){
let hours = Number(input[0]);
let minutes = Number(input[1]);

let plus15 = minutes + 15;
if(plus15 >= 60){
    minutes = plus15 - 60;
    hours += 1;
}else{
    minutes = plus15;
}
if (hours >=24){
    hours = 0;
}
if(minutes < 10){
    console.log(`${hours}:0${minutes}`);
}else{
    console.log(`${hours}:${minutes}`);
}
}
timePlus15Minutes();