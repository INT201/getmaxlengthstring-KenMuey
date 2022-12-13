const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let longest
  let lgth = 0
  // let arr = arrayOfString.split('')
  if(arrayOfString === null || arrayOfString === undefined){
    return undefined
  }
  for (let i = 0; i < arrayOfString.length; i++) {
    if (arrayOfString[i].length > lgth) {
      lgth = arrayOfString[i].length;
      longest = arrayOfString[i];
    }
  }
  return (arrayOfString.filter(e => {
      if(e.length === longest.length) {
          return e
      } 
  }));
}
module.exports = getMaxLengthString
