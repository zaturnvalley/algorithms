//Build tower algorithm
function towerBuilder(nFloors) {
  var towerArr = [];
  var room = "*";
  var space = " ";
  var width = nFloors + (nFloors - 1);
  for (var i = 1; i <= nFloors; i++){
    var floor = '';
    var roomSize = i + (i - 1);
    var spaceSize;
    spaceSizeHalf = (width - roomSize)/2;
    floor = floorCreator(spaceSizeHalf, space) + floorCreator(roomSize, room) + floorCreator(spaceSizeHalf, space);
    towerArr.push(floor);
  } return towerArr;
}


function floorCreator(size, type){
  var output = "";
  for (var i = 0; i < size; i++){
    output += type;
  }
  return output;
}