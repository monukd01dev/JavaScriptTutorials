// objects inside array
// very usefull in real world applications

const users = [
    {userId:1,firstName: 'monukd',gender:'male'},
    {userId:2,firstName: 'lalitkr',gender:'male'},
    {userId:3,firstName: 'krishna',gender:'male'},
];

for(user of users){
    console.log(user.userId , user.firstName);

}
