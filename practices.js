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
