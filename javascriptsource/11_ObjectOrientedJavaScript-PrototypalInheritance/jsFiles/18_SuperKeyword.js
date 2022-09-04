class CreateStudent{
    constructor(sName,sRollNo,sBranch){
        this.name=sName;
        this.rollNo = sRollNo;
        this.branch = sBranch;
    }
    details(){
        return `${this.name} from ${this.branch} rollno is ${this.rollNo}`
    }
    showName(){
        return this.name;
    }
}

class CreateEmployee extends CreateStudent{
    
    constructor(sName,sRollNo,sBranch,eCompany){
        super(sName,sRollNo,sBranch)
        this.companyName = eCompany;
    }

    details(){
        return `${this.name} from ${this.branch} working in ${this.companyName}`
    }
}

const student1 = new CreateStudent("Method",24439492,"CSE")

const employee1 = new CreateEmployee("Monu KD",20013496,"Comp. Sci.","Google");

console.log(employee1.details());

console.log(student1.details());
console.log(employee1.showName());


