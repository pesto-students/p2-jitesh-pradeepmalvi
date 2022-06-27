const checkParenthesis = str => {
  let brackets = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  let bracketsArr = [];

  for (const item of str) {
    if (brackets[item]) {
      bracketsArr.push(brackets[item]);
    } else {
      let popedBracket = bracketsArr.pop();
      if (popedBracket !== item) {
        return false;
      }
    }
  }

  return !bracketsArr.length;
};

console.log(checkParenthesis("{{}([])}"));
