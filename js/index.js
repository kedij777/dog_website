/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function menuDrop() {
    console.log("clicked")
    document.getElementById("dropDownContent").classList.toggle("show");
}

// Get the current URL path
var url = window.location.href;
// Get all the menu items in the navigation bar
var menuItems = document.querySelectorAll('.header_nav_pc a');

// Loop through each menu item and check if its href matches the current URL path

menuItems.forEach(function(menuItem) {
  if (menuItem.getAttribute('href') === url) {
    console.log(menuItem);
    // If the href matches, add the active class to the menu item
    menuItem.classList.add('active');
  }
});

// do the same thing for mobile mode

var menuItemsMobile = document.querySelectorAll('#dropDownContent a'); 
menuItemsMobile.forEach(function(menuItem) {
  if (menuItem.getAttribute('href') === url) {
    console.log(menuItem);
    // If the href matches, add the active class to the menu item
    menuItem.classList.add('active_mobile');
  }
});
