const getMaxMin = (array) =>
  array.reduce(
    (acc, element, index) => {
      if (index === 0) {
        acc.max = element;
        acc.min = element;
      }
      if (acc.max < element) {
        acc.max = element;
      }
      if (acc.min > element) {
        acc.min = element;
      }
      return acc;
    },
    { min: 0, max: 0 }
  );

const result = getMaxMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const sum = result.max + result.min;
console.log(sum);

const multiply = (a, b) => {
  let result = 0;
  const positive = Math.abs(a) === a;

  for (let i = 0; i < Math.abs(a); i++) {
    result = positive ? result + b : result - b;
  }
  return result;
};

const multi = multiply(2, 3);
console.log(multi);

const getBiggest = (array) => array.reduce((acc, el) => (acc > el ? acc : el));
const bigger = getBiggest([1, 2, 3, 0, 5, 6, 7, 8, 9, 10]);
console.log(bigger);

const clean = (array) =>
  array.reduce((acc, el) => {
    if (el) {
      acc.push(el);
    }
    return acc;
  }, []);

const cear = clean([1, , 3, 0, , 6, 7, 8, null, 10]);

console.log(clear);

const arr = [
  [1, 2],
  [
    [3, 4],
    [1, []],
  ],
];

const flattent = (array) => arr.reduce((acc, el) => acc.concat(el), []);

const d = flattent(arr);

const repited = (str) => {
  const lowered = str.toLowerCase();
  const splitted = lowered.split(" ");
  const reduced = splitted.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
  return Object.entries(reduced).reduce((acc, el) =>
    acc[1] > el[1] ? acc : el
  );
};

const e = repited("This is a Repited word word Test this is a a");

console.log(e);

const isPalindrome = (str) => {
  str = str.replace(/\s/g, "");
  const lowered = str.toLowerCase();
  const splitted = lowered.split("");
  const reversed = splitted.reverse();
  const joined = reversed.join("");
  return lowered === joined;
};

const f = isPalindrome("Luz azul");
console.log(f);

// Write a function "trucate" with signature (s: string, n:number, elipsis?) : string):string
// that truncate "s" if it has more than "n" characters, returning it. if the string doesn't have mroe than "n"
// characters, just return the string

const truncate = (str, num, ellipsis) => {
  if (str.length < num) {
    let result = str;
    return result;
  } else {
    str = str.trim(str)
    let result = str.slice(0, num);
    if(ellipsis){
      result = (result + ellipsis)
    }else{
      result = sliced
    }
    return result;
  }
}

const truncateTest = truncate("hello", 7, "...")
console.log(truncateTest)



/*
Write a function `parseTracks` with signature `(s: string): number[]` that takes a string like `'1-3,5, 7,10 ,11-12'` and returns `[1, 2, 3, 5, 7, 10, 11, 12]`.
​
*/

const range = (a,b) => {
  a = parseInt(a)
  b = parseInt(b)
  let arr = [] 
  for (let i = a; i<=b; i++){
    arr.push(i)
  }return(arr)

}
const parseTracks = (str) => {
  let splited = str.split(",")
  let array = splited.reduce((acc, el) => {
    if ( el.includes("-")){
      let ranges = el.trim().split("-")
      let start = ranges[0]
      let end = ranges[1]
      let rangeArray = range(start, end)
      acc = acc.concat(rangeArray)
    }
    else {
      el = parseInt(el)
      acc.push(el)
    }return (acc);
  },[])
  return array
}
 let result2 = parseTracks("1-3,5, 7,10, 11-12")
  console.log(result2)

  const spinWords = (str) => {
  const splitted = str.split(" ");
  const reversed = splitted.map((el) => {
    if (el.length >= 5) {
      return el.split("").reverse().join("");
    } else {
      return el;
    }
  });
  const joined = reversed.join(" ");
  return joined;
};

// function that take in a string of one or more words, and returns the same string, but with all five or more letter words reversed

const spinWordsTest = spinWords("Hey fellow warriors");
const spinWordsTest2 = spinWords("This is a test");
const spinWordsTest3 = spinWords("This is another test");

console.log(spinWordsTest);
console.log(spinWordsTest2);
console.log(spinWordsTest3);

// method that take an array of consective (incrasing) letters as input and that return the missing letter in the array

const findMissingLetter = (array) => {
  array = array.map((el) => el.toLowerCase());
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const splitted = alphabet.split("");
  const sliced = splitted.slice(splitted.indexOf(array[0]));
  const missing = sliced.find((el) => !array.includes(el));
  return missing;
}

const findMissingLetterTest = findMissingLetter(["a", "b", "c", "d", "f"]);
const findMissingLetterTest2 = findMissingLetter(["O", "Q", "R", "S"]);
console.log(findMissingLetterTest);
console.log(findMissingLetterTest2);