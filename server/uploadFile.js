var data = new FormData();
data.append("upfile", new Blob(["CONTENT"], {type: "text/plain"}));
var xhr = new XMLHttpRequest();
xhr.open("POST", "SERVER.SCRIPT");
xhr.send(data);