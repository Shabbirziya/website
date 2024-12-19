let name = "     john doe"

let trimmedText= name.trim();
// the trim() method removes whitespace from both sides of a string:
console.log(trimmedText);
// ------------------------------------------------------------------------------------------//
// splitting a string into an array:

const data ="This is a string wich will split into array";

const splittedData= data.split(" ");

console.log(splittedData);

// ============================================================================================//
const data1="javascript is a programming language";
const data2="javascript is a programming language";
const data3="javascript is a programming language";
const data4="javascript is a programming language";
/slice extracts the part of the string , it takes 2 parameters 1st is the starting position and second is the ending position and ending position is not include/
const newData = data1.slice(0,4);
// or
const newData1 = data2.slice(7,20);
// if you ommit the 2nd parameter it will slice the remaining string
const newData2 = data3.slice(7);
const newData3 = data4.slice(-13,-4);
console.log(newData);
console.log(newData1);
console.log(newData2);
console.log(newData3);


// ..........................................................................................
// substring
const newData4=data4.substring(0,4);
// substring is simillar toslice but cannot take negative value
console.log(newData4);

//substr
//1st parameter starting position and
//2nd parameter is length of string you want to extract
newData5 = data.substr(0,20);
console.log(newdata5);
//replace
const mystring ="all that glitter is not gold.gold is precious";
let newText = mystring.replace("gold","silver");
console.log(newtext); 