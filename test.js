// const users = [
//     { name: 'John Doe', age: 25, email: 'john@example.com' },
//     { name: 'Jane Smith', age: 17, email: 'jane@example.com' },
//     { name: 'Mike Johnson', age: 30, email: 'mike@example.com' },
//     { name: 'Emily Davis', age: 15, email: 'emily@example.com' },
//   ];
 
 
// const adults = users.filter(user => 
//     user.age >= 18 
// );

//  console.log(adults); 

// const nameFind = users.find(user => user.name === "Jane Smith")
// console.log(nameFind);

// Напишіть функцію, яка приймає рядок тексту і повертає кількість голосних літер у цьому рядку. Голосні літери - це літери "a", "e", "i", "o", "u", незалежно від регістру.

// function countA(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u',"у", "е", "ї", "і", "а", "о", "є", "я", "и", "ю"];
//     const lowerCase = str.toLowerCase();
//     const array = lowerCase.split("");
//     const strVowels = array.filter(lettr => vowels.includes(lettr));
//     const numberOfVuvels = strVowels.length;
//     return numberOfVuvels;
// }

// console.log(countA("uppercasevalue"));

// Напишіть функцію, яка перевіряє, чи є заданий рядок тексту паліндромом. Паліндром - це рядок, який можна читати зліва направо і справа наліво однаково, ігноруючи пробіли, регістр та розділові знаки.
// function isPalindrome(str) {
//     const cleanStr = str.replace(/[\W_]/g, "").toLowerCase();
//     const reversedStr = cleanStr.split("").reverse().join("");
//     return cleanStr === reversedStr;
//   }
  
// console.log(isPalindrome("А роза упала на лапу Азора")); 
// console.log(isPalindrome("Шалаш")); 
// console.log(isPalindrome("Hello, World!")); 

// function findMax(arr) {
//     let max = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i]; 
//       }
//     }
//     return max;
//   }
// console.log(findMax([10, 5, 30, 8]));
// console.log(findMax([-5, -2, -10, -3]));
// console.log(findMax([1, 1, 1, 1]));




