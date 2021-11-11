// document.querySelector("#myFileInput").addEventListener("change", function () {
//     const reader = new FileReader()

//     reader.addEventListener("load", () => {
//         localStorage.setItem("sign-image", reader.result)
//         console.log(reader.result)
//     })

//     reader.readAsDataURL(this.files[0])

//     console.log(this.files)
// })

// document.addEventListener("DOMContentLoaded", () => {
//     const recentImageDataUrl = localStorage.getItem("sign-image")

//     if (recentImageDataUrl) {
//         document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl)
//     }
// })

// function getPicture() {
//     alert(localStorage.getItem('sign-image'))
// }