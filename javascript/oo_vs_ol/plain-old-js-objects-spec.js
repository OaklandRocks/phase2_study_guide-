// describe ("Orange Tree", function() {
//   describe ("createTree", function() {
//     it("should return a tree object", function() {
//       var tree = createTree();
//       expect(tree instanceof Object).toBe(true);
//     });

//     it("should return tree with age 0 when created", function() {
//       var tree = createTree();
//       expect(tree.age).toEqual(0);
//     });

//     it("should have height 0 when created", function() {
//       var tree = createTree();
//       expect(tree.height).toEqual(0);
//     });

//     it("should have 0 oranges when created", function() {
//       var tree = createTree();
//       expect(tree.orangeCount).toEqual(0);
//     });
//   });

//   describe(".grow", function() {
//     it("should increase the age of the tree by 1 year", function() {
//       var tree = createTree();
//       tree.grow();
//       expect(tree.age).toEqual(1);
//     });

//     it("should return the tree itself", function() {
//       var tree = createTree();
//       expect(tree.grow()).toBe(tree);
//     });

//     it("should increase the height of the tree by 10 inches", function() {
//       var tree = createTree();
//       tree.grow();
//       expect(tree.height).toEqual(10);
//     });

//     it("should add a random number of oranges if its age is at or about the fruit bearing age", function() {
//       var fruitBearingAge = 7;
//       var tree = createTree(fruitBearingAge);
//       while (tree.age < fruitBearingAge) {
//         tree.grow();
//       }
//       expect(tree.orangeCount).toBeGreaterThan(0);
//     });

//     it("should have 0 oranges if its age is less than the fruit bearing age", function() {
//       var fruitBearingAge = 3;
//       var tree = createTree(fruitBearingAge);
//       while (tree.age < fruitBearingAge - 1) {
//         tree.grow();
//       }
//       expect(tree.orangeCount).toEqual(0);
//     });
//   });

//   describe (".isAlive",function() {
//     it("should be alive while its age is <= its lifespan",function() {
//       var fruitBearingAge = 3;
//       var lifespan = 10;
//       var tree = createTree(fruitBearingAge, lifespan);
//       while (tree.age < lifespan - 1) {
//         tree.grow();
//       }
//       tree.grow();
//       expect(tree.isAlive()).toEqual(true);
//     });

//     it("should die when its age is > its lifespan",function() {
//       var fruitBearingAge = 3;
//       var lifespan = 10;
//       var tree = createTree(fruitBearingAge, lifespan);
//       while (tree.age < lifespan) {
//         tree.grow();
//       }
//       tree.grow();
//       expect(tree.isAlive()).toEqual(false);
//     });
//   });

//   describe (".isFruiting",function() {
//     it("should return false when the tree is too young",function() {
//       var tree = createTree(2, 4);
//       tree.grow();
//       expect(tree.isFruiting()).toEqual(false);
//     });

//     it("should return true when the tree is mature",function() {
//       var tree = createTree(2, 4);
//       tree.grow().grow();
//       expect(tree.isFruiting()).toEqual(true);
//     });

//     it("should return false when the tree is dead",function() {
//       var tree = createTree(2, 4);
//       tree.grow().grow().grow().grow().grow();
//       expect(tree.isFruiting()).toEqual(false);
//     });
//   });

//   describe (".pick", function() {
//     it("should return a orange object", function() {
//       var tree = createTree(1, 4);
//       var orange = tree.grow().pick();
//       expect(orange instanceof Object).toBe(true);
//     });

//     it("should return an orange with a random diameter > 0", function() {
//       var tree = createTree(1, 4);
//       var orange = tree.grow().pick();
//       expect(orange.diameter).toBeGreaterThan(0);
//     });

//     it("should return null when there are no more oranges", function() {
//       var tree = createTree(1, 4);
//       tree.grow();
//       while (tree.orangeCount) {
//         tree.pick();
//       }
//       expect(tree.pick()).toBe(null);
//     });
//   });

//   describe(".dropAll", function() {
//     it("should return all of the oranges from the tree", function() {
//       var tree, count, oranges;
//       tree = createTree(1, 4);
//       tree.grow();
//       count = tree.orangeCount;
//       oranges = tree.dropAll();
//       expect(oranges.length).toBe(count);
//       expect()
//     });

//     it("should return oranges that have a diameter", function() {
//       var tree = createTree(1, 4);
//       oranges = tree.grow().dropAll();
//       expect(typeof oranges[0].diameter).toBe("number");
//       expect(typeof oranges[oranges.length - 1].diameter).toBe("number");
//     });

//     it("should have no more fruit once dropped", function() {
//       var tree = createTree(1, 4);
//       tree.grow().dropAll();
//       expect(tree.orangeCount).toBe(0);
//     });

//     it("should return an empty array if there is no more fruit", function() {
//       var tree = createTree(1, 4);
//       tree.grow().dropAll();
//       expect(tree.dropAll()).toEqual([]);
//     });
//   });

// });
