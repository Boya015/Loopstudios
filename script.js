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

  // Function to close the navbar
  function closeNavbar() {
    navMenu.removeClass('active'); // Remove the "active" class from the navigation menu
    hamburgerMenuIcon.removeClass('hidden'); // Show the hamburger menu icon
    closeMenuIcon.addClass('hidden'); // Hide the close menu icon
  }

  // Add click event listener to the menu icon
  menuIcon.on('click', function() {
    navMenu.toggleClass('active'); // Toggle the "active" class on the navigation menu
    hamburgerMenuIcon.toggleClass('hidden'); // Toggle the visibility of the hamburger menu icon
    closeMenuIcon.toggleClass('hidden'); // Toggle the visibility of the close menu icon
  });

  // Add click event listener to menu links
  navMenu.find('a').on('click', function() {
    closeNavbar(); // Call the function to close the navbar
  });

  // Add click event listener to the logo
  $('.loopstudios_logo').on('click', function() {
    closeNavbar(); // Call the function to close the navbar
  });
  

  // Set initial menu height
  setMenuHeight();
});

