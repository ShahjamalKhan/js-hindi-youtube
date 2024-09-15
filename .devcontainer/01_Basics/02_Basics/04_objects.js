//const tinderuser= new Object();
const tinderuser={};
tinderuser.id="12bcd";
tinderuser.name="Shahjamal";
tinderuser.loggedIn=false;

//console.log(tinderuser);


const regularUser={
    email:"some@gmail.com",

    fullName:{
        userFullName: {
            firstName: "Anondo",
            lastName: "Bagchi"
        }
    }
}

//console.log(regularUser.fullName.userFullName.firstName);

const obj1={1:"a", 2:"b"};
const obj2={1:"A", 2:"B"};


//const obj3=Object.assign({},obj1,obj2);

const obj3={...obj1,...obj2}
//console.log(obj3);

const users=[
    {
        id:1,
        email:"hogwart@gmail.com"
    },
    {

    }
]

users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
