function myset_add() {
   this.myset_addArray = [];
}
myset_add.prototype.multiply = function(arr) {
  arr.forEach(function(value) {
    this.myset_addArray.push(value * value);
  }, this);
};

const obj = new myset_add();
obj.multiply([1,2,3]);
console.log(obj.myset_addArray);
// this works!
