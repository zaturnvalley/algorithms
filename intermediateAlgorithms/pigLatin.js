// converts str to pig latin

function translatePigLatin(str) {
  if(str[0]==='a' || str[0]==='e' || str[0]==='i' || str[0]==='o' || str[0]==='u'){
    str += 'way';
  }
  else if(str[0]!=='a' && str[0]!=='e' && str[0]!=='i' && str[0]!=='o' && str[0]!=='u' && str[1]!=='a' && str[1]!=='e' && str[1]!=='i' && str[1]!=='o' && str[1]!=='u'){
    strSpl = str.split('');
    strSpl.push(strSpl[0]);
    strSpl.splice(0, 1);
    strSpl.push(strSpl[0]);
    strSpl.splice(0, 1);
    str = strSpl.join('');
    str += 'ay';
  }
  else {
    strSpl = str.split('');
    strSpl.push(strSpl[0]);
    strSpl.splice(0, 1);
    str = strSpl.join('');
    str += 'ay';
  }
  return str;
}

translatePigLatin("california");
