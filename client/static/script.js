// function modelInfo() {
//   fetch('applicationdata/model.txt')
//     .then(response => response.text())
//     .then(outText => swal({
//       className: 'swal-wide',
//       text: outText
//     }))
// }

function readTextFile() {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", 'applicationdata/model.txt', false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        // alert(allText);
        $(".modal-body").append(allText);
      }
    }
  }
  rawFile.send(null);
}