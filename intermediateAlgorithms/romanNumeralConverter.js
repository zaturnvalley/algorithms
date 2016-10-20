function convertToRoman(num){
  var range = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000, 5000];
  var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M', 'V'];
  
  var placeholder = num;
  var solution = '';
  
  var j = 0;
  
  while (j < range.length){
    for (var i = 0; i < range.length; i++){
      if (range[i] <= placeholder && placeholder < range[i+1]){
        solution += roman[i];
        placeholder -= range[i];
      }
    } j++;
  }


  return solution;
}


convertToRoman(3252);

convertToRoman(19);
