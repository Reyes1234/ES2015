let myArray = ['1', '2', '3'];
console.log(myArray);


set_add(myArray, '3');
function set_add(theArray, theValue){
  for(let i = 0; i < theArray.length; i++){
    console.log(theArray[i]);
    console.log(theValue);
if(theArray == theValue){
  console.log('return myArray');
} else {
  console.log('dont return myArray');
}
let new_set = [4,5,6];
let othernew_set = [3,8,9];
    }
    myArray.push(theValue);
    return myArray;
  }
  function myset_remove(theArray, remove_value){

   test_set = [1,2,3];
   new_set = myset_remove(test_set, 3);
   if ( ! arrays_equal(new_set.sort(), [1,2]) ) {
     console.log("Remove failed");
   }
  }
  mySet = [1,2,3,4,5,6,8,9]
  testValue = 12
   mySet["some string value"] = true;
   if (testValue in mySet) {
     console.log(testValue + " is in the set");
   } else {
     console.log(testValue + " is not in the set");
   }
