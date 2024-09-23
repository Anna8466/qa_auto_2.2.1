function increaseBalance(x, y) {
 x += y
 return x;
}

function decreaseBalance(x, y) {
return x -= y;
}

function divideBalanceByAccounts(balance, accNumber) {
  return balance / accNumber;
}

 function getRestAfterDivision(x, y) {
  return x %= y;
}

function getIncrementPost(x) {
  return x++;
}


function getIncrementPre(x) {
   return ++х;
 }

function getDecrementPost(x) {
  return x--;
 }
    
    
function getDecrementPre(x) {
  return --х;
}
  
console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));
console.log(getRestAfterDivision(7000, 3));
console.log(getIncrementPost(3));
console.log(getIncrementPre(3));
console.log(getDecrementPost(3));
console.log(getDecrementPre(3));

let х = 3;
const y = х++;
console.log(x,y)
