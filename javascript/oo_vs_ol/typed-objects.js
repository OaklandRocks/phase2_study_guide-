// Write your Orange Tree code here - you may use constructor functions

function randInteger(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

function Tree(fruitBearingAge, lifespan){
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.fruitBearingAge = fruitBearingAge;
  this.lifespan = lifespan;
}

Tree.prototype.grow = function() {
  this.age += 1;
  this.height += 10;
  if (this.age >= this.fruitBearingAge) {
    this.orangeCount = randInteger(3, 9);
  } else {
    this.orangeCount = 0;
  }
  return this;
};

Tree.prototype.isAlive = function() {
  if (this.age <= this.lifespan) {
    return true;
  } else {
    return false;
  }
}

Tree.prototype.isFruiting = function() {
  if (this.age < this.fruitBearingAge || this.age > this.lifespan) {
    return false;
  } else {
    return true;
  }
}

Tree.prototype.pick = function() {
  var orange = { diameter: randInteger(2, 8) };
  if (this.orangeCount > 0) {
    this.orangeCount -= 1;
    return orange;
  } else {
    return null;
  }
}

Tree.prototype.dropAll = function() {
  var oranges = [];
  if (this.orangeCount) {
    var limit = this.orangeCount;
    for(i=0; i<limit; i++) {
      oranges.push(this.pick());
    };
  }
  return oranges;
}
