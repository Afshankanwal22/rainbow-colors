const colorBox = document.getElementById('colorBox');
 const hoverSound = document.getElementById('hoverSound');
 let audioUnlocked = false;
document.body.addEventListener('click', function(){
      if (!audioUnlocked) {
        hoverSound.play().then(() => {
          hoverSound.pause();
          hoverSound.currentTime = 0;
          audioUnlocked = true;
          console.log(" Audio unlocked by body click");
        }).catch(e => console.log("Unlock error:", e));
      }
    });
  
  colorBox.addEventListener('mousemove', function() {
    colorBox.style.background = `linear-gradient(${Math.random() * 360}deg, red, orange, yellow, green, blue, indigo, violet)`;
      
  });
   colorBox.addEventListener('mouseenter', function(){
     hoverSound.currentTime = 0;
      hoverSound.play().catch(e => console.log("Play error:", e));
    });

  colorBox.addEventListener('mouseleave', function() {
    colorBox.style.background = '#333'; 
     hoverSound.pause();
      hoverSound.currentTime = 0;
  });