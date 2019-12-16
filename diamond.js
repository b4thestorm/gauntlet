// input: number
// output: diamond composed of asterisks
//
// understand the problem:
//   create a four pointed diamond  usign a nxn grid
//   n is an odd integer, the number will always an odd number
//   there will be n number of rows
//   1 will always be 1
//   n will always be 1
//
//
// data structure:
//   input: number
//   ds: numbers
//
// test/example:
//   diamond(1) === *
//   diamond(2) === undefined
//                    *
//   diamond(3) ===  ***
//                    *
//
//   diamond(9) ===    *
//                    ***
//                   *****
//                  *******
//                 *********
//                  *******
//                   *****
//                    ***
//                     *
//
//
// algorithm:
//  make a for loop that goes from 1 to n/2
//   multiply 2i + 1 starting from 1
//  make a second for loop that goes from n to 0 to n/2
//   take away 2 from n
//

function diamond(n) {
  function printSpaces(n, base) {
    var count = 0;
    while (count < (Math.floor(base/n))) {
      str = str + " "
      count++
    }
  }

  function printStars(stars) {
    var count = 0
    var str = ""
    while (count < stars) {
      str + "*"
    }
    return str
  }

  function printRow(n, base) {
    var left = printSpaces(cycle ,base)
    var middle = printStars(n)
    var right = left
    return left + middle + right
  }

  for (var i=0; i < Math.round(n/2); i++) {
    console.log(printRow(2 * n + 1))
  }
}
