// ---------- Time & Date ----------
function updateTime() {
  const now = new Date();
  const options = { weekday: 'long', hour: '2-digit', minute: '2-digit', hour12: true };
  document.getElementById('time').textContent = 'Time: ' + now.toLocaleTimeString('en-US', options);
  document.getElementById('date').textContent = 'Date: ' + now.toLocaleDateString('en-PH');
}
setInterval(updateTime, 1000);
updateTime();

// ---------- Battery Detection ----------
if (navigator.getBattery) {
  navigator.getBattery().then(battery => {
    function updateBattery() {
      document.getElementById('battery').textContent = `Battery: ${Math.round(battery.level*100)}% ${battery.charging ? '(Charging)' : ''}`;
    }
    battery.addEventListener('levelchange', updateBattery);
    battery.addEventListener('chargingchange', updateBattery);
    updateBattery();
  });
}

// ---------- Chat ----------
const chat = document.getElementById('chat');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

chatForm.addEventListener('submit', function(e){
  e.preventDefault();
  const msg = userInput.value.trim();
  if(!msg) return;

  addMessage(msg, 'user');
  userInput.value = '';

  // Dummy AI Response for Phase 1
  setTimeout(() => {
    addMessage("This is a placeholder AI response. GPT-4 integration will come later.", 'ai');
    chat.scrollTop = chat.scrollHeight;
  }, 800);
});

function addMessage(text, type){
  const div = document.createElement('div');
  div.classList.add('message', type);
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}
