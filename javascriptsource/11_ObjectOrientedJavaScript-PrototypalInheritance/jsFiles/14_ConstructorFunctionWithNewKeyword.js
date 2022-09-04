function CreateUser(fName,lName,age,email) {
    //creating the object and chaining it with prototype is done by new
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.email = email; 
    // returning the object is also done by new   
}
CreateUser.prototype.about = function(){
    console.log(this.firstName,this.lastName);
    
}
CreateUser.prototype.is18=function(){
    return this.age >= 18;

};
CreateUser.prototype.showemail=function(){
    return this.email;
};

const user1 = new CreateUser("monu","kd",3,"example");
user1.about();
user1.age = 19;
console.log(user1.is18());

for (const key in user1) {
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
    
}