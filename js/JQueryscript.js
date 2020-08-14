function startGame() {
  for (i = 1; i <= 9; i++) {
    clearBox(i);
  }
  $("turn") = "X";
  $("winner") = null;
  setMessage($(turn) + " gets to start");
}

function setMessage(msg) {
  $("message").innerText = msg;
  console.log($("message").innerText);
}

function nextMove(square) {
  if ($(winner) !== null) {
    setMessage($(turn) + " already won!");
  } else if (square.innerText === "") {
    square.innerText = $(turn);
    switchTurn();
  } else {
    setMessage("pick another box");
  }
}

function switchTurn() {
  if (checkForWinner(document.turn)) {
    setMessage("Congrats! " + $(turn) + " has won");
    document.winner = document.turn;
  } else if (document.turn == "X") {
    document.turn = "O";
    setMessage("It's " + document.turn + " 's turn");
  } else {
    document.turn = "X";
    setMessage("It's " + document.turn + " 's turn");
  }
}

function checkRow(a, b, c, move) {
  var result = false;
  if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
    result = true;
  }
  return result;

  function getBox(number) {
    return $("s" + number).innerText;
  }
}

function checkForWinner(move) {
  var result = false;
  if (
    checkRow(1, 2, 3, move) ||
    checkRow(4, 5, 6, move) ||
    checkRow(7, 8, 9, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(3, 6, 9, move) ||
    checkRow(1, 5, 9, move) ||
    checkRow(3, 5, 7, move)
  ) {
    result = true;
  }
  return result;
}

function clearBox(number) {
  return ($("s" + number).innerText = "");
}
