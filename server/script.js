

function modelinfo() {
  fetch('applicationdata/model.txt')
    .then(response => response.text())
    .then(outText => swal({text: outText,className: 'swal-wide'}))
}