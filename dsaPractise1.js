// function isPalindrome(str){
// let first =0;
// let last = str.length-1

// while(first<last){
//     if(str[first] != str[last]){
//         return false
//     }
//     first ++
//     last --
// }
// return true


// for(let i=0;i<str.length;i++){
//     if(str[i] != str[str.length-1 -i]){
//         return false
//     }
// }
// return true

// }

// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello"));   // Output: false


// function findMax(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr[arr.length-1];

//     // or
//     let max = arr[0];
//    for(let i=1;i<arr.length;i++){
//        if(arr[i] > max){
//            max = arr[i]
//        }
//    }
//    return max;
// }


// console.log(findMax([3, 9, 2, 7,200, 1,3,10,100])); // Output: 9

// function factorial(num){
//     if(num ==1) return num;

//     return num * factorial(num-1)
// }
// console.log(factorial(5));

// function binarySearch(arr,num){
//     let left = 0;
//     let right = arr.length -1;
//     while(left <= right){
//         let mid = Math.floor((left + right)/2)
//         if(arr[mid] === num) {
//             return mid;
//         }else if(arr[mid] > num){
//             right = mid -1;
//         }else{
//             left = mid + 1;
//         }
//     }
//     return -1
// }

// console.log(binarySearch([1, 3, 5, 7, 9], 5)); // Output: 2


// overlaping interval;
// let arr = [[1, 3], [2, 6], [7, 9], [8, 10][15, 18]]

//[[1,6],[7,10],[15,18]]


// 1    3
//   2     6
//           7      9
//               8     10
//                         15    18

// function palindrom(num) {
//     // if (num < 0) return false // improvement
//     return num < 0 ? false : (num == +num.toString().split('').reverse().join(''))
// }

// console.log(palindrom(11))

// function fibonacci(num) {
// let result = [0, 1]
// for (let i = 2; i <= num; i++) {
//     result.push(result[i - 1] + result[i - 2]) // 1 + 1 = 1
// }
// return result;
// }

// console.log(fibonacci(5)) // 0,1,1,2,3,5


// function anagram(str1, str2) {
// let str = str1.split('').sort().join('')
// let string2 = str2.split('').sort().join('')
// return str == string2 ? true : false;
// console.log(str, string2)

//or
// if (str1.length != str2.length) return false
// let obj = {}
// for (let i = 0; i < str1.length; i++) {
//     if (obj[str1[i]] > 0) {
//         obj[str1[i]]++;
//     } else {
//         obj[str1[i]] = 1
//     }
// }

// for (let i = 0; i < str2.length; i++) {
//     let char = str2[i]
//     if (!obj[char]) {
//         return false
//     } else {
//         obj[char] -= 1
//     }
// }
// return true

//
//     let obj1 = {}
//     let obj2 = {}
//     for (let i = 0; i < str1.length; i++) {
//         obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
//         obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
//     }
//     // console.log(obj1, "<<<<>>>>>>>", obj2)

//     for (let key in obj1) {
//         if (obj1[key] !== obj2[key]) return false;
//     }
//     return true;
// }

// let str1 = 'anagram'
// let str2 = 'naagram'
// console.log(anagram(str1, str2)) // true or false

// two sum
// input nums = [2,7,11,15],target = 9
// output : nums = [0,1]


// function towSum(arr, num) {
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] + arr[i + 1] == num) {
//         return [i, i + 1]
//     }
// }

//     let obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[num - arr[i]] >= 0) { // 9 - 2
//             return [obj[num - arr[i]], i]
//         } else {
//             obj[arr[i]] = i
//         }
//     }
// }

// let nums = [2, 7, 11, 15];
// let target = 9
// let nums = [3, 2, 4];
// let target = 6
// console.log(towSum(nums, target))

//Best time to Buy and sell Stocks
//input prices = [7,1,5,3,6,4] output = 5 // 6-1 = 5 profit
//input prices = [7,1,4,3,1] output = 0

// function maxProfit(arr) {
// let maxProfit = 0;
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         let tempProfit = arr[j] - arr[i]
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

// function romanToInt(str) {
//     let romanNum = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }
//     let result = 0
//     for (let i = 0; i < str.length; i++) {
//         let curELem = romanNum[str[i]]; //50
//         let nextELem = romanNum[str[i + 1]]//5
//         console.log(curELem, nextELem, "curNext")
//         if (curELem < nextELem) {
//             result = result + (nextELem - curELem)
//             i++
//         } else {
//             result += curELem;
//             console.log(result)
//         }

//     }
//     return result;
// }

// console.log(romanToInt('MCMXCIV')) // output = 1994


// function isValidPanCardNo(panCard) {
//     let regex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
//     if (regex.test(panCard) == true) {
//         return true
//     }
//     return false
// }

// console.log(isValidPanCardNo('CVMPM3250K'))


// function mostCommanlyRepeatedArr(arr){
//     let obj={}
//    for(let i=0;i<arr.length;i++){
//        if(obj[arr[i]]>0){
//            obj[arr[i]]++
//        }else{
//            obj[arr[i]] = 1;
//        }
//    }
//    let hightestRepeated = null;
//    let highestCount = 0;
//    for(let element in obj){
//       if(obj[element] > highestCount){
//            hightestRepeated = element;
//            highestCount = obj[element]
//       }
//    }
//    return{ hightestRepeated, highestCount }
// }

// console.log(mostCommanlyRepeatedArr([1,7,7,7,7,7,7,2,3,4,5,6,7,7,8,])) // 7