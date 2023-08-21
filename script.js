$(document).ready(function() {
  // Get references to the elements
  const menuIcon = $('.menu-icon');
  const navMenu = $('.nav-menu');
  const hamburgerMenuIcon = menuIcon.find('.hamburger_menu');
  const closeMenuIcon = menuIcon.find('.close_menu');

  // Calculate and set the height of the menu dynamically
  function setMenuHeight() {
    const menuItemHeight = 180; // Adjust this value based on your design
    const numMenuItems = navMenu.children().length;
    const menuHeight = numMenuItems * menuItemHeight;
    navMenu.css('height', menuHeight + 'px');
  }
  

  // Function to toggle the navbar
  function toggleNavbar() {
    navMenu.toggleClass('active'); // Toggle the "active" class on the navigation menu

    // Toggle the visibility of the hamburger and close menu icons
    hamburgerMenuIcon.toggleClass('hidden');
    closeMenuIcon.toggleClass('active');
  }

  // Add click event listener to the menu icon
  menuIcon.on('click', function() {
    toggleNavbar(); // Call the function to toggle the navbar
  });

  // Add click event listener to menu links
  navMenu.find('a').on('click', function() {
    toggleNavbar(); // Call the function to toggle the navbar
  });

  // Add click event listener to the logo
  $('.loopstudios_logo').on('click', function() {
    toggleNavbar(); // Call the function to toggle the navbar
  });

  // Set initial menu height
  setMenuHeight();
});


