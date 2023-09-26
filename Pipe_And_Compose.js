//Utils functions
const getName = (person) => person.name;

const uppercase = (string) => string.toUpperCase();

const get6Characters = (string) => string.substring(0, 6);

const reverse = (string) => string.split('').reverse().join('');

//----------------------------------------------
//----------------------------------------------

//reduce => left to right
const pipe = (...functions) => (value) => {
  return functions
  .reduce((currentValue, currentFunction, currentFunctionIndex, functionArray) => {
    console.log(currentValue, currentFunction, currentFunctionIndex, functionArray);
    return currentFunction(currentValue);
  }, value)
}

pipe(
  getName, // "Buckethead"
  uppercase, // "BUCKETHEAD"
  get6Characters, // "BUCKET"
  reverse // "TEKCUB"
)({ name: 'Buckethead' }) // console.log -> "TEKCUB"

//----------------------------------------------
//----------------------------------------------

//reduceRight => right to left - Begin, Array last index
const compose = function(...rest) {
  return function(value) {
    return rest.reduceRight(function(currentValue, currentFunction, currentFunctionIndex, functionArray){
      console.log(accumulator, currentValue, currentIndex, array);
      return currentValue(accumulator);
    }, value)
  } 
};

compose(
  reverse,
  get6Characters,
  uppercase,
  getName
  )({name: "Javascript"});

//----------------------------------------------
//----------------------------------------------
