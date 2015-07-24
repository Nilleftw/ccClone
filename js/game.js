// Cookies per second
var cps = 0;

// Cookie spam button
var cookies = 0;

function cookieClick(number){
  cookies = cookies + number;
  document.getElementById("cookieTotal").innerHTML = cookies;
};

// Cursor auto baker
var cursors = 0;

function buyCursor(){
  var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));      //works out the cost of this cursor
  if (cookies >= cursorCost){                                   //checks that the player can afford the cursor
    cursors = cursors + 1;                                      //increases number of cursors
    cookies = cookies - cursorCost;                             //removes the cookies spent
    cps += 1;                                                   //    my own cookie per second counter
    document.getElementById("cursors").innerHTML = cursors;     //updates the number of cursors for the user
    document.getElementById("cookieTotal").innerHTML = cookies; //updates the number of cookies for the user
    document.getElementById("cps").innerHTML = cps;             //updates the number of cookies per second
  };
  var nextCost = Math.floor(10 * Math.pow(1.1,cursors));        //works out the cost of the next cursor
  document.getElementById('cursorCost').innerHTML = nextCost;   //updates the cursor cost for the user
};

window.setInterval(function() {
  cookieClick(cursors);
}, 1000);


// Baker auto baker
var bakers = 0;

function buyBaker(){
  var bakerCost = Math.floor(50 * Math.pow(1.1,bakers));
  if (cookies >= bakerCost){
    bakers += 1;
    cookies = cookies - bakerCost;
    cps += 2;
    document.getElementById("bakers").innerHTML = bakers;
    document.getElementById("cookieTotal").innerHTML = cookies;
    document.getElementById("cps").innerHTML = cps;
  }
  var nextCost = Math.floor(50 * Math.pow(1.1,bakers));
  document.getElementById('bakerCost').innerHTML = nextCost;
};

window.setInterval(function() {
  cookieClick(2 * bakers);
}, 1000);

/* Cookies (not eadible)

function setCookie(cookieName,value) {
  expiry = new Date();
  expiry.setTime(new Date().getTime() + (10*60*1000));
  var cValue=escape(btoa(JSON.stringify(value))) +
      "; expires="+expiry.toUTCString();
  document.cookie=cookieName + "=" + cValue;
}

function getCookie(cookieName) {
  var cValue = document.cookie;
  var cStart = cValue.indexOf(" " + cookieName + "=");
  if (cStart == -1) {
    cStart = cValue.indexOf(cookieName + "=");
  }
  if (cStart == -1) return false;
  cStart = cValue.indexOf("=", cStart) + 1;
  var cEnd = cValue.indexOf(";", cStart);
  if (cEnd == -1) {
    cEnd = cValue.length;
  }
  cValue = atob(unescape(cValue.substring(cStart,cEnd)));
  return JSON.parse(cValue);
}

// Save file
var player = {
  cookies: 0,
  cursors: 0,
  bakers: 0,
  cps: 0,
};

function updateView() {
  var e2 = document.getElementById("cookieTotal");
  e2.innerHTML =

*/
