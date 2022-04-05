function titleCase(sentence) {
  const lowerCase = sentence
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
  return lowerCase;
}
console.log(titleCase('alchemy ROCKS goLD'));

function at(arr, index) {
  return index > -1 ? arr[index] : arr[arr.length + index];
}
console.log(at(['a', 'b', 'c', 'd', 'e'], -2));
console.log(at(['a', 'b', 'c', 'd', 'e'], 2));

function fizzBuzz(number) {
  const results = [];
  for (let i = 1; i < number; i++) {
    if (i % 15 === 0) {
      results.push('FizzBuzz');
    } else if (i % 3 === 0) {
      results.push('fizz');
    } else if (i % 5 === 0) {
      results.push('buzz');
    } else {
      results.push(i);
    }
  }
  return results;
}
console.log(fizzBuzz(30));

function anagrams(wordOne, wordTwo) {
  const word1 = wordOne.split('').sort().join('');
  console.log(word1);
  const word2 = wordTwo.split('').sort().join('');
  console.log(word2);

  if (word1 === word2) {
    return true;
  } else {
    return false;
  }
}
console.log(anagrams('pictorialness', 'documentarily'));

function map(arr, callback) {
  const mapped = [];
  for (let i = 0; i < arr.length; i++) {
    mapped.push(callback(arr[i]));
  }
  return mapped;
}
console.log(map([1, 6, 5], (n) => n ** 2));

function filter(arr, callback) {
  const filtered = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const shouldBeIncluded = callback(item);
    shouldBeIncluded && filtered.push(item);
  }
  return filtered;
}
console.log(filter([2, 6, 5], (n) => n % 2 === 0));
