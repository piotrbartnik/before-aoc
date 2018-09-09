function findOdd() {
let input = document.querySelector(".text__area").value;
  let counts = {};
  e.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  for (i = 0; i < Object.keys(counts).length; i++) {
    if (Math.abs(Object.values(counts)[i] % 2) == 1) {
      return parseInt(Object.keys(counts)[i]);
    }
  } return "There is no such object that amount in array is odd"
}