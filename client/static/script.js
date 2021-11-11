// function modelInfo() {
//   fetch('applicationdata/model.txt')
//     .then(response => response.text())
//     .then(outText => swal({
//       className: 'swal-wide',
//       text: outText
//     }))
// }

function readTextFile() {
  $.get('/applicationdata/model.txt', function (result) {
    $(".modal-body").append(result);
  });
}