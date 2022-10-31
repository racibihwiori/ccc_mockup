var g = document.getElementById("flower");
var v = document.getElementById("sun");
var o = document.getElementsById("ro");
var b = document.getElementsById("rb");
// call this function when "orange-kid" is clicked!
function moveGif() {
  g.classList.add("fly-forward");
}

// call this function when "blue-man" is clicked!
function changePicture() {
  v.src = "https://cdn.mos.cms.futurecdn.net/snbrHBRigvvzjxNGuUtcck.jpg";
  g.classList.remove("fly-forward");
}
