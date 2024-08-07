// arrays and objects
// functions return
// async js coding
// forEach map filter find indexOf


var arr = [1,2,3,4];

// forEach
arr.forEach(function(val){
  console.log( val + " hello");
})

// map
// map gives new updated array by applying operations on old array.
var newarr = arr.map(function(val){
  return val*3;
})

console.log(newarr);

// filter
var filterarr = arr.filter(function(val){
  if(val >= 3){ return true; }
  else return false;
})
console.log(filterarr);

// find note: gives first value in this case first 2
var findarr = arr.find(function(val){
  if(val===2) return val;
})
console.log(findarr);

// indexOf: if value is present it gives its index otherwise gives -1 not found
arr.indexOf(12);
arr.indexOf(2);

// -----------------------------Objects--------------------------------

// key value pairs - structure
// {
//   anything: anything;
// }

var obj = {
  name: 'sam',
  age: 12
}

obj.name;
obj['name'] //thorugh this both method object can be accessed

obj.age = 17 // value can be changed

Object.freeze(obj); // through this, all the values after this can't be changed


// -------------------------Funtions and return-----------------------

// length of function can also be found
function abcd(a,b,c){

}
abcd.length; // returns 3 no.of parameters are length

function abcd(){
  return 12; // what will be return will be printed on output screen - anything can be return
}
var ans = abcd();
console.log(ans);


// ------------------------Async Js--------------------------

async function abcd1() {
  var blob = await fetch(`https://randomuser.me/api/`); // data coming from api is not in readable format, it is in some streamline format named blob
  var ans = await blob.json(); // converts blob data into json format to become readable
  console.log(ans.results[0].name) // ans returns object we are getting specific data through results[0].name
}

abcd1();