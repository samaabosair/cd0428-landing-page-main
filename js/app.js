/**
 * Define Global Variables
 */

// Select the navigation list and all sections
const listOfNave = document.getElementById('navbar__list');
const theSections = document.querySelectorAll('section');
const backToTopButton = document.getElementById('backToTop');

/**
 * Build the navigation dynamically
 */
function creatNav() {
  theSections.forEach(section => {
    // Create a list item for each section
    const listItem = document.createElement('li');
    const sectionTitleName = section.getAttribute('data-nav');
    
    // Create an anchor element for the list item
    const anchor = document.createElement('a');
    anchor.textContent = sectionTitleName;
    anchor.href = `#${section.id}`;
    anchor.classList.add('menu__link'); // add the class for styling

    // add click event 
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      section.scrollIntoView({ behavior: 'smooth' });
    });

    listItem.appendChild(anchor);
    listOfNave.appendChild(listItem);
  });
}
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

/**
 * Highlight active section in viewport
 */
function highlightActiveSection() {
  theSections.forEach(section => {
    const bounding = section.getBoundingClientRect();
    const navItems = listOfNave.querySelectorAll('li');

    if (bounding.top >= 0 && bounding.top <= window.innerHeight) {
      section.classList.add('active');

      // Highlight the corresponding navigation link
      navItems.forEach(item => {
        if (item.querySelector('a').getAttribute('href').substring(1) === section.id) {
          item.querySelector('a').classList.add('active');
        } else {
          item.querySelector('a').classList.remove('active');
        }
      });
    } else {
      section.classList.remove('active');
    }
  });
}
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' //for button to go up 
    });
  });
/**
 * Initialize the page
 */
function init() {
 creatNav();
  window.addEventListener('scroll', highlightActiveSection);
}

// Call the initialization function when the page loads
init();
