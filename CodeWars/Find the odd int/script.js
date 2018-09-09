let answerArea = document.querySelector(".excercise__answer--text");
let btn = document.querySelector(".excercise__btn");

document.querySelector(".excercise__btn").addEventListener("click",
  function findOdd() {
    answerArea.innerHTML = "";
    let counter = 0;
    let input = document.querySelector(".excercise__textarea").value;
    if (input === "") {
      answerArea.innerHTML = "Enter some numbers";
      return false
    }

    input = input.split(/[,\s\-]/);

    for (var i = input.length - 1; i--;) {
      if (input[i] === ',' || input[i] === "") input.splice(i, 1);
    }

    let counts = {};
    input.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    for (i = 0; i < Object.keys(counts).length; i++) {
      if (Math.abs(Object.values(counts)[i] % 2) == 1) {
        answerArea.innerHTML += ' ' + parseInt(Object.keys(counts)[i]);
        counter += 1
      }
    }

    if (counter === 0) {
      answerArea.innerHTML = "There is no such object that amount in array is odd";
    }
  });