// function same(arr1, arr2) {
//     if (arr1.length != arr2.length) {
//         return false
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if (correctIndex == -1) {
//             return false
//         }
//     }
//     return true;
// }


// let arr1 = [1, 2, 3, 4]
// let arr2 = [9, 1, 4, 16]

// console.log(same(arr1, arr2))

// function anagram(str, str1) {
//     for (let i = 0; i < str.length; i++) {
//         let str1Elem = str.split('').sort().join('')
//         let str2Elm = str1.split('').sort().join('')
//         if (str1Elem !== str2Elm) {
//             return false;
//         }
//         return true;

//         console.log(elem)
//     }
// }

// let str = "rat";
// let str1 = "art";
// console.log(anagram(str, str1)) // return true or false;

// function sumZero(arr) {
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] == 0) {
//             return [arr[i], arr[j]]
//         }
//     }
// }

// or
//     let first = arr[0]
//     let last = arr.length - 1;
//     while (first < last) {
//         let sum = arr[first] + arr[last];
//         if (sum == 0) {
//             return [arr[first], arr[last]]
//         } else if (sum > 0) {
//             last--;
//         } else {
//             first++
//         }
//     }
//     return -1;
// }

// console.log(sumZero([-3, -2, -1, 0, 1, 4, 4])) // [-3,3]
// console.log("Hello console>>>>>");
// function accpString(str) {
//     let result = []
//     for (let i = str.length - 1; i >= 0; i--) {
//         result.push(str[i])
//     }
//     return result.join('');
// }

// console.log(accpString('umrumyajnas'))

// function calCulateSum(num) {
//     if (num == 0) return num;
//     let result = 1
//     for (let i = 1; i <= num; i++) {
//         console.log(i, "III");
//         result *= i
//     }
//     return result;
// }

// console.log(calCulateSum(0));


// function logAtMax(n) {
//     for (let i = 0; i <= Math.max(n, 6); i++) {
//         console.log(i)
//     }
// }
// logAtMax(15);
// function double(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] ** 2)
//     }
//     return result;
// }

// console.log(double([1, 2, 3]));
// function charCount(str) {
//     let obj = {}
// for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase()
//     if (/[0-9a-z]/.test(char)) {
//         if (obj[char] > 0) {
//             obj[char]++
//         } else {
//             obj[char] = 1;
//         }
//     }
// }
// return obj;

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase()
//         if (/[0-9a-z]/.test(char)) {
//             obj[char] = ++obj[char] || 1
//         }
//     }
//     return obj;
// }

// console.log(charCount('Hello my name is h.king')); // {h:1,e:1,l:2,o:1}

// function findVowel(str) {
//     let result = [], count = 0
//     let vowel = ['a', 'e', 'i', 'o', 'u']
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < vowel.length; j++) {
//             if (str[i] == vowel[j]) {
//                 count++
//                 result.push(str[i])
//             }
//         }
//     }
//     return { result, count };
// }

// let str = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean"
// console.log(findVowel(str));

// function countUniqueValues(arr) {
//     let result = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] != arr[i + 1]) {
//             result.push(arr[i + 1])
//         }
//     }
//     return result;
// }

// console.log(countUniqueValues([1, 1, 1, 3, 5, 5, 5, 1, 1, 2])) // [2]
// function maxSubarraySum(arr, num) {
//     let max = 0;
//     for (let i = 0; i < num; i++) {
//         max += arr[i]
//     }

//     let temp = max;
//     for (let i = num; i < arr.length; i++) {
//         temp = temp - arr[i - num] + arr[i]
//         max = Math.max(temp, max)
//     }
//     return max;
// }

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 3,7,7,10,9,6

// function findIndex(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == num) {
//             return i
//         }
//     }
// }
// console.log(findIndex([1, 2, 3, 4, 5, 6], 4)) //3

// function findMinimumNoteCount(amount) {
//     let notes = [2000, 500, 200, 100, 50, 20, 10]
//     let countNotes = new Array(7).fill(0) // [0,0,0,0,0,0,0]
//     for (let i = 0; i < 7; i++) {
//         while (amount >= notes[i]) {
//             countNotes[i] = Math.floor(amount / notes[i]) //2710 / 2000 =
//             amount = amount % notes[i]
//         }
//     }

//     for (let i = 0; i < 7; i++) {
//         if (countNotes !== undefined) {
//             console.log(`${notes[i]}: ${countNotes[i]}`)
//         }
//     }
// }

// findMinimumNoteCount(2710) // obj = {2000:1, 500:1,200:1}

// function findSecHighest(arr) {
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp;
//         }
//     }
// }
// return arr[arr.length - 2];


// }

// let arr = [100, 200, 3, 4, 5, 6, 12, 6, 32, 66, 99]
// console.log(findSecHighest(arr));

// function fibonacci(num) {
//     let result = [0, 1]
//     for (let i = 2; i <= num; i++) {
//         result.push(result[i - 2] + result[i - 1])
//     }
//     return result;
// }
// console.log(fibonacci(5)) //[ 0, 1, 1, 2, 3 ];

// function factorial(num) {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= i
//     }
//     return result;
// }

// console.log(factorial(5)); // 5*4*3*2*1


// const person = {
//     name: 'John',
//     age: 30,
//     occupation: 'Engineer',
// };

// for (let key in person) {
//     if (person[key] == "John") {
//         console.log(`${key} : ${person[key]}`)
//     }
// }

// function swapEveryTwoElem(str) {
//     let result = []
//     for (let i = 0; i < str.length; i += 2) {
//         result.push(str[i + 1], str[i])
//     }
//     return result;
// }

// console.log(swapEveryTwoElem('global'));

function anagram(arr) {
    for (let i = 0; i < arr.length; i++) {
        let Elem = arr[i].split('').sort()
        console.log(Elem, "<<<<char")
    }
}

let arr = ['eat', 'tea', 'ten', 'ate', 'net', 'bet']
console.log(anagram(arr))