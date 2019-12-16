// input:
//   number // total number of switches
// output:
//   array //array of lights that are on after n repetitions

// #understand the problem
// //bank of switches 1..n
// //initial state: all switches are turned off
// //first pass turn them all on
// //second pass: turn 2,4,6, 8, on
// //third pass: turn 3,6,9 on
// //fourth pass: turn 4,8,12,16... on
// //do this until n repetitions
//
// data structure:
// //input is number
// //we need an array
//
// algorithm:
//   make an array of booleans
//     set every element to true
//   iterate through the array
//     toggle each boolean if
//       index equals a multiple of the current repetition  //
//       !!element
//
//
//
// test cases:
// lightsOn(5) === [1,4]
//   round 1: all lights are turned on
//   round 2: [2,4] -> [true, false, true, false, true]
//   round 3: [3] ->   [true, false, false, false, true]
//   round 4: [4] ->   [true, false, false, true, true]
//   round 5: [5] ->   [true, false, false, true, false]
//
// code:

  function lightsOn(n) {
    function generateArray(n) {
      var lights = []
      for (var i = 0; i < n; i++ ) {
        lights.push(false)
      }
      return lights
    }

    function generateExpectedIndexes(index, limit) {
     var list = []
     var count = 0;
     while (count < limit) {
       var check = count * index
       if (check < limit) {
         list.push(check)
       }
       count++
     }
      list = list.slice(list.indexOf(index), list.length)
      return list
    }

    var lights = generateArray(n)
   //iterate through the array n times

  for (var index = 0; index < n; index++ ) {
     if (index === 0) {
      lights = lights.map(function (element) {
         return !element //side effect turn each element to true
       })
     } else {
      var indexes =  generateExpectedIndexes(index + 1,n)
      var i = 0
      for (i; i < lights.length; i++) {
        if (indexes.indexOf(i) !== -1){
          lights[i] = !lights[i]
        }
      }
    }
   }

  return lights
 }
