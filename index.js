const calculate = (operation) => {
  let val1 = Number(document.getElementById("firstValue").value);
  let val2 = Number(document.getElementById("secondValue").value);
  let val3;

  switch (operation) {
    case "+":
      val3 = val1 + val2;
      document.getElementById("result").value = val3;
      break;
    case "-":
      val3 = val1 - val2;
      document.getElementById("result").value = val3;
      break;
    case "*":
      val3 = val1 * val2;
      document.getElementById("result").value = val3;
      break;
    case "/":
      val3 = val1 / val2;
      document.getElementById("result").value = val3;
      break;
  }
};
