function convertToRoman(num){
  var range = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  
  var placeholder = num;
  var solution = '';
  
  for (var i = 0; i < range.length; i++){
    if (range[i] <= placeholder && placeholder < range[i+1]){
      solution += roman[i];
      placeholder -= range[i];
    }
  } return solution;
}
convertToRoman(3);