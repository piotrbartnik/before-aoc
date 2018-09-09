function findOdd() {

  let input = document.querySelector(".excercise__textarea").value;

  input = input.split(/[,\s\-]/)

  for (var i = input.length - 1; i--;) {
    if (input[i] === ',' || input[i] === "") input.splice(i, 1);
  }
  
  let counts = {};
  input.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  console.log(counts);
  for (i = 0; i < Object.keys(counts).length; i++) {
    if (Math.abs(Object.values(counts)[i] % 2) == 1) {
      console.log(parseInt(Object.keys(counts)[i]));
    }
  } console.log("There is no such object that amount in array is odd");
}
