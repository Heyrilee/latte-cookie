let user = prompt("Please enter your name", "Cream Cuff Cookie");

var cc = 0;
var sugarGnome = 5;
var gnomes = 0;

function buySugarGnome() {
  if (cc >= sugarGnome) {
    cc = cc - sugarGnome;
    gnomes = gnomes + 1;
    sugarGnome = Math.round(sugarGnome * 1.15);

    document.getElementById("cc").innerHTML = cc;
    document.getElementById("sugarGnome").innerHTML = sugarGnome;
    document.getElementById("gnomes").innerHTML = gnomes;
  }
}

function cookieCounter(amount) {
  cc = cc + amount;
  document.getElementById("cc").innerHTML = cc;
}
