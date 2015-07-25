$(document).ready(function(){
var cookie = $("#cookie");
// Sidebar functions

  $("#cookie").click(function() {
    cookieClick(1);
  });

  $("#cursor").click(function() {
    buyModular(cursOb);
  });

  $("#baker").click(function() {
    buyModular(bakeOb);
  });

  $("#grandma").click(function() {
    buyModular(grandOb);
  });

// Cookie animation


cookie.mouseenter(function() {
  cookie.animate({
    height: '+=20px',
    width: '+=20px',
    top: '-=10px'}, 
    "fast");
})

cookie.mouseleave(function() {
  cookie.animate({
    height: '-=20px',
    width: '-=20px',
    top: '+=10px'}, 
    "fast");
})

cookie.mousedown(function() {
  cookie.animate({
    height: '-=10px',
    width: '-=10px',
    top: '+=5px'},
    100);
})

cookie.mouseup(function() {
    cookie.animate({
    height: '+=10px',
    width: '+=10px',
    top: '-=5px'}, 
    100);
})

// Button disabler and auto counter

  buyDisable(cursOb);
  buyDisable(bakeOb);
  buyDisable(grandOb);

  autoBaker(cursOb);
  autoBaker(bakeOb);
  autoBaker(grandOb);

// Debugging

  $("#10").click(function() {
    cookieClick(10);
  });

  $("#100").click(function() {
  cookieClick(100);
  });

  $("#1000").click(function() {
  cookieClick(1000);
  });

  $("#cookienull").click(function() {
    debugClear();
  });

  // $("#activate").click(function() {
  //   $("#debug").toggleClass("inactiveButton");
  // })

});
