'use strict';

let Arr = [];
let size = 11
let fr = 10;

// Fill my Array
for(var i = 0; i < size;i++){
  Arr.push((i+1)*10);
}

function Visualize(){
  translate(0,(height/10)*5);
  for(var i = 0; i < Arr.length;i++){
    line(25+(i*5), -Arr[i], 25+(i*5), 0);
  }

}
// Shuffle my Array
function Shuffle(){
  print('Shuffle starting');
  for(let i = Arr.length -1; i > 0; i--){
    const tmp = Arr[i];
    const ri = Math.round(Math.random()*i)
    Arr[i]= Arr[ri];
    Arr[ri]=tmp;
  } 
}

//Swap my Numbers - https://www.kirupa.com/html5/swapping_items_array_js.htm
// Num1 & 2 er kaldet index
function Swap(Input, Num1, Num2){
 let tmp = Input[Num1];
 //Input[Num1] = Input[Num2]; //
 Input[Num1] = Input[Num2];
 Input[Num2] = tmp;
}

// Sort my Array (Bubble Sort)
function BubbleSort(){
  print('Bubblesort starting');
  for(let i = 0; i < Arr.Length; i++){
    let Start1 = Arr[i];
    //let b = i + 1;
    let Start2 = Arr[i + 1];
    print('d starting');
    if(Start1 > Start2){
      Swap(Arr, i, i+1);
    }
//


 }
}

//Sorted my Array?
//stroke(0,255,0)

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  Shuffle();
  BubbleSort();
  Visualize();
}