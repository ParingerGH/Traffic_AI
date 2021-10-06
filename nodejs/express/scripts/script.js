function modelinfo() {
  fetch('applicationdata/model.txt')
    .then(response => response.text())
    .then(outText => swal({className: 'swal-wide',text: outText}))
}