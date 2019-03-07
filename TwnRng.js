  var mapWin;
  // var legendWin;

  function openMapWindow(areaName, mapName) {
    var mapName1 = mapName.substring(5,4)
    if (mapName1 == "-"){
      mapName1 = mapName.substring(0,5) + "n" + mapName.substring(6,10);
    } else {
      mapName1 = mapName;
    }

    var index1 = mapName.length - 1;
    var index2 = mapName.length - 0;
    var mapName2 = mapName.substring(index1,index2);

    if (mapName2 == "-"){
      mapName2 = mapName1.substring(0,index1) + "n" + mapName.substring(index2,10);
    } else {
      mapName2 = mapName1;
    }
    mapWin = window.open("exports/" + areaName + "/" + mapName2 + ".png", "MapsheetWin", "dependent=1,top=2,height=700,left=2,width=1010,menubar=0,scrollbars=yes,resizable=yes,toolbar=0");
    //mapWin = window.open("pdfViewer.html", areaName + "_" + mapName2,"dependent=1,height=700,width=1010,menubar=0,scrollbars=0,resizable=0,toolbar=0");
    //legendWin = window.open("legendView.html","Legends","dependent=1,height=700,width=210,menubar=0,scrollbars=1,resizable=0,toolbar=0");
  }
