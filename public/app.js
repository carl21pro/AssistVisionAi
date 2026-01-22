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

chatForm.addEventListener('submit', async function(e){
  e.preventDefault();
  const msg = userInput.value.trim();
  if(!msg) return;

  addMessage(msg, 'user');
  userInput.value = '';

  // Typing indicator
  const typingDiv = addMessage("AssistVisionAi is analyzing...", 'ai', true);

  try {
    const res = await fetch(`https://urangkapolka.vercel.app/api/chatgpt4?prompt=${encodeURIComponent(msg)}`);
    const data = await res.json();

    // Replace typing with actual response
    typingDiv.textContent = data.response || "Sorry, no response.";
    addCopyButton(typingDiv);

  } catch (err) {
    typingDiv.textContent = "Error: Could not fetch AI response.";
    console.error(err);
  }
  chat.scrollTop = chat.scrollHeight;
});

function addMessage(text, type, isTyping=false){
  const div = document.createElement('div');
  div.classList.add('message', type);
  if(isTyping) div.classList.add('typing');
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
  return div;
}
