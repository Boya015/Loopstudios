 // Code inside here will be executed when the DOM is fully loaded and ready.
$(document).ready(function() { 
  const menuIcon = $('#menu-icon');
  const navMenu = $('#nav-menu');
  const hamburgerMenuIcon = menuIcon.find('#hamburger_menu');
  const closeMenuIcon = menuIcon.find('#close_menu');


  function checkViewportWidthAndSetMenuHeight() {
    if (window.innerWidth < 768) {  // Code to set menu height for larger viewport
      const menuItemHeight = 180; // Adjust this value based on your design
      const numMenuItems = navMenu.children().length;
      const menuHeight = numMenuItems * menuItemHeight;
      navMenu.css('height', menuHeight + 'px');
    } else {  // Code to reset menu height for smaller viewport
      navMenu.css('height', ''); // Reset the menu height when viewport is smaller
    }
  }


  // This function toggles the appearance of the navigation menu. 
  // It adds/removes classes to/from navMenu, hamburgerMenuIcon, 
  // and closeMenuIcon elements to control their visibility and styling.
  
  function toggleNavbar() {
    navMenu.toggleClass('active');
    hamburgerMenuIcon.toggleClass('hidden');
    closeMenuIcon.toggleClass('active');
  }

  // These lines add event listeners to various elements on the page. 
  // When the menuIcon is clicked, or a link inside navMenu is clicked, 
  // or the element with class loopstudios_logo is clicked, 
  // the toggleNavbar() function is called to toggle the navigation menu.

  menuIcon.on('click', function() {
    toggleNavbar();
  });

  navMenu.find('a').on('click', function() {
    toggleNavbar();
  });

  $('.loopstudios_logo').on('click', function() {
    toggleNavbar();
  });

  // This code initially calls the checkViewportWidthAndSetMenuHeight
  // () function to set the menu height based on the current viewport width. 
  // It also adds an event listener to the window's resize event, 
  // so whenever the window is resized, 
  // the checkViewportWidthAndSetMenuHeight() 
  // function is called again to update the menu height if necessary.

  checkViewportWidthAndSetMenuHeight();
  window.addEventListener('resize', checkViewportWidthAndSetMenuHeight);
});
