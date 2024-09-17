//singleton

//Object literals

const JsUser={
    name: "Shahjamal",
    "full name": "Shahjamal Khan",
    age:18,
    location:"Dhaka",
    email: "shahjamalkhans2290@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);

JsUser.email="shahjamal@yahoo.com",

console.log(JsUser["email"]);
//Object.freeze; // no further change will count after freeze.

console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Js User");
    
}

console.log(JsUser.greeting());

JsUser.greetingtwo=function(){
    console.log(`Hello Js User Shahjamal, ${this.name}`);
    
}

