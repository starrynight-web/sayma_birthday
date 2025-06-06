const wishes = [
  // Original 20
  "🎈 May your birthday be filled with love, laughter and cake!",
  "🎉 Wishing you a magical year ahead full of surprises!",
  "🎂 Hope your day is as sweet as you are!",
  "🥳 Sending you smiles for every moment of your special day!",
  "🎁 Hope this year brings you endless happiness and success!",
  "🍭 Let this day be full of joy and celebration!",
  "🌟 Shine bright, birthday star!",
  "💖 Another year older, wiser and more fabulous!",
  "🕯 Blow out the candles and make a wish!",
  "🌈 A day full of color, fun and laughter awaits!",
  "🍬 Sweetest birthday to the sweetest soul!",
  "🎈 Cheers to your amazing journey ahead!",
  "🎊 May this year surprise you with endless joy!",
  "🌸 Wishing you sunshine and rainbows on your birthday!",
  "🍰 Cake, smiles, and all the good vibes to you!",
  "🎉 Let’s make today unforgettable!",
  "🎀 A gift of happiness, laughter, and love to you!",
  "💝 You make life so special—enjoy your day!",
  "🥂 Here's to more adventures and memories!",
  "🧁 Happy Birthday! You're a treat to everyone around!",

  // Sayma's 20th Birthday Custom Wishes
  "💫 Happy 20th, Sayma! You're not just growing older, you're growing more amazing every day!",
  "🌟 Cheers to 20 years of being wonderful! Your smile lights up everything around you.",
  "🎈 May this new decade bring you love, success, and all the joy your heart can hold.",
  "💛 You deserve every bit of happiness today and always, Sayma!",
  "🚀 Here's to new adventures, bold dreams, and becoming the woman you're meant to be.",
  "🌼 May your 20s be full of laughter, real friendships, deep love, and limitless growth.",
  "💕 Happy Birthday to my beautiful bestie! You are a blessing I’ll always cherish.",
  "🥰 Life is better with you in it. Never change your golden heart, Sayma.",
  "🌸 20 years of greatness… and you’re just getting started!",
  "🎉 Your presence makes the world brighter. Celebrate big today!",
  "🕊️ May all your wishes find wings and fly right into your arms.",
  "☀️ You’re sunshine on cloudy days. Never stop shining, Sayma!",
  "🫶 Besties like you are rare—thank you for being my constant light.",
  "✨ May your birthday be filled with magical moments and glittery memories!",
  "👑 Twenty looks perfect on you. Own it like the queen you are!",
  "📖 May this year give you stories worth telling and memories worth keeping.",
  "💖 You've touched so many hearts—may yours overflow with love today.",
  "🏁 Keep chasing your dreams. I’ll always be cheering for you!",
  "🌍 You’re not just 20, you’re twenty-on-top-of-the-world!",
  "🔥 Happy Birthday, Sayma! Keep being fierce, fearless, and fabulous!"
];

  function getRandomWish() {
    return wishes[Math.floor(Math.random() * wishes.length)];
  }

  function revealBirthday() {
  const input = document.getElementById('customMsg');
  const wishText = document.getElementById('wishText');
  const msg = input?.value.trim();

  document.querySelector('.gift-box').style.display = 'none';
  document.getElementById('cake').style.display = 'block';
  wishText.style.display = 'block';
  wishText.textContent = msg || getRandomWish();
  document.getElementById('bgm').play();

  // 👇 Show badge
  document.getElementById('badge').style.display = 'inline-block';

  document.getElementById('rewishBtn').style.display = 'inline-block';
  document.getElementById('cutBtn').style.display = 'inline-block';
  launchConfetti(); // 🎉
}

  function showNewWish() {
    document.getElementById('wishText').textContent = getRandomWish();
  }

  function cutCake() {
  document.getElementById('cake').style.display = 'none';
  document.getElementById('cutBtn').style.display = 'none';

  const cutSound = document.getElementById('cutSound');
  cutSound.pause();          // Stop if already playing
  cutSound.currentTime = 0;  // Rewind to start
  cutSound.play();           // Play once

  launchFireworks(); // 🎆
}

  // Floating particles
  const emojis = ['🎂', '🍫', '🍬'];
  for (let i = 0; i < 30; i++) {
    let floatItem = document.createElement('div');
    floatItem.className = 'float-item';
    floatItem.style.left = Math.random() * 100 + 'vw';
    floatItem.style.animationDelay = (Math.random() * 10) + 's';
    floatItem.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    document.body.appendChild(floatItem);
  }

  // Confetti effect 🎉
  function launchConfetti() {
  for (let i = 0; i < 100; i++) {
      let conf = document.createElement('div');
      conf.className = 'confetti';
      conf.style.left = Math.random() * 100 + 'vw';
      conf.style.top = '-10px';
      conf.style.backgroundColor = ['#ff0', '#f0f', '#0ff', '#f33', '#3f3'][Math.floor(Math.random() * 5)];
      conf.style.animationDuration = (2 + Math.random() * 2) + 's';
      document.body.appendChild(conf);

      setTimeout(() => conf.remove(), 3000);
    }
  }

  // Fireworks effect 🎆
  function launchFireworks() {
    for (let i = 0; i < 30; i++) {
      let fw = document.createElement('div');
      fw.className = 'firework';
      fw.style.left = (Math.random() * 100) + 'vw';
      fw.style.top = (Math.random() * 50) + 'vh';
      fw.style.background = ['#f0f', '#ff0', '#0ff', '#f33', '#0f0'][Math.floor(Math.random() * 5)];
      document.body.appendChild(fw);

      setTimeout(() => fw.remove(), 1000);
    }
  }