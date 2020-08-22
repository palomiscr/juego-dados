var randomNumer= Math.floor(Math.random()*6)+1;
var randomNumer2= Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumer+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumer2+".png");

function resultado(a, b){
  var resul="Draw";
  if(a<b){
    resul="Player 2 wins 🏁 "
  }
  else if(a>b){
    resul="🏁 Player 1 Wins"
  }
  return resul;
}
document.querySelector("h1").innerHTML=resultado(randomNumer, randomNumer2);
