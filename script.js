document.addEventListener('DOMContentLoaded', () => {
    // Memories data
    const memories = [
      { text: "31st March 2024 - The day we became a legal couple. I held your hand and promised to grow old together, forever by your side. ❣️", img: "img/memory1.jpg" },
      { text: "22nd May 2024 - Korean ramen day! Spicy food, spicy love, and an even spicier girlfriend! 😘", img: "img/memory2.jpg" },
      { text: "1st June 2024 - Another lovely day spent with you. Every meetup felt like falling in love all over again. 💕", img: "img/memory3.jpg" },
      { text: "12th July 2024 - Our hand-holding day. I still feel the warmth of your hand in mine like it’s meant to be there. ❤️", img: "img/memory4.jpg" },
      { text: "24th June 2024 - A room day, just us. Spending quality time together and making memories that only we’ll ever know. 🏡", img: "img/memory5.jpg" },
      { text: "2nd August 2024 - Celebrating Girlfriends Day at Café Delhi Heights. Seeing you happy is my greatest joy. 🥂", img: "img/memory6.jpg" },
      { text: "5th September 2024 - You started teaching and wore ethnic clothes that made you glow even more. I was so proud to call you mine. 🌟", img: "img/memory7.jpg" },
      { text: "13th November 2024 - A meetup and midnight walks. Holding you close under the stars felt like a dream I never wanted to wake up from. 🌌", img: "img/memory8.jpg" },
      { text: "19th November 2024 - “Nails Day”! You scratched my hands with your nails 💅🏻😂, but it only made me love you more. 💖", img: "img/memory9.jpg" },
      { text: "14th December 2024 - After the party, my hottie became even hotter. Seeing you that day had me spellbound. 💋", img: "img/memory10.jpg" },
      { text: "14th January 2025 - You wore a saree and became a patola in black. I couldn’t take my eyes off you. 😍", img: "img/memory11.jpg" },
      { text: "25th January 2025 - Today, I celebrate you. I’ve showered you with gifts—your handbag, a customized octopus soft toy, an anklet of pure silver, and the one-last-name necklace—to remind you that you are my forever. 🎁", img: "img/memory12.jpg" }
    ];
  
    const loveMessages = [
      "I love you (English)", "Te amo (Spanish)", "Je t’aime (French)", 
      "사랑해 (Korean)", "Ich liebe dich (German)", "Ti amo (Italian)", 
      "Я тебя люблю (Russian)", "我爱你 (Mandarin)", "Mahal kita (Tagalog)",
      "Nakupenda (Swahili)", "Σ’ αγαπώ (Greek)", "Eu te amo (Portuguese)"
    ];
  
    // DOM elements
    const memoriesContainer = document.getElementById('memories-container');
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const popupMessage = document.getElementById('popup-message');
    const balloonsContainer = document.getElementById('balloons-container');
    const playMusicButton = document.getElementById('play-music');
    const bgMusic = document.getElementById('bg-music');
    const giftBox = document.getElementById('gift-box');
    
    // Helper function to create and display memories
    function displayMemories() {
      memories.forEach((memory, index) => {
        setTimeout(() => {
          const memoryDiv = document.createElement('div');
          memoryDiv.className = 'memory';
          memoryDiv.textContent = memory.text;
          memoryDiv.addEventListener('click', () => showPopup(memory, loveMessages[index % loveMessages.length]));
          memoriesContainer.appendChild(memoryDiv);
        }, index * 1500); // Delay each memory display
      });
    }
  
    // Show memory popup
    function showPopup(memory, loveMessage) {
      popupImg.src = memory.img;
      popupMessage.textContent = loveMessage;
      popup.style.display = 'block';
  
      setTimeout(() => {
        popup.style.display = 'none';
      }, 3000); // Auto-hide popup
    }
  
    // Create a floating balloon
    function createBalloon() {
      const balloon = document.createElement('div');
      const balloonTypes = ["img/heart-balloon.svg", "img/star-balloon.svg", "img/round-balloon.svg"];
      const randomBalloon = balloonTypes[Math.floor(Math.random() * balloonTypes.length)];
  
      balloon.className = 'balloon';
      balloon.style.backgroundImage = `url(${randomBalloon})`;
      balloon.style.left = `${Math.random() * 100}vw`;
      balloon.style.animationDuration = `${Math.random() * 5 + 5}s`;
  
      balloonsContainer.appendChild(balloon);
  
      // Remove balloon after it floats out of view
      setTimeout(() => {
        balloon.remove();
      }, 10000); // Matches the float-up animation duration
    }
  
    // Create confetti animation
    function createConfetti() {
      for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.body.appendChild(confetti);
  
        // Remove confetti after animation ends
        setTimeout(() => {
          confetti.remove();
        }, 5000);
      }
    }
  
    // Play background music
    playMusicButton.addEventListener('click', () => {
      bgMusic.play();
      playMusicButton.style.display = 'none';
    });
  
    // Handle gift box click
    giftBox.addEventListener('click', () => {
      alert('🎁 Surprise! I love you!');
      createConfetti();
    });
  
    // Start floating balloons
    setInterval(createBalloon, 400); // New balloon every 400ms
  
    // Initialize page
    displayMemories();
    createConfetti(); // Trigger initial confetti burst
  });
  