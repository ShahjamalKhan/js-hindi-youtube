const user={
    username: "Shahjamal",
    price: 99,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }


}

// user.welcomemessage();
// user.username="sam"
// user.welcomemessage();

// console.log(this);



// function chai(){
//     let username= "hites";
//     console.log(this.username);
    
// }
// chai();

const chai=()=>{
    let username= "hites";
    console.log(this);
    
}
//chai();


//Basic Arrow Function
 const addTow=(num1,num2)=>{
    return num1+num2
 }

 console.log(addTow(3,4));
 