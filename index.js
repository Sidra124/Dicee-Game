
var randomNumber1=Math.round((Math.random())*5)+1;

document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+ randomNumber1 + ".png");


var randomNumber2=Math.round((Math.random())*5)+1;

document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+ randomNumber2 + ".png");

if(randomNumber1 > randomNumber2)
document.querySelector("h1").innerHTML="Sidra Wins!";
else if (randomNumber1 < randomNumber2)
  document.querySelector("h1").innerHTML="Computer Wins!";
  else
    document.querySelector("h1").innerHTML="Draw!";
