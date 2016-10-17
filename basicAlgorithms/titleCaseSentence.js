//Uppercase each first letter, lower call all else
function titleCase(str) {
  var splStr = str.split(' ');
  var capitalizedSentence = '';
  for (var i = 0; i < splStr.length; i++) {
  // x += splStr[i][0].toUpperCase() + splStr[i][0];
  var lowerWord = splStr[i].toLowerCase();
  capitalizedSentence += lowerWord.replace(lowerWord[0], lowerWord[0].toUpperCase()) +' ';
}

  // for (var i = 0; i < splStr.length;)
  return capitalizedSentence.slice(0, -1);
}

titleCase("I'm a Little tea pot");