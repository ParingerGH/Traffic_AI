const download = require('downloadjs');

document.querySelector("#myFileInput").addEventListener("change", function () {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
        localStorage.setItem("sign-image", reader.result)
        console.log(reader.result)

    })

    reader.readAsDataURL(this.files[0]) // add loop for a few files

    

    console.log(this.files)


})

document.addEventListener("DOMContentLoaded", () => {
    const recentImageDataUrl = localStorage.getItem("sign-image")

    if (recentImageDataUrl) {
        document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl)
    }
})

function getPicture() {
    alert(localStorage.getItem('sign-image'))
    download(localStorage.getItem('sign-image'), "/usr/src/app/application_data/out.png", image/png);
}