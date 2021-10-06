

function modelinfo() {
  fetch('applicationdata/model.txt')
    .then(response => response.text())
    .then(text => swal(text))
}