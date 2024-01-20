function metricConverter(input){
let number = Number(input[0]);
let inMetrics = input[1];
let outMetrics = input[2];

let mm = 0.000;
    let cm =0.000;
    let m = 0.000;

if(inMetrics === "mm"){
     mm = number;
     cm = mm/10;
     m = mm/1000;
}else if (inMetrics === "cm"){
    cm = number;
     mm = cm * 10;
     m = cm / 100;
}else if (inMetrics === "m"){
    m = number;
     mm = m * 1000;
     cm = m * 100;
     
}
if (outMetrics === "mm"){
    console.log((mm).toFixed(3));
}else if (outMetrics === "cm"){
    console.log((cm).toFixed(3));
}else if (outMetrics === "m"){
    console.log((m).toFixed(3));
}

}
metricConverter(["12","mm","m"])