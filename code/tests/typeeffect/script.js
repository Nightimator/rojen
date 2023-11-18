document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typing-text');
    const words = ["Love", "Like Art", "The Future", "Everything", "Fun", "Our Joy"];
  
    let wordIndex = 0;
    let charIndex = 0;
  
    function type() {
      const currentWord = words[wordIndex];
      
      if (charIndex < currentWord.length) {
        textElement.innerText += currentWord.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust typing speed (milliseconds)
      } else {
        setTimeout(erase, 1000); // Wait for a second before erasing
      }
    }
  
    function erase() {
      if (textElement.innerText.length > 0) {
        textElement.innerText = textElement.innerText.slice(0, -1);
        setTimeout(erase, 50); // Adjust erasing speed (milliseconds)
      } else {
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
        charIndex = 0;
        setTimeout(type, 500); // Wait for half a second before typing the next word
      }
    }
  
    // Start typing on page load
    type();
  });
  