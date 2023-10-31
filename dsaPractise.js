
// function same(arr1, arr2) {
//     if (arr1.length != arr2.length) return "both arr length should be equal!";
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         // console.log(correctIndex, "<<<<<correctIndex")

//         if (correctIndex == -1) {
//             return false;
//         }
//     }
//     return true;

// }



// let arr1 = [1, 2, 3, 4]
// let arr2 = [9, 1, 4, 16]

// console.log(same(arr1, arr2))



// function same(arr1, arr2) {
//     let frequentCount1 = {}
//     let frequentCount2 = {}

//     for (let i = 0; i < arr1.length; i++) {
//         if (frequentCount1[arr1[i]] > 0) {
//             frequentCount1[arr1[i]]++;
//         } else {
//             frequentCount1[arr1[i]] = 1;
//         }
//     }

//     for (const count of arr2) {
//         if (frequentCount2[count] > 0) {
//             frequentCount2[count]++
//         } else {
//             frequentCount2[count] = 1;
//         }
//     }

//     //     for (let key in frequentCount1) {
//     //         if (frequentCount2[key ** 2] !== frequentCount1[key]) {
//     //             return false
//     //         }
//     //         if (!(key ** 2 in frequentCount2)) {
//     //             return false;
//     //         }
//     //     }
//     return true;

// }

// console.log(same(arr1, arr2))


// function anagram(str, str1) {
//     let obj = {}
//     for (let i = 0; i < str.length; i++) {
//         if (obj[str[i]] > 0) {
//             obj[str[i]]++;
//         } else {
//             obj[str[i]] = 1;
//         }
//     }
//     // console.log(obj, "obj");
//     for (let i = 0; i < str1.length; i++) {
//         let char = str1[i]
//         if (!obj[char]) {
//             return false
//         } else {
//             obj[char] -= 1;
//         }
//     }
//     return true;

// }
// let str = "rat";
// let str1 = "cat";
// console.log(anagram(str, str1)) // return true or false;

// function sumZero(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] == 0) {
//                 return [arr[i], arr[j]]
//                 result.push(arr[i], arr[j])
//                 break;
//             }
//         }
//         return result;
//     }
// }



// function sumZero(arr) {
//     let left = arr[0];
//     let right = arr.length - 1;

//     while (left < right) {
//         let sum = arr[left] + arr[right];
//         if (sum == 0) {
//             return [arr[left], arr[right]]
//         } else if (sum > 0) {
//             right--;
//         } else {
//             left--;
//         }
//     }
// }

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3,3]

// function accpString(str) {
//     let reverseStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseStr += str[i]
//     }
//     return reverseStr;
// }
// console.log(accpString('sanjaymurmu'))

// function calCulateSum(n) {
//     let total = 0
//     for (let i = 0; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }

// console.log(calCulateSum(5));

// function calCulateSum(n) {
//     return n * (n + 1) / 2;
// }
// console.log(calCulateSum(3));

// let t1 = performance.now()
// console.log(calCulateSum(3));
// let t2 = performance.now()

// console.log(`Time Elapsed: ${(t2 - t1) / 1000}`)
// function printAllPair(n) {
//     for (let i = 0; i <= n; i++) {
//         for (let j = 0; j <= n; j++) {
//             console.log(i, j)
//         }
//     }
// }

// printAllPair(5)


// function countUpandDown(n) {
//     for (let i = 0; i <= n; i++) {
//         console.log(i)
//     }
//     console.log('At the top! \n Going down...')
//     for (let i = n; i >= 0; i--) {
//         console.log(i)
//     }
// }
// countUpandDown(10);


// function logAtleast(n) {
//     for (let i = 0; i <= Math.min(5, n); i++) {
//         console.log(i)
//     }
// }
// logAtleast(6)

// function logAtMax(n) {
//     for (let i = 0; i <= Math.max(5, n); i++) {
//         console.log(i)
//     }
// }
// logAtMax(6)

// function sum(arr) {
//     let result = 0
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i]
//     }

//     return result;
// }
// console.log(sum([1, 2, 3]))

// function double(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += 2 * arr[i]
//     }
//     return result;
// }
// console.log(double([1, 2, 3]));

// function sum(b, a) {
//     return b / a;
// }
// console.log(sum("30.90", 20.10,));


// function charCount(str) {
//     let obj = {}
//     for (let i = 0; i < str.length; i++) {
//         // return result;
//         // for loop in order to loop count each character
//         // if found more the one increase the count
//         // if found only 1 count as 1;
//         // if found special character leave/don't do any thing
//         // if (obj[str[i]] > 0) {
//         //     obj[str[i]]++;
//         // } else {
//         //     obj[str[i]] = 1;
//         // }
//         char = str[i].toLowerCase()
//         if (/[0-9a-z]/.test(char)) {
//             obj[char] = ++obj[char] || 1;
//         }
//     }
//     return obj;
// }
// console.log(charCount('Hello my name is h.king')); // {h:1,e:1,l:2,o:1}

// function findVowel(str) {
//     let vow = ["a", "e", "i", "o", "u"]
//     let result = '', count = 0, obj = {}
//     for (let i = 0; i <= str.length; i++) {
//         for (let j = 0; j < vow.length; j++) {
//             if (str[i] == vow[j]) {
//                 count++;
//                 result += str[i];
//                 if (obj[str[i]] > 0) {
//                     obj[str[i]]++;
//                 } else {
//                     obj[str[i]] = 1;
//                 }

//             }
//         }
//     }
//     return { result, count, obj };

// }
// let str = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean"
// console.log(findVowel(str));



// function findNonReapeatUnique(...arg) {
//     let arr = arg.flat() //
//     arr.sort()
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//       if(arr[i] !== arr[i+1]){
//           result.push(arr[i])
//       }
//       if(arr[i] == arr[i+1]){
//           i++;
//           arr[i] = arr[i+1]
//       }
//     }
//     // console.log(result, "iiii");
//     return result;
// }


// let arr1 = [1, 2, 3]
// let arr2 = [3, 4]
// let arr3 = [5, 2, 4]
// findUnique(arr1, arr2, arr3) // 1,5

// function countUniqueValues(arr) {
//     if (arr.length === 0) return 0;
//     let i = 0; //1
//     for (let j = 1; j < arr.length; j++) { //2 < 6
//         if (arr[i] !== arr[j]) { //1 !==2
//             i++; //2
//             arr[i] = arr[j] // 2 = 2
//         }
//     }
//     return i + 1; // 1+1 = 2

// or

// let result =[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] == arr[i+1]){
//             i++;
//             arr[i] = arr[i+1]
//         }else{
//             result.push(arr[i+1])
//         }
//     }
//     return result;
// }

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // [2]

// function maxSubarraySum(arr, num) {
//     // console.log(arr.length - num + 1, "length");
//     let max = -Infinity;
//     for (let i = num; i < arr.length - num + 1; i++) {
//         temp = 0;
//         for (let j = 0; j < num; j++) {
//             temp += arr[i + j] // arr[i + j]
//             // console.log(temp, "temp");
//         }
//         if (temp > max) {
//             max = temp;
//         }
//     }
//     return max;

// }
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 3,7,7,10,9,6

// function maxSubarraySum(arr, num) {
//     // return consequet biggest number;
//     let maxSum = 0;
//     let tempSum = 0;
//     // add first two number and treat it as biggest maxno as of now
//     for (let i = 0; i < num; i++) {
//         maxSum += arr[i]
//     }
//     tempSum = maxSum; //3
//     // Add next two no  removing first name and add next elem;
//     for (let i = num; i < arr.length; i++) {
//         tempSum = (tempSum - arr[i - num]) + arr[i];//3 -
//         // declare  temp varible and compare with max no
//         maxSum = Math.max(tempSum, maxSum)
//     }
//     // and with math.max return max no;
//     return maxSum;

// }
//                            3 > 7
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //
// function findIndex(arr, num) {
//     //loop throgh the arr if found match retrun index
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == num) {
//             return i
//         }
//     }
//     // else return -1
//     return -1;
//     // return indexNo
// }

// console.log(findIndex([1, 2, 3, 4, 5, 6], 4)) //3

// function findIndex(arr, num) {
// first elem let it be arr[0]
// right = arr.length -1;
// while left <  right
// find middle
// sum
// check if middle > num then right = right -1
// else middle < num , left = left+1;
// else return middle elem;

//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let middle = Math.floor((left + right) / 2);
//         let currElem = arr[middle];

//         if (currElem < num) {
//             left = middle + 1
//         } else if (currElem > num) {
//             right = middle - 1
//         } else {
//             return middle;
//         }
//     }
//     return -1;
// }

// function findMinimumNoteCount(amount) {
//     //  create arr of notes
//     // loop over it;
//     //  check amount > = notes and return left over note
//     // return obj

//     let notes = [2000, 500, 200, 100, 50, 20, 10];
//     let notesCount = Array(7).fill(0)

//     for (let i = 0; i < 7; i++) {
//         if (amount >= notes[i]) {
//             notesCount[i] = Math.floor(amount / notes[i]) // 2700/2000 = 1
//             amount = amount % notes[i]
//         }
//     }

//     for (let i = 0; i < 7; i++) {
//         if (notesCount != undefined) {
//             console.log(`${notes[i]} : ${notesCount[i]}`)
//         }
//     }

// }
// findMinimumNoteCount(2710) // obj = {2000:1, 500:1,200:1}

// find the second hight element from arr;



// function findSecHighest(array) {
//     let arr = array.sort((a, b) => a - b)

//     return arr[arr.length - 2]
// }
// let arr = [100, 200, 3, 4, 5, 6, 12, 6, 32, 66, 99]
// console.log(findSecHighest(arr));

// function babbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp;

//             }
//             // return arr[arr.length - 2]
//         }
//     }
//     return arr;
// }

// console.log(babbleSort([100, 200, 3, 4, 5, 6, 12, 6, 32, 66, 99]));

// function fibonacci(n) {
//     let result = [0, 1]
//     for (let i = 2; i < n; i++) {
//         result.push(result[i - 1] + result[i - 2])
//     }
//     return result;
// }

// console.log(fibonacci(5)) //[ 0, 1, 1, 2, 3 ]

// function factorial(n) {
//     result = 1;
//     for (let i = 1; i <= n; i++) {
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
//     console.log(`${key}: ${person[key]}`)
// }

// for (let key in person) {
//     // console.log(`${key}: ${person[key]}`)
//     if (key == 'name') {
//         console.log(`${key} : ${person[key]}`)
//     }
// }



// function swapEveryTwoElem(str) {
//     let arr = str.split('')
//     for (let i = 0; i < arr.length; i+=2) {
//         let temp = arr[i]
//         arr[i] = arr[i+1]
//         arr[i+1] = temp;
//     }
//     return arr;

// }
// console.log(swapEveryTwoElem('global'));  // swap between every two element //output: lgbola

// function findUnique(...arg) {
//     let arr = arg.flat().sort((a, b) => a - b)
//     let obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]] > 0) {
//             obj[arr[i]]++;
//         } else {
//             obj[arr[i]] = 1;
//         }
//     }
//     let uniqueElem = []
//     for (let element in obj) {
//         if (obj[element] === 1) {
//             uniqueElem.push(parseInt(element))
//         }
//     }

//     console.log(uniqueElem, "dfsfdfs");

// }

// console.log(findUnique(arr1, arr2, arr3));


// function findLostChild(arr1, arr2, arr3) {
//     return res = arr1.filter(elem => !arr3.includes(elem))

// or
//  let result=[]
// arr1.sort((a,b)=>a-b)
// arr3.sort((a,b)=>a-b)
// console.log(arr1,arr3)
// let result=[]
// for(let i=0;i<arr1.length;i++){
//     if(arr1[i] !== arr3[i]){
//         result.push(arr1[i])
//     }
// }
// return result
// }


// console.log(findLostChild(arr1, arr2, arr3));

// with using inbuild methods
// function findLostElem(arr1, arr2, arr3) {
//     let result = []
//     for (let i = 0; i < arr1.length; i++) {
//         let findInArr2 = false
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr3[j]) {
//                 findInArr2 = true
//                 break;
//             }
//         }
//         if (findInArr2 && !arr3.includes(arr1[i])) {
//             result.push(arr1[i])
//         }
//     }

// }
// let arr1 = [1, 5, 8, 123, 7]
// let arr2 = [1, 5, 123, 7]
// let arr3 = [1, 5, 7]
// console.log(findLostElem(arr1, arr2, arr3));


// function anagram(arr) {
//     // obj
//     // loop elm and sort
//     //  and check obj
//     let obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         let elem = arr[i].split('').sort().join('')
//         if (obj[elem]) {
//             //push
//             obj[elem].push(arr[i])
//         } else {
//             obj[elem] = [arr[i]] // arr
//         }
//     }
//     return Object.values(obj) // for only values
//     return Object.entries(obj) // [[]]
//     console.log(Object.values(obj), "obj")
// }

// let arr = ['eat', 'tea', 'ten', 'ate', 'net', 'bet']
// console.log(anagram(arr))


// function isPalindrome(str){
//     //clear unwanted garbadge
//   // Compare the cleaned string with its reverse
//     let clearStr = str.replace(/[^a-zA-z0-9]/g, '').toLowerCase()
//     let clearReplceStr = clearStr.split('').reverse().join('')
// for (let i = 0; i < clearStr.length; i++) {
//     if (clearStr[i] !== clearReplceStr[i]) {
//         return false
//     }
// }
//     return true
//     console.log(clearStr,clearReplceStr,"LLL")
//   }

//   console.log(isPalindrome('hello'))
//   console.log(isPalindrome("A man a plan a canal Panama"));


// function pallindrom(str1, str2) {
//     let obj = { m: 2, 0: 1, }
//     for (let i = 0; i < str1.length; i++) {
//         if (obj[str1[i]] > 0) {
//             obj[str1[i]]++
//         } else {
//             obj[str1[i]] = 1;
//         }
//     }
//     // console.log(obj, "obj");

//     for (let i = 0; i < str2.length; i++) {
//         if (!obj[str2[i]]) {
//             return false
//         } else {
//             obj[str2[i]]--;
//         }
//     }
//     return true;
// }

// let str = "mom"
// let str1 = "omm"

// console.log(pallindrom(str, str1));



// function sum(arr) {
//     // return obj;
//     // for loop to iterate;
//     // for in loop
//     // calculate
//     let obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         for (let fruit in arr[i]) {
//             // if(arr[i].hasOwnProperty(fruit)){
//             char = fruit.toLowerCase()
//             if (obj[char]) {
//                 obj[char] += arr[i][fruit]
//             } else {
//                 obj[char] = arr[i][fruit]
//             }
//             // }
//         }
//     }
//     return obj
// }
// let arr = [
//     { "apple": 4, "banana": 3, "orange": 3 },
//     { "apple": 6, "banana": 17, "leechi": 3 },
//     { "Apple": 20, "LEECHI": 7 }
// ]
// console.log(sum(arr))

//counts the number of occurrences of a given substring within a string.
// function countSubString(mainStr, subStr) {
//     let regex = new RegExp(subStr, "g")
//     console.log(regex, "<<<<<<<", typeof regex)
//     let match = mainStr.match(regex)
//     return match ? match.length : 0
// }

// let mainString = "mandhimanman";
// let subString = "man";
// console.log(countSubString(mainString, subString)) //3


// function longestCommonPrefix(string) {
//     // sort
//     // first
//     // last
//     // loop & match the condition
//     // return commanPrefix;
//     let sortedStr = string.sort()
//     let first = sortedStr[0];
//     let last = sortedStr[sortedStr.length - 1]

//     let countCommonPrefix = ''
//     for (let i = 0; i < first.length; i++) {
//         if (first[i] == last[i]) {
//             countCommonPrefix += first[i]
//         }
//     }
//     return countCommonPrefix;
// }

// const stringArray = ['flower', 'flow', 'flight'];
// console.log(longestCommonPrefix(stringArray));

//########## most asked Array question ###############################
// function findMaxElement(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return arr[arr.length - 1];
// }

// const array = [3, 7, 1, 9, 4,];
// console.log(findMaxElement(array)); // Output: 9


// function removeDuplicates(arr){
//     let result=[]
//     arr.sort((a,b)=>a-b)
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] !== arr[i+1]){
//             result.push(arr[i])
//         }
//     }
//     return result;


// let res = new Set(arr)
// return[...res]

// }
// const array = [1,2,2,3,4,4,5,1,100,103];
// console.log(removeDuplicates(array))

// function arrayIntersection(arr1,arr2){
//     let result=[]
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i] === arr2[j]){
//                 result.push(arr1[i])
//             }
//         }
//     }
//     return result;
// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(arrayIntersection(array1, array2));



// function mergeBothInSortOrder(arr, arr1) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i])
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         result.push(arr1[i])
//     }
//     result.sort((a, b) => a - b)
// }

// const arrayA = [1, 3, 5, 7, 9];
// const arrayB = [2, 4, 6, 8, 10];
// console.log(mergeBothInSortOrder(arrayA, arrayB))

// more optimised
// function mergeSort(arr1,arr2){
//     let i = 0;
//     let j = 0;
//     let result =[]
//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i] <= arr2[j]){
//             result.push(arr1[i])
//             i++
//         }else{
//             result.push(arr2[j])
//             j++
//         }
//     }

//     while(i<arr1.length){
//         result.push(arr1[i])
//         i++
//     }
//     while(j<arr2.length){
//         result.push(arr2[j])
//         j++
//     }
//       return result;
//   }


//   const array1 = [1, 2, 3, 4, 5];
//   const array2 = [3, 4, 5, 8, 9];

//   console.log(mergeSort(array1, array2));


// function isRotation(str1,str2){
//    if(str1.length != str2.length) return false;
//    const concatStr = str1 + str1
//    if(concatStr.includes(str2)){
//      return true
//    }
//     return false;

// or
// if (str1.length != str2.length) return false
// let obj = {}
// for (let i = 0; i < str1.length; i++) {
//     if (obj[str1[i]] > 0) {
//         obj[str1[i]]++
//     } else {
//         obj[str1[i]] = 1;
//     }
// }
// for (let i = 0; i < str2.length; i++) {
//     if (!obj[str2[i]]) {
//         return false
//     }
//     // else{
//     //     obj[str2[i]]-=1
//     // }
// }
// return true
// }

// const string1 = 'abcdef'; // str = 'abcdefdefabc'
// const string2 = 'defabc';
// console.log(isRotation(string1, string2)); // Output: true


// function compressString(str){
//     let compressed ='';
//     let count =1;
//     for(let i=0;i<=str.length;i++){
//         if(str[i] == str[i+1]){
//             count++

//         }else{
//             compressed+=str[i] + count;
//             count =1;
//         }
//     }
//     return compressed;
// }

// const input = 'aabcccccaaa';// a2b
// console.log(compressString(input)); // Output: "a2b1c5a3"

//
// function isValidParentheses(str) {
//     let stack = []
//     let pairs = { '(': ')', '{': '}', '[': ']' }
//     for (let i = 0; i < str.length; i++) {
//         if (pairs[str[i]]) {
//             stack.push(str[i])
//         } else {
//             if (pairs[stack.pop()] !== str[i]) {
//                 return false;
//             }
//         }
//     }
//     return stack.length == 0
//     console.log(stack, "stack")
// }
// const parenthesesString = '({[]})';
// console.log(isValidParentheses(parenthesesString)); // Output: true


// function generatePermutation (arr){
//    let resultArr = [];
//    if(arr.length === 0) return [];
//    if(arr.length ===1) return [arr];

//    for(let i =0 ; i<arr.length ; i++){
//      const currentElement = arr[i]; // 1

//      const otherElements = arr.slice(0,i).concat(arr.slice(i+1)); // [1 2]
//      const swappedPermutation = generatePermutation(otherElements); //

//      for(let j =0 ; j < swappedPermutation.length ; j++){
//        const finalSwappedPermutation = [currentElement].concat(swappedPermutation[j]);

//        resultArr.push(finalSwappedPermutation);
//      }
//    }

//    return resultArr;
// }

// const arr = [1,2,3];
// console.log(generatePermutation(arr));

//Best time to Buy and sell Stocks
//input prices = [7,1,5,3,6,4] output = 5 // 6-1 = 5 profit
//input prices = [7,1,4,3,1] output = 0

// function maxProfit(arr) {
//     let maxProfit = 0;
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             let tempProfit = arr[j] - arr[i]
//             if (tempProfit > maxProfit) {
//                 maxProfit = tempProfit
//             }
//         }

//     }
//     return maxProfit;

// }
// let prices = [7, 1, 5, 3, 6, 4]
// console.log(maxProfit(prices))

// function maxProfit(arr) {
// let profit = 0;
// let minStockPurchasePrice = arr[0]
// let tempProfit = 0
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < minStockPurchasePrice) {
//         minStockPurchasePrice = arr[i]
//     }
//     if (arr[i] > tempProfit) {
//         tempProfit = arr[i]
//     }
// }
// return profit = tempProfit - minStockPurchasePrice;


//or
// let maxProfit = 0;
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         let tempProfit = arr[j] - arr[i] //1 - -7 = -6
//         if (tempProfit > maxProfit) {
//             maxProfit = tempProfit
//         }
//     }

// }
// return maxProfit;

// or Greedy approach
//     let minStockPurchasePrice = arr[0] || 0;
//     let profit = 0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < minStockPurchasePrice) {
//             minStockPurchasePrice = arr[i];
//         }
//         let currentProfit = arr[i] - minStockPurchasePrice;
//         profit = Math.max(profit, currentProfit)
//     }

//     return profit;

// }
// let prices = [7, 1, 5, 3, 6, 4]
// min = 7 => 1
// profit = 0 => 5-1 => 4 => 6-1 =>5
// let prices = [7, 6, 4, 3, 1]
// console.log(maxProfit(prices))



// function romanToInt(str){
//     let romanToInt={"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
//     let  =0
//     for(let i=0;i<str.length;i++){
//         curElem = romanToInt[str[i]];
//         nextELem = romanToInt[str[i+1]]
//         if(curElem < nextELem){
//             result =result + (nextELem - curElem)
//             i++
//         }else{
//             result+=curElem;
//         }
//     }
//     return result;
// }

// console.log(romanToInt('MCMXCIV')) //MCMXCIV output = 1994// 1000 + 900 + 90 + 4

// function fizzBuzz(num) {
//     let result = [];
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 == 0 && i % 5 === 0) {
//             result.push('fizzBuzz')
//         } else if (i % 3 === 0) {
//             result.push('fizz')
//         } else if (i % 5 == 0) {
//             result.push('buzz')
//         } else {
//             result.push(i)
//         }
//     }
//     return result;
// }
// console.log(fizzBuzz(3)) //Output: [1 2 Fizz]


// function flatArr(array){
//     // let arr = array.flat(Infinity)
//     // return arr;
//     // or
//     let result =[]
//     for(let i=0;i<array.length;i++){
//       if(Array.isArray(array[i])){
//           result = result.concat(flatArr(array[i]))
//       }else{
//         result.push(array[i])
//       }
//     }
//     return result;

//or
// let result = []
// let arr = array
// for (let i = 0; i < arr.length; i++) {
//     console.log(typeof arr[i])
//     if (typeof arr[i] === "number") {
//         result.push(arr[i])
//     }
//     if (typeof arr[i] == 'object') {
//         result = result.concat(flatArr(arr[i]))
//     }
// }
// return result;

// }

// console.log(flatArr(array))
// let array = [1,2,3,[4,[5,[6,7,[10,20]]]]] // output = array = [1,2,3,4,5,6,7,10,20]

let person = {
    name: "John",
    contact: {
        phone: "987-654-3210",
        email: "john123@xyz.com",
        address: {
            city: "berlin",
            country: "germany"
        }
    }
};
function capitalizeFirstLetter(str) {
    return str.charAt().toUpperCase() + str.slice(1)
}
function capitalize(obj) {
    let newObj = {}
    for (let key in obj) {
        console.log(typeof (obj[key]), "<<<<<")
        if (typeof obj[key] == 'object') {
            newObj[capitalizeFirstLetter(key)] = capitalize(obj[key])
        }
        if (typeof obj[key] == 'string') {
            // console.log(capitalizeFirstLetter(key), "KEYYYYYYYY", obj[key])
            newObj[capitalizeFirstLetter(key)] = obj[key]
        }
    }
    return newObj;
}
console.log(capitalize(person))


// function UpperWithCycle(str){
//     str = str.split(' ')
//     for(let i=0;i<str.length;i++){
//         str[i] = str[i].substring(0,1).toUpperCase()+ str[i].substring(1).toLowerCase()
//     }
//     return str.join(' ')
// }
// console.log(UpperWithCycle('hello everyone my name is Andrew, how are you doing?'))


// const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// for (let i = 0; i < days.length; i++) {
//     console.log(days[i].substring(0, 1).toUpperCase() + days[i].substring(1).toLowerCase())
// }