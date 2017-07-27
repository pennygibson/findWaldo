// First version with a for loop
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

// function actionWhenFound(index) {
//   //var position = arr.indexOf("Waldo")
//   console.log("Found him at position " + index);
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


// Exercise 2 - switching the for loop for forEach
function findWaldo(arr, found) {
  var counter = 0;
  arr.forEach(function(word) {
    counter++ //counter = counter + 1
    if (word === "Waldo") {
      found(counter);
      //need an index in forEach loop   // execute callback
    }
  })
}

function actionWhenFound(index) {
  //var position = arr.indexOf("Waldo")
  console.log("Found him at position " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);