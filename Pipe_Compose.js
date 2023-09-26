//Utils functions
const getName = person => person.name;

const uppercase = string => string.toUpperCase();

const getSixCharacters = string => string.substring(0, 6);

const reverse = string => string.split('').reverse().join('');

//----------------------------------------------
//----------------------------------------------

//reduce => left to right
const pipe = (...functions) => (value) => {
  return functions
  .reduce((currentValue, currentFunction, currentFunctionIndex, functionArray) => {
    return currentFunction(currentValue);
  }, value);
};

pipe(
  getName, // "Javascript"
  uppercase, // "JAVASCRIPT"
  getSixCharacters, // "JAVASC"
  reverse // "CSAVAJ"
)({ name: 'Javascript' }); // console.log -> "CSAVAJ"

//----------------------------------------------
//----------------------------------------------

//reduceRight => right to left - Begin, Array last index
const compose = function(...rest) {
  return function(value) {
    return rest.reduceRight(function(currentValue, currentFunction, currentFunctionIndex, functionArray){
      return currentValue(accumulator);
    }, value);
  } 
};

compose(
  reverse,
  getSixCharacters,
  uppercase,
  getName
  )({name: "Javascript"});

//----------------------------------------------
//----------------------------------------------
