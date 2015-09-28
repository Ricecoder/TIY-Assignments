
/*
On this page JavaScript changes the class on two HTML <a href> (cbp-vm-grid) and (cbp-vm-list) and a <div>
when the icon is clicked.

There are two icons that when clicked change the view of the page. They do this by having JavaScript
add "cbp-vm-selected" to the class of the icon that was clicked.

One icon is a list view and when clicked javascript appends it's class AND the class of the div
to show it is the list icon that is selected.When it does the CSS rules for the list class display.

The other icon is a grid. When it is clicked javascript appends its class to "cbp-vm-selected" and adds
"cbp-vm-view-grid" to the div which then triggers the CSS rule to apply the grid styling to the div.

Like I wrote in the Nested Accordian scripts.js, I don't really understand DOMs however I imagine that a window object would be called for in this case
because the page is open in a tab on my browser which is a window.

Also the document object would be the entry point into the web pages' content i.e. it helps return HTML elements
in the browser.
*/

// 1) capture elements
// 2) add eventListener
// 3) add getEventByClass

// BABY STEPS--ASSIGN SELECTED TO LIST

// document.getElementsByClassName('cbp-vm-list').className+= "cbp-vm-selected";



/*

// BASIC CODE
var list = document.getElementsByClassName("cbp-vm-list");

list.addEventListener('click', function(){
  list.className+= 'cbp-vm-selected';
});

var grid = document.getElementsByClassName("cbp-vm-grid");

grid.addEventListener('click', function(){
  grid.className+= 'cbp-vm-selected';
});



// CODE WITH FUNCTION BEFORE LISTENER
// GRID
// function addSelectorG() {
//   if (grid !== "cbp-vm-icon cbp-vm-grid cbp-vm-selected") {
//     list.className= "cbp-vm-icon cbp-vm-list ' ' ";
//     grid.className+= 'cbp-vm-grid';
//   }
// }
//
// var grid = document.getElementsByClassName("cbp-vm-icon cbp-vm-grid cbp-vm-selected");
//
// grid.addEventListener('click', addSelectorG);

// LIST
// function addSelectorL() {
//   if (list !== "cbp-vm-icon cbp-vm-list cbp-vm-selected") {
//     // grid.className= "cbp-vm-icon cbp-vm-grid ' ' ";
//     list.className+= 'cbp-vm-selected';
//   }
// }
//
// var list = document.getElementsByClassName("cbp-vm-icon cbp-vm-list");
//
// list.addEventListener('click', addSelectorL);


// CODE WITH EXTENDED CLASS NAME AND IF STATEMENTS
//
// var list = document.getElementsByClassName("cbp-vm-icon cbp-vm-list");
//
// list.addEventListener('click', function(){
//   if (list !== "cbp-vm-icon cbp-vm-list cbp-vm-selected") {
//      grid.className= "cbp-vm-icon cbp-vm-grid ' ' ";
//      list.className+= 'cbp-vm-selected';
//   }
// });
//
// var grid = document.getElementsByClassName("cbp-vm-icon cbp-vm-grid cbp-vm-selected");
//
// grid.addEventListener('click', function(){
//   grid.className+= 'cbp-vm-selected';
// });

*/
/*
var buttons = document.querySelector("div #cbp-vm");
var list = document.querySelector("a.cbp-vm-icon.cbp-vm-list");
var grid = document.querySelector("a.cbp-vm-icon.cbp-vm-grid");

list.addEventListener('click', function(listButton){
  var listButton = listButton.currentTarget;
  buttons.className = "cbp-vm-switcher cbp-vm-view-list";
  list.className = 'cbp-vm-icon cbp-vm-list cbp-vm-selected';
  grid.className = 'cbp-vm-icon cbp-vm-grid';
});

grid.addEventListener('click', function(gridButton){
  var currentButton = gridButton.currentTarget;
  buttons.className = "cbp-vm-switcher cbp-vm-view-grid";

  grid.className = 'cbp-vm-icon cbp-vm-grid cbp-vm-selected';
  list.className = "cbp-vm-icon cbp-vm-list";
});
*/
//jQuery Here:

/*
var buttons = $('div #cbp-vm');
var list = $('a.cbp-vm-icon.cbp-vm-list');
var grid = $('cbp-vm-icon cbp-vm-grid');
*/


//When list icon is clicked div gets "cbp-vm-switcher and cbp-vm-view-list" added;
//list gets cbp-vm-selected added;
//grid has nothing added and might? need cbp-vm-selected removed
jQuery('a .cbp-vm-icon .cbp-vm-list').addClass('cbp-vm-selected').on('click', function(){
  $('div #cbp-vm').addClass('cbp-vm-switcher cbp-vm-view-list');
  // $('a .cbp-vm-icon .cbp-vm-list') .addClass('cbp-vm-selected');
  $('a .cbp-vm-icon cbp-vm-grid').removeClass('cbp-vm-selected');

});
//when grid icon is clicked div gets "cbp-vm-switcher and cbp-vm-view-grid" added;
//grid gets cbp-vm-selected added;
//list has nothing added and might? need cbp-vm-selected removed
$('cbp-vm-icon cbp-vm-grid') .on('click', function(){
  $('div #cbp-vm') .addClass('cbp-vm-switcher cbp-vm-view-grid');
  $('a .cbp-vm-icon cbp-vm-grid') .addClass('cbp-vm-selected');
  $('a .cbp-vm-icon .cbp-vm-list') .removeClass('cbp-vm-selected');
})
