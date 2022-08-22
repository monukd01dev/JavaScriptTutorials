// find method
// take input as callback functions
// return the first true element
// pass elements of array as argument to the callback function

const userNames = ["Monu", "lalit", "krishna", "amit", "ashu", "ashishK"];

function isLength7 (string){
    return string.length === 7;
}

console.log(userNames.find(isLength7))

console.log('-----------------some real shit!------------------\n\n');

const users =[
    {userId : 1, userName: "monukd01dev"},
    {userId : 2, userName: "officiallalit"},
    {userId : 3, userName: "silence"},
    {userId : 4, userName: "1sec"},
]


const searchResult = users.find(user=>user.userId===4);
console.log(searchResult);

