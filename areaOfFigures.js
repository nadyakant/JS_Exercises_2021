function areaOfFigures(input){

let figure = input[0];
let area = 0;

if(figure === "triangle"){
    let b = Number(input[1]);
    let h = Number(input[2]);
    area = b*h*0.5;
    

}else if (figure === "circle"){
    let r = Number(input[1]);
    area = (r*r)*Math.PI;
    

}else if (figure === "square"){
    let a = Number(input[1]);
    area = a*a;
    

}else if (figure === "rectangle"){
    let a = Number(input[1]);
    let b = Number(input[2]);
    area = a*b;
    
}
console.log((area).toFixed(3));
}
areaOfFigures(["circle",
"6"])
;