// nested destructuring
const users = [
    {userId:1,firstName: 'monukd',gender:'male'},
    {userId:2,firstName: 'lalitkr',gender:'male'},
    {userId:3,firstName: 'krishna',gender:'male'},
];

// const [user1,user2,user3] = users;
// console.log(user1,user2,user3);

// const [ {firstName},,{gender} ] = users;
// console.log(firstName);
// console.log(gender);
const [ {firstName:naam,userId:id},,{gender:sex} ] = users;
console.log(naam);
console.log(sex);
console.log(id);
