'use strict'

let Arr = [];
let size = 10;
let Search = 5;
let SearchResult = 0;
let b = 0;

function PushArray(){
  for(var i = 0; i < size;i++){
  b = i;
  b += round(random(1,10));
  Arr.push(b);
  }
} 

// Linær Søgning
function LiSearchArray(){
  for(var i = 0; i < Arr.length; i++){
    if(Search == Arr[i]){
      SearchResult = 1;
      console.log('Is "' + Search + '" in array? Yep');
  }
}
}

// Binær Søgning
// function BiSearchArray(){
//   for(var i = 0; i < Arr.length; i+size/4){
//     if(Search == Arr[i]){
//       SearchResult = 1;
//       console.log(SearchResult);
//   }
// }
// }

function setup() {
  console.log('Random Array:');
  PushArray();
  console.log(Arr);
  LiSearchArray();
}

