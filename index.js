const calculate = (operation) => {
  let val1 = document.getElementById("firstValue").value;
  let val2 = document.getElementById("secondValue").value;

  if(!val1 || !val2 || isNaN(val1) || isNaN(val2)){
    (!val1 || !val2)? (alert("Please Enter both values !")):(alert("Invalid values !"))
    return;
  }
  let val3 = Number(val1);
  let val4 = Number(val2);
  let res;

  switch (operation) {
    case "+":
      res = val3 + val4;
      document.getElementById("result").value = res;
      break;
    case "-":
      res = val3 - val4;
      document.getElementById("result").value = res;
      break;
    case "*":
      res = val3 * val4;
      document.getElementById("result").value = res;
      break;
    case "/":
      res = val3 / val4;
      document.getElementById("result").value = res;
      break;
  }
};
