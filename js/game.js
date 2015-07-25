var cps, 
    cookies, 
    cursors, 
    cursorCost, 
    bakers, 
    bakerCost, 
    nextCost;

/* Skill object template

var OBJECTNAME = {
  skill:"SKILL_NAME",           // Name for your skill
  idDiv:"#HTML_DIV_ID",         // Id name for the div
  idSpan:"HTML_SKILL_TOTAL",    // Total number of owned.. things
  idCost:"HTML_COST_SPAN",      // Holder for skill cost (updates)
  baseCost:10,                  // Does not change
  cost:10,                      // Multiplies for each purchase
  nextCost:0,                   // Cost of next skill purchase
  total:0,                      // Number of owned things
  autoAdd:1                     // Amount of cookies added automatically
};

HTML sidebar button. 

<div class="sideButton" id="HTML_DIV_ID"><p id="buy">Buy SKILL_NAME</p></div>
  SKILL_NAME+S: <span id="IDSPAN">0</span><br />
  Cost: <span id="cursorCost">10</span><br />
*/

// Skill objects

var cursOb = {
  skill:"Cursor",
  idDiv:"#cursor",
  idSpan:"cursors",
  idCost:"cursorCost",
  baseCost:10,
  cost:10,
  nextCost:0,
  total:0,
  autoAdd:1
};

var bakeOb = {
  skill:"Baker",
  idDiv:"#baker",
  idSpan:"bakers",
  idCost:"bakerCost",
  baseCost:50,
  cost:50,
  nextCost:0,
  total:0,
  autoAdd:2
};

var grandOb = {
  skill:"Grandma",
  idDiv:"#grandma",
  idSpan:"grandmas",
  idCost:"grandmaCost",
  baseCost:100,
  cost:100,
  nextCost:0,
  total:0,
  autoAdd:5
};

// Cookies per second
cps = 0;

// Cookie spam button
cookies = 0;

function cookieClick(number){
  cookies = cookies + number;
  document.getElementById("cookieTotal").innerHTML = cookies;
}

// Modular skill buyer, takes object as input

function buyModular(object){
  if (cookies >= object.cost){                                                      //checks that the player can afford the cursor
    object.total += 1;                                                              //increases number of cursors
    cookies -= object.cost;                                                         //removes the cookies spent
    cps += object.autoAdd;                                                          //    my own cookie per second counter
    document.getElementById(object.idSpan).innerHTML = object.total;                //updates the number of cursors for the user
    document.getElementById("cookieTotal").innerHTML = cookies;                     //updates the number of cookies for the user
    document.getElementById("cps").innerHTML = cps;                                 //updates the number of cookies per second
    object.cost = Math.floor(object.baseCost * Math.pow(1.1,object.total));         //works out the cost of this cursor
  }
  object.nextCost = Math.floor(object.baseCost * Math.pow(1.1,object.total));       //works out the cost of the next cursor
  document.getElementById(object.idCost).innerHTML = object.nextCost;               //updates the cursor cost for the user
}

function autoBaker(object) {                                                        //adds one cookie per cursor each second
  window.setInterval(function() {
  cookieClick(object.total * object.autoAdd);
  }, 1000)
};


// Button disabler, also takes object as input

function buyDisable(skill){
  window.setInterval(function() {
    if (cookies >= skill.cost){
      $(skill.idDiv).addClass("sideButton");
      $(skill.idDiv).removeClass("inactiveButton");
    }
    else{
      $(skill.idDiv).addClass("inactiveButton");
      $(skill.idDiv).removeClass("sideButton");
    }
  }, 100);
}

// Debug

function debugClear() {
  cookies = 0,
  document.getElementById("cps").innerHTML = 0,
  cursOb.total = 0, document.getElementById("cursors").innerHTML = cursOb.total, 
                    document.getElementById("cursorCost").innerHTML = cursOb.baseCost,
  bakeOb.total = 0, document.getElementById("bakers").innerHTML = bakeOb.total,
                    document.getElementById("bakerCost").innerHTML = bakeOb.baseCost,
  grandOb.total = 0, document.getElementById("grandmas").innerHTML = grandOb.total, 
                    document.getElementById("grandmaCost").innerHTML = grandOb.baseCost
}