function worldSwimmingRecord(input){
let recordInSeconds = Number(input[0]);
let distanceInMeters = Number(input[1]);
let timeFor1Meter = Number(input[2]);

//съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди.

let timesSlowed = Math.floor (distanceInMeters / 15);
let slowing = timesSlowed * 12.5;
let scoreIvan = (distanceInMeters * timeFor1Meter) + slowing;

if(scoreIvan >= recordInSeconds){
    let minutesSlower = scoreIvan - recordInSeconds;
    console.log(`No, he failed! He was ${(minutesSlower).toFixed(2)} seconds slower.`);
}else{
    console.log(`Yes, he succeeded! The new world record is ${(scoreIvan).toFixed(2)} seconds.`);
}
}
worldSwimmingRecord();
