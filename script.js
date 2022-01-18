
for (let i=1;i<11;i++){
    console.log(i)
}
console.log("_______________________________");
let i=0;
let y=10;
while(i<10){
console.log(y-i)
i++
}



let count = 0
let countn = 0
for(let i=1; i<101;i++){
    if(i%2 == 0){
        count=count+1;
}
}
for (let i=0;i<100;i++){
    if(i%2 == 1){
        countn=countn+1;
    }
    
}
console.log("_______________________________")
console.log(`Há ${count} números positivo` )
console.log(`Há ${countn} números negativos`)
console.log("_______________________________")