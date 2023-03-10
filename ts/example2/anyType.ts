//any => Can be assigned to any type (Default JS behaviour)

let data: any = "Sachin";
data = [1, 2, 3, 4, "Sachin"];
data = {
  name: "Ranganath",
};
data = 123;

console.log(data); //123

/******************************************************************************** */

// function add(num) {
//   //Error : Parameter 'num' implicitly has an 'any' type.
//   return num + 2;
// }

//To solve the above problem,
function add2(num: number) {
  return num + 2;
}
