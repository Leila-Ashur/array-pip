// // Given an array of strings, use a function to reverse all
// //  the elements in the string in ascending order and
// //  the specific elements in descending order
// function descendingStr(arr,indices) {
    function reverseStrings(arr, indices) {
       
        const reversed = [];
      
       
        for (let i = 0; i < arr.length; i++) {
          if (indices.includes(i)) {
            
            const reversedStr = arr[i].split('').reverse().join('');
            reversed.push(reversedStr);
          } else {
          
            reversed.push(arr[i]);
          }
        }
     
  reversed.sort();

  
  return reversed;
}
let  array = ['val', 'car', 'picture', 'school', ];
const indices = [0, 3];
const reversed = reverseStrings(array, indices);
console.log(reversed)


    // Given an array of objects, each object representing a
    //  person with a name and age property, write a function 
    // that returns the sum of all people who are less than 
    // 18 years.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];
function underAge(people) {
    let sum = 0;
  
    for (let i = 0; i < people.length; i++) {
      if (people[i].age < 18) {
        sum += people[i].age;
      }
    }
  
    return sum;
  }
  console.log(underAge(people));

//   Using JS functions and an array of numbers, return
//  positive if an element within the array is positive, 
// negative if an element is negative, else zero
function detirmineSign(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        return "positive";
      } else if (arr[i] < 0) {
        return "negative";
      }
    }
  
    return "zero";
  }
  let arr=[8]
  console.log(detirmineSign(arr));

//   Given an array of objects, where each object represents
//  an employee with an id, name, and salary property,
//  write a function that returns a new array of employee
//  objects sorted by their salary in ascending order.

function sortEmployeesBySalaryAscending(employees) {

    employees.sort((a, b) => a.salary - b.salary);
  
  
    return [...employees];
  }
  const employees = [
    { id: 1, name: 'Alice', salary: 50000 },
    { id: 2, name: 'Bob', salary: 40000 },
    { id: 3, name: 'Charlie', salary: 60000 },
    { id: 4, name: 'Dave', salary: 35000 },
   ];