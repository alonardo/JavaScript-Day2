// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/solutions/javascript?filter=me&sort=best_practice
function even_or_odd(number) {
    if (number % 2)
      return "Odd";
    else
      return "Even";
  }


//   https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
  String.prototype.toJadenCase = function () {
    new_str = this.split(' ');
    empty_str = ''
    for (let i = 0; i < new_str.length; i++){
      empty_str += new_str[i][0].toUpperCase()
      empty_str += `${new_str[i].slice(1)} `    
    }
    return empty_str.trim(); 
  };

  // https://www.codewars.com/kata/5966e33c4e686b508700002d/solutions/javascript?filter=me&sort=best_practice
  function sumStr(a,b) {
    return String(Number(a)+Number(b));
  }

// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
function cockroachSpeed(s) {
  return Math.floor(s * 27.7778);
}

