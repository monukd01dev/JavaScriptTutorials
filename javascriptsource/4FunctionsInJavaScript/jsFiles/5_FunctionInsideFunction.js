// functions inside function

const app =()=>{
    
    const myFunc =()=> console.log('hellow from myFunc');

    const addTwo =(num1,num2)=> console.log(num1+num2);

    const mul =(num1,num2)=> console.log(num1*num2);

    console.log('Inside App');
    
    myFunc();
    addTwo(2,2);
    mul(2,5);
    
}
app();
