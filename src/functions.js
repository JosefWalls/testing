function squareDigits(num) {
    let arr = (num + "").split('');
    arr = arr.map(val => {
      return val ** 2;
    })
    return parseInt(arr.join(''))
  }
  function GetSum(a, b) {
   let min = Math.min(a,b)
   let max = Math.max(a,b)
   let arr = []
   while(min <= max){
     arr.push(min++)
   }
   return(arr.reduce((acc, cr)=> acc + cr))
  }
  function getMiddle(str){
    let middleLetters = '';
    if(str.length % 2 === 0){
      return str.slice((str.length /2) -1, (str.length /2) + 1);
    } if (str.length % 2 !== 0){
      let odd = str.charAt(str.length/2)
      return odd;
   }
  }
  function findEvenIndex(arr) {
      for(let i = 1; i < arr.length-1; i++) {
          let arr1 = arr.slice(0,i);
          let arr2 = arr.slice(i+1);
          let sum1 = arr1.reduce((acc, val) => acc+val);
          let sum2 = arr2.reduce((acc, val) => acc+val);
          if(sum1===sum2) {
              return i;
          }
      }
      return -1;
  }

module.exports = {
    squareDigits,
    GetSum,
    getMiddle,
    findEvenIndex
}