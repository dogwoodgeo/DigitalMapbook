

  //Sets the image name and image count parameters.
  function openTwnRng(areaName)
  {
    window.open(areaName + ".html", areaName, "dependent=1,top=100,height=550,left=50,width=925,menubar=0,scrollbars=0," +
        "resizable=yes,toolbar=0");
  }

//   function startTime()
//   {
//     //Start the time updating every second.
//     var theTimeInt = 1;
//     theIntervalID = setInterval("updateTime()", (theTimeInt * 1000));
//   }
//
//   function updateTime()
//   {
//     var newTimeStr = "";
//     var newTimeSpan = document.createElement("span");
//     var theDate = new Date();
//     newTimeStr = theDate.toLocaleString();
//     var newText = document.createTextNode(newTimeStr);
//     newTimeSpan.appendChild(newText);
//     newTimeSpan.id = "TimeText";
//
//     var para = document.getElementById("TimeDesc");
//     var spanElm = document.getElementById("TimeText");
//     var replaced = para.replaceChild(newTimeSpan,spanElm);
//
//     updateTimeShadow();
//   }
//
//   function updateTimeShadow()
//   {
//     var newTimeStr = "";
//     var newTimeSpan = document.createElement("span");
//     var theDate = new Date();
//     newTimeStr = theDate.toLocaleString();
//     var newText = document.createTextNode(newTimeStr);
//     newTimeSpan.appendChild(newText);
//     newTimeSpan.id = "TimeShadowText";
//
//     var para = document.getElementById("TimeShadowDesc");
//     var spanElm = document.getElementById("TimeShadowText");
//     var replaced = para.replaceChild(newTimeSpan,spanElm);
//   }
//
// //  function ZoomIn() {
// //    var theImage = document.MSImage;
// //	var imgWidth = theImage.width;
// //	imgWidth = imgWidth * 1.2;
// //	theImage.width = imgWidth;
// //  }
//
// //  function ZoomOut() {
// //    var theImage = document.MSImage;
// //	var imgWidth = theImage.width;
// //	imgWidth = imgWidth / 1.2;
// //	theImage.width = imgWidth;
// //  }