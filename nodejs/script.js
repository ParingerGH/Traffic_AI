function modelinfo() {

  //
  // we cant use nodejs in js scripts for html pages
  //
  // Uncaught ReferenceError: fs is not defined
  // at modelinfo (script.js:3)
  // at HTMLButtonElement.onclick ((index):15)
  //  |
  // \ /
  //  '

  // fs.readFile('/applicationdata/model.txt', 'utf8' , (err, data) => {
  //   if (err) {
  //     console.error(err)
  //     return
  //   }
  //   console.log(data)
  //   swal({className: 'swal-wide',text: data})
  // })

  // ---------------------------------------------------------------------------------
  //
  //  can be fixed by adding:
  //
  //   app.get('/script.js',(request, response) => {
  //     response.sendFile(__dirname + '/script.js');
  //   });
  //
  //  to server.js
  //
  //  also must use rel paths!
  //
  //  GET http://localhost/usr/src/app/applicationdata/model.txt 404 (Not Found)
  //   modelinfo @ script.js:26
  //   onclick @ (index):15
  //   |
  //  \ /
  //   '

  fetch('/applicationdata/model.txt')
   .then(response => response.text())
   .then(outText => swal({className: 'swal-wide',text: outText}))