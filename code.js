var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var series = []
ctx.fillStyle = "black";
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};
function generate(){
  var series = []
  ctx.clearRect(0,0,canvas.width,canvas.height)
  document.getElementById("output").innerHTML = ""
  var input = document.getElementById("input").value;
  series.push(input)
  while(input != 1){
    if(input % 2 == 0){
      input = input / 2;
    }
    else{
      input = input * 3 + 1;
    }
    series.push(input)
  }
  var n = series.max();
  console.log(n)
  document.getElementById("output").innerHTML = series;
  ctx.beginPath();
  ctx.moveTo(15, 400 - series[i]*(400/n)+10);
  for (var i = 0; i< series.length; i++){
    ctx.lineTo(10 + i*(400/series.length), 400 - series[i]*(400/n)+10);
    ctx.stroke()
    ctx.moveTo(10 + i*(400/series.length), 400 - series[i]*(400/n)+10);
  }
}
