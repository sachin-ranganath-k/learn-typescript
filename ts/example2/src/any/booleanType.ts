let boolValue: boolean;

boolValue = typeof "Sachin" === "string"; //Valid. Because returns true
boolValue = typeof "Sachin" === "number"; // Valid. Because returns false
boolValue= 1<0 //Valid. Returns false

boolValue={} //Error
boolValue="Sachin" //Error

boolValue=null //Error
boolValue=undefined //Error

console.log(boolValue);


/*Important

undefined and null are not considered as boolean values. They are different types

*/
