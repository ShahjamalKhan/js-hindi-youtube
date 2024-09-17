const marvelHeros=[ "thor", "Ironman","spiderman",];
const dcHeros=["superman", "flash","batman"];


// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
    

let aVar1=[0,1,2,3,4];
let bVar2=[5,6,7,8,9];

let AvarBvar=aVar1.concat(bVar2);
console.log(AvarBvar) ;

const allNewHeros=[...aVar1,...bVar2];
console.log(allNewHeros);



const anotheArray=[1,2,3,[4,5,6,[7,8,9,[10,11,12],13,14],15,16],17,18];

const real_anotherArray=anotheArray.flat(Infinity);
console.log(real_anotherArray);


console.log(Array.isArray("Shahjamal")); //not a array
console.log(Array.from("Shahjamal"));// making array using Array.from()

let score1=100;
let score2=200;
let score3=300;
let score4=400;

console.log(Array.of(score1,score2,score3,score4));






