






// Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:

// a) multiply each element by 10; 

// b) return array with all elements equal to 3; 

// c) return the product of all elements;

// ​After you finish, make sure all your functions are in ONE JS file .


// ..............................................

// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

let x = max(4, 3)
function max (a, b){
if (a> b){
    return a;
}
}
console.log(x);

// ................................................
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
let m = maxOfThree(56,7,11)
function maxOfThree(a,b,c){
if(a>b && a>c){
    return a;
}
else if (b>a && b>c){
    return b;
}
else {
    return c;
}   
}
console.log(m);


// ..........................
// Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(b){

    if(b =='a' || b == 'e' || b =='i' || b == 'o'|| b =='u' ){
return true;
    }
    else{
        return false
    }
}
console.log(isVowel('z'));


//.............................................
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
let a = [1,2,3,4];
function sum(a ){
   let  total = 0;
    for (let i =0; i < a.length; i++ ){
        total += a[i];
        
    }
    return total;
}
console.log(sum(a));

let b = [1,2,3,4];
function multiply(b){
let product = 1;
    for (let i = 0; i<b.length; i++){
product *= b[i];

    }
    return product;
}

console.log(multiply(b));



//...................................
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
let newStr = ""
let str = "jag testar";
function reverse(str){
for (let i = str.length-1; i >=0; i--){
newStr += str[i];
}
return newStr;
}
console.log(reverse(str));


//.............................................................................................
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

let words = [ "hello","Adidas", "Computers","Mahlet Seyoum"];
let wordsLength = words[0].length
let count = 0;
function findLongestWord(words){
  for (let i =0; i < words.length; i++){
if(words[i].length> wordsLength){
count = i;
wordsLength = words[i].length;
}

    }  
    return wordsLength; 
}
console.log(findLongestWord(words));



// //...............................
// // Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
var filterLongWords = function (array, i) {
    var newArray = [];
    array.forEach(function (element) {
        if( element.length > i ) 
        { newArray.push(element)};
    });
    return newArray;
}

console.log(filterLongWords(["hello", "There"], 3));



