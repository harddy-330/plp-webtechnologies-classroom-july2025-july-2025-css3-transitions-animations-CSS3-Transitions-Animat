// --- Part 2: JavaScript Functions — Scope, Parameters & Return Values ---

// Global variable example
globalCounter = 0;

/**
 * Increments a counter by a given value (demonstrates parameters & return value)
 * @param {number} byValue - The value to increment by
 * @returns {number} The new counter value
 */
function incrementCounter(byValue) {
  globalCounter += byValue;
  return globalCounter;
}

/**
 * Returns a greeting message (demonstrates function with parameter & return)
 * @param {string} name
 * @returns {string}
 */
function greet(name) {
  const message = `Hello, ${name}!`;
  return message;
}

/**
 * Demonstrates local vs global scope
 */
function scopeDemo() {
  let localVar = 'I am local';
  // globalCounter is accessible here
  return `${localVar} | globalCounter: ${globalCounter}`;
}

// --- Part 3: Combining CSS Animations with JavaScript ---

document.addEventListener('DOMContentLoaded', function() {
  // Animate Box on Button Click
  const animateBoxBtn = document.getElementById('animateBoxBtn');
  const jsBox = document.getElementById('jsBox');

  animateBoxBtn.addEventListener('click', function() {
    triggerBoxAnimation(jsBox);
    incrementCounter(1); // Example: increment global counter on animation
  });

  // Modal logic
  const showModalBtn = document.getElementById('showModalBtn');
  const modal = document.getElementById('modal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  showModalBtn.addEventListener('click', function() {
    showModal(modal);
  });
  closeModalBtn.addEventListener('click', function() {
    hideModal(modal);
  });
  // Hide modal when clicking outside content
  modal.addEventListener('click', function(e) {
    if (e.target === modal) hideModal(modal);
  });
});

/**
 * Triggers a bounce animation on a box (reusable)
 * @param {HTMLElement} box
 */
function triggerBoxAnimation(box) {
  box.classList.remove('animated');
  // Force reflow to restart animation
  void box.offsetWidth;
  box.classList.add('animated');
}

/**
 * Shows the modal with animation
 * @param {HTMLElement} modal
 */
function showModal(modal) {
  modal.classList.add('show');
}

/**
 * Hides the modal
 * @param {HTMLElement} modal
 */
function hideModal(modal) {
  modal.classList.remove('show');
}

// --- Example usage of functions in console ---
// console.log(greet('Student'));
// console.log(scopeDemo());
