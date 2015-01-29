// /* Write your code for the plain-old-js-objects-spec here */
// function randInteger(min, max){
//   return Math.floor(Math.random() * (max - min)) + min;
// }

function createTree(fruitBearingAge, lifespan) {
    return {
      age: 0,
      height: 0,
      orangeCount: 0,
      grow: function() {
        this.age += 1;
        this.height += 10;
        if (this.age >= fruitBearingAge) {
          this.orangeCount += randInteger(3, 9);
        }
        return this;
      },
      isAlive: function() {
        if (this.age <= lifespan) {
          return true;
        } else {
          return false;
        }
      },
      isFruiting: function() {
        if (this.age < fruitBearingAge || this.age > lifespan) {
          return false;
        } else {
          return true;
        }
      },
      pick: function() {
        var orange = { diameter: randInteger(1, 10) };
        if (this.orangeCount > 0) {
          this.orangeCount -= 1;
          return orange;
        } else {
          return null;
        }
      },
      dropAll: function() {
        var oranges = [];
        if (this.orangeCount) {
          var limit = this.orangeCount;
          for(i=0; i < limit; i++) {
            oranges.push(this.pick());
          };
        }
        return oranges;
      },
  }
}
