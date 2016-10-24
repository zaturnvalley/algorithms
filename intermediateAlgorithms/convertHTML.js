//Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
//in a string to their corresponding HTML entities.
function convertHTML(str) {
  var splStr = str.split('');
  for (var i = 0; i < splStr.length; i++){
    if (splStr[i] === '&'){
      splStr[i] = '&amp;';
    } else if (splStr[i] === '<'){
      splStr[i] = '&lt;';
    } else if (splStr[i] === '>'){
      splStr[i] = '&gt;';
    } else if (splStr[i] === '"'){
      splStr[i] = '&quot;';
    } else if (splStr[i] === "'"){
      splStr[i] = '&apos;';
    }
  }
  return splStr.join('');
}

convertHTML("Dolce & Gabbana");
