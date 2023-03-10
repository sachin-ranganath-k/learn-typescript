function add(num:unknown){  //Won't throw error if it is any and it will be a problem
    return num*2;  //Error: Because if the passed parameter is string, it can't multiply
}

console.log(add(2)) //4
console.log(add("Sachin"))  //NaN (Unexpected behaviour)



//By using typeof, it will not throw the above error

function add2(num: unknown){
    if(typeof num==="number"){
        return num+2
    }
    return "Input only of type number";
}

console.log(add2(4)) //6
console.log(add2("Sachin")) //Input only of type number