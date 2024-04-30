var haldors = 0;
var cpc = 1;

function bakeCookie() {
  haldors += cpc;
  document.getElementById('cookie-text').innerHTML = "Haldors: " + haldors;

}

function hiregyatt() {
    if(haldors >= 100) {
      cpc += 1;
      haldors -= 100;
      document.getElementById('cookie-text').innerHTML = "Haldors: " + haldors;
    } else {
      alert('You got no gyatt')
    }
  }

  
function hiregyatt2() {
    if(haldors >= 1000) {
      cpc += 15;
      haldors -= 1000;
      document.getElementById('cookie-text').innerHTML = "Haldors: " + haldors;
    } else {
      alert('You got no gyatt')
    }
  }

  
function hiregyatt3() {
    if(haldors >= 50000) {
      cpc += 100;
      haldors -= 50000;
      document.getElementById('cookie-text').innerHTML = "Haldors: " + haldors;
    } else {
      alert('You got no gyatt')
    }
  }

  
function hiregyatt4() {
    if(haldors >= 250000) {
      cpc += 700;
      haldors -= 250000;
      document.getElementById('cookie-text').innerHTML = "Haldors: " + haldors;
    } else {
      alert('You got no gyatt')
    }
  }

  
function hiregyatt5() {
    if(haldors >= 1000000) {
      cpc += 1500;
      haldors -= 1000000;
      document.getElementById('cookie-text').innerHTML = "Haldors: " + haldors;
    } else {
      alert('You got no gyatt')
    }
  }

  
function hiregyatt6() {
    if(haldors >= 7500000) {
      cpc += 10000;
      haldors -= 7500000;
      document.getElementById('cookie-text').innerHTML = "Haldors: " + haldors;
    } else {
      alert('You got no gyatt')
    }
  }

  
  
function hiregyatt7() {
    if(haldors >= 50000000) {
      cpc += 700000;
      haldors -= 50000000;
      document.getElementById('cookie-text').innerHTML = "Haldors: " + haldors;
    } else {
      alert('You got no gyatt')
    }
  }

  
function hiregyatt8() {
    if(haldors >= 150000000) {
      cpc += 2000000;
      haldors -= 150000000;
      document.getElementById('cookie-text').innerHTML = "Haldors: " + haldors;
    } else {
      alert('You got no gyatt')
    }
  }

  
function hiregyatt9() {
    if(haldors >= 850000000) {
      cpc += 10000000;
      haldors -= 850000000;
      document.getElementById('cookie-text').innerHTML = "Haldors: " + haldors;
    } else {
      alert('You got no gyatt')
    }
  }

  
function hiregyatt10() {
    if(haldors >= 5000000000) {
      cpc += 20000000;
      haldors -= 5000000000;
      document.getElementById('cookie-text').innerHTML = "Haldors: " + haldors;
    } else {
      alert('You gyatt to be rizzing me')
    }
  }