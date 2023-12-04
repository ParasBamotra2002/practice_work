// function adjective(){
//     let a="Creazy"
//     let b= "Amazing"
//     let c= "Fire"
// let d=Math.floor(Math.random()*3)
// if(d==0){return a}
// else if(d==1){return b}
// else if(d==2){return c}
// }
// function shopName(){
//     let a="Engine"
//     let b= "Foods"
//     let c= "Garments"
// let d=Math.floor(Math.random()*3)
// if(d==0){return a}
// else if(d==1){return b}
// else if(d==2){return c}
// }
// function anotherWord(){
//     let a="Bros"
//     let b= "Limited"
//     let c= "Hub"
// let d=Math.floor(Math.random()*3)
// if(d==0){return a}
// else if(d==1){return b}
// else if(d==2){return c}
// }

// console.log("Business Name\n" , adjective(),shopName(),anotherWord() )

// function shopName(a,b,c) {
//     let name="";
//     if(b==="Engine"){
//         name= a+b;
//     }
//     else if(b==="Foods"){
//         name=a+b;
//     }
//     else if(b==="Garments"){
//         name= a+b;
//     }

//     if(c==="Bros"){
//         name+=c;
//     }
//     else if(c==="Limited"){
//         name+=c;
//     }
//     else if(c==="Hub"){
//         name+=c;
//     }
//     return name;
// }

// let a =prompt("Enter an adjective");
// let b= prompt("Enter Shop Name");
// let c= prompt("Another Word");
// let d=shopName(a,b,c)
// {alert(d)}

let rnum=Math.floor(Math.random()*100);
rnum=Number.parseInt(rnum);
let a;
let score=100;
let chances=0;

a=Number.parseInt(prompt("Enter a number= "));
while(a!=rnum){
    score=score-1;
    if(a>rnum){
        alert("Input number is greater than random number");
    }
    else if(a<rnum){
        alert("Input number is smaller than random number");
    }
    a=Number.parseInt(prompt("Enter number again= "));
    chances+=1;
}
alert("you entered correct number!");
alert("your score is"+score);
alert("You took" + chances+ "chances");