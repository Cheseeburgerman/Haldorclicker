var haldors = 0;
var cpc = 1;
var cps =  0;
var cps2 = 0;
var cps3 = 0;
var cps4 = 0;
var cps5 = 0;
var cps6 = 0;
var cps7 = 0;
var cps8 = 0;
var cps9 = 0;
var cps10 = 0;
var fps = 1; 
var gyatt1Bought = false;
var gyatt2Bought = false;
var gyatt3Bought = false;
var gyatt4Bought = false;
var gyatt5Bought = false;
var gyatt6Bought = false;
var gyatt7Bought = false;
var gyatt8Bought = false;
var gyatt9Bought = false;
var gyatt10Bought = false;


function gethaldor() {
  haldors += cpc; 
  var formattedHaldors = convertToInternationalCurrencySystem(haldors);
  document.getElementById('cookie-text').innerHTML = "Haldors: " + formattedHaldors;
}


function convertToInternationalCurrencySystem(number) {
  return number.toLocaleString();
}

function updateDisplay() {
  var formattedHaldors = convertToInternationalCurrencySystem(haldors);
  document.getElementById('cookie-text').innerHTML = "Haldors: " + formattedHaldors;
}

setInterval(function getmoregyats() {
  haldors += cps;
  haldors += cps2;
  haldors += cps3;
  haldors += cps4;
  haldors += cps5;
  haldors += cps6;
  haldors += cps7;
  haldors += cps8;
  haldors += cps9;
  haldors += cps10;
  var formattedHaldors = convertToInternationalCurrencySystem(haldors);
  document.getElementById('cookie-text').innerHTML = "Haldors: " + formattedHaldors;
}, 1000 / fps);


 function convertToInternationalCurrencySystem(labelValue) {
  return Math.abs(Number(labelValue)) >= 1.0e+18
    ? (Math.abs(Number(labelValue)) / 1.0e+18).toFixed(2) + "R"
  
   :Math.abs(Number(labelValue)) >= 1.0e+15
    ? (Math.abs(Number(labelValue)) / 1.0e+15).toFixed(2) + "Q"

   :Math.abs(Number(labelValue)) >= 1.0e+12
    ? (Math.abs(Number(labelValue)) / 1.0e+12).toFixed(2) + "T"
    // Nine Zeroes for Billions
    :Math.abs(Number(labelValue)) >= 1.0e+9
    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6
    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3
    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(labelValue));
}



function hireAutoBaker() {
  if (haldors >= 150) {
    haldors -= 150  ;
    cps += 1;
    var formattedHaldors = convertToInternationalCurrencySystem(haldors);
  document.getElementById('cookie-text').innerHTML = "Haldors: " + formattedHaldors;
    document.getElementById('cps-text').innerHTML = "Pontus Hps/: " + cps;
  }
}


function hireAutoBaker2() {
  if (haldors >= 1000) {
    haldors -= 1000;
    cps2 += 10;
    var formattedHaldors = convertToInternationalCurrencySystem(haldors);
  document.getElementById('cookie-text').innerHTML = "Haldors: " + formattedHaldors;
    document.getElementById('cps-text2').innerHTML = "John Hps/: " + cps2;
  }
}

function hireAutoBaker3() {
  if (haldors >= 11000) {
    haldors -= 11000;
    cps3 += 80;
    var formattedHaldors = convertToInternationalCurrencySystem(haldors);
  document.getElementById('cookie-text').innerHTML = "Haldors: " + formattedHaldors;
    document.getElementById('cps-text3').innerHTML = "Arvid Hps/: " + cps3;
  }
}

function hireAutoBaker4() {
  if (haldors >= 120000) {
    haldors -= 120000;
    cps4 += 470;
    var formattedHaldors = convertToInternationalCurrencySystem(haldors);
  document.getElementById('cookie-text').innerHTML = "Haldors: " + formattedHaldors;
    document.getElementById('cps-text4').innerHTML = "Håkan Hps/: " + cps4;
  }
}

function hireAutoBaker5() {
  if (haldors >= 1300000) {
    haldors -= 1300000;
    cps5 += 2600;
    var formattedHaldors = convertToInternationalCurrencySystem(haldors);
  document.getElementById('cookie-text').innerHTML = "Haldors: " + formattedHaldors;
    document.getElementById('cps-text5').innerHTML = "Jac Hps/: " + cps5;
  }
}

function hireAutoBaker6() {
  if (haldors >= 1400000) {
    haldors -= 1400000;
    cps6 +=  14000;
    var formattedHaldors = convertToInternationalCurrencySystem(haldors);
  document.getElementById('cookie-text').innerHTML = "Haldors: " + formattedHaldors;
    document.getElementById('cps-text6').innerHTML = "Erdem Hps/: " + cps6;
  }
}

function hireAutoBaker7() {
  if (haldors >= 20000000) {
    haldors -= 20000000;
    cps7 += 78000;
    var formattedHaldors = convertToInternationalCurrencySystem(haldors);
  document.getElementById('cookie-text').innerHTML = "Haldors: " + formattedHaldors;
    document.getElementById('cps-text7').innerHTML = "Anka Hps/: " + cps7;
  }
}

function hireAutoBaker8() {
  if (haldors >= 3300000000) {
    haldors -= 3300000000;
    cps8 += 440000;
    var formattedHaldors = convertToInternationalCurrencySystem(haldors);
  document.getElementById('cookie-text').innerHTML = "Haldors: " + formattedHaldors;
    document.getElementById('cps-text8').innerHTML = "Hamodi Hps/: " + cps8;
  }
}

function hireAutoBaker9() {
  if (haldors >= 50000000000) {
    haldors -= 50000000000;
    cps9 += 2600000	;
    var formattedHaldors = convertToInternationalCurrencySystem(haldors);
  document.getElementById('cookie-text').innerHTML = "Haldors: " + formattedHaldors;
    document.getElementById('cps-text9').innerHTML = "Olle Hps/: " + cps9;
  }
}

function hireAutoBaker10() {
  if (haldors >=  1000000000000) {
    haldors -=  1000000000000;
    cps10 += 99999999999999999999999999999;
    var formattedHaldors = convertToInternationalCurrencySystem(haldors);
  document.getElementById('cookie-text').innerHTML = "Haldors: " + formattedHaldors;
    document.getElementById('cps-text10').innerHTML = "Amazing sam Hps/ " + cps10;
  }
}





function hiregyatt() {
  if (!gyatt1Bought && haldors >= 100) {
      cpc += 1;
      haldors -= 100;
      gyatt1Bought = true; // Mark as bought
      updateDisplay();
  } else if (gyatt1Bought) {
      alert('You can only buy this once');
  } else {
      alert('You got no gyatt');
  }
}

function hiregyatt2() {
  if (!gyatt2Bought && haldors >= 500) {
      cpc += 2;
      haldors -= 500;
      gyatt2Bought = true; // Mark as bought
      updateDisplay();
  } else if (gyatt2Bought) {
      alert('You can only buy this once');
  } else {
      alert('You got no gyatt');
  }
}

function hiregyatt3() {
  if (!gyatt3Bought && haldors >= 10000) {
      cpc += 4;
      haldors -= 10000;
      gyatt3Bought = true; // Mark as bought
      updateDisplay();
  } else if (gyatt3Bought) {
      alert('You can only buy this once');
  } else {
      alert('You got no gyatt');
  }
}

function hiregyatt4() {
  if (!gyatt4Bought && haldors >= 100000) {
      cpc += 92;
      haldors -= 100000;
      gyatt4Bought = true; // Mark as bought
      updateDisplay();
  } else if (gyatt4Bought) {
      alert('You can only buy this once');
  } else {
      alert('You got no gyatt');
  }
}

function hiregyatt5() {
  if (!gyatt5Bought && haldors >= 1000000) {
      cpc += 400;
      haldors -= 1000000;
      gyatt5Bought = true; // Mark as bought
      updateDisplay();
  } else if (gyatt5Bought) {
      alert('You can only buy this once');
  } else {
      alert('You got no gyatt');
  }
}

function hiregyatt6() {
  if (!gyatt6Bought && haldors >= 10000000) {
      cpc += 4500;
      haldors -= 10000000;
      gyatt6Bought = true; // Mark as bought
      updateDisplay();
  } else if (gyatt6Bought) {
      alert('You can only buy this once');
  } else {
      alert('You got no gyatt');
  }
}

function hiregyatt7() {
  if (!gyatt7Bought && haldors >= 50000000) {
      cpc += 10000;
      haldors -= 50000000;
      gyatt7Bought = true; // Mark as bought
      updateDisplay();
  } else if (gyatt7Bought) {
      alert('You can only buy this once');
  } else {
      alert('You got no gyatt');
  }
}

function hiregyatt8() {
  if (!gyatt8Bought && haldors >= 100000000) {
      cpc += 35000;
      haldors -= 100000000;
      gyatt8Bought = true; // Mark as bought
      updateDisplay();
  } else if (gyatt8Bought) {
      alert('You can only buy this once');
  } else {
      alert('You got no gyatt');
  }
}

function hiregyatt9() {
  if (!gyatt9Bought && haldors >= 500000000) {
      cpc += 150000;
      haldors -= 500000000;
      gyatt9Bought = true; // Mark as bought
      updateDisplay();
  } else if (gyatt9Bought) {
      alert('You can only buy this once');
  } else {
      alert('You got no gyatt');
  }
}

function hiregyatt10() {
  if (!gyatt10Bought && haldors >= 1000000000) {
      cpc += 20000000;
      haldors -= 1000000000;
      gyatt10Bought = true; // Mark as bought
      updateDisplay();
  } else if (gyatt10Bought) {
      alert('You can only buy this once');
  } else {
      alert('You gyatt to be rizzing me');
  }
}