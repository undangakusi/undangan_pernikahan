function playMusicAndScroll() {
  const audio = document.getElementById('wedding-music');

  // Putar musik
  audio.play().catch(err => console.log('Audio play failed:', err));

  // Scroll ke elemen dengan ID "music"
  document.getElementById('music').scrollIntoView({ behavior: 'smooth' });
}



function addMessage() {
    const name = document.getElementById('guest-name').value;
    const message = document.getElementById('guest-message').value;
    if (name && message) {
        const messagesDiv = document.getElementById('messages');
        const messageElement = document.createElement('div');
        messageElement.className = 'border p-4 mb-2 rounded-lg bg-white';
        messageElement.innerHTML = `<p><strong>${name}</strong>: ${message}</p>`;
        messagesDiv.appendChild(messageElement);
        document.getElementById('guest-name').value = '';
        document.getElementById('guest-message').value = '';
    } else {
        alert('Silakan isi nama dan pesan Anda.');
    }
}

// script.js

const expireDate = new Date(2025, 8, 30, 23, 59, 59); 
function checkExpire() {
  const now = new Date();
  if (now > expireDate) {
    document.body.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;
                  height:100vh;background:#050213;color:white;text-align:center;
                  flex-direction:column;font-family:sans-serif;">
        <h1 style="font-size:2rem;margin-bottom:10px;">Undangan Berakhir</h1>
        <p style="margin-bottom:20px;">Minat custom undangan digital?</p>
        <a href="https://www.instagram.com/neillabukannela/" target="_blank"
           style="background:#FFD700;color:#050213;padding:10px 20px;
                  border-radius:8px;text-decoration:none;font-weight:bold;">
           Hubungi di Instagram
        </a>
      </div>
    `;
  }
}
checkExpire();
