import { showTyping, removeTyping, addCopyButton } from "./ui.js";

const messages = document.getElementById("messages");
const input = document.getElementById("input");
const send = document.getElementById("send");

// MESSAGE HANDLER
send.onclick = async () => {
  if (!input.value.trim()) return;

  addMsg(input.value, "user");
  const prompt = input.value;
  input.value = "";

  const typing = showTyping(messages);

  try {
    const res = await fetch(
      "https://urangkapolka.vercel.app/api/chatgpt4?prompt=" +
      encodeURIComponent(prompt)
    );
    const data = await res.json();

    removeTyping(typing);

    const bot = addMsg(formatAI(data.response), "bot");
    addCopyButton(bot);

  } catch {
    removeTyping(typing);
    addMsg("⚠️ Connection error.", "bot");
  }
};

function addMsg(text, cls) {
  const div = document.createElement("div");
  div.className = "msg " + cls;
  div.innerHTML = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
  return div;
}

function formatAI(text) {
  return `<b>Understood.</b><br><br>${text.replace(/\n/g,"<br>")}`;
}

// TIME (PH)
function updateTime() {
  document.getElementById("time").innerText =
    "🕒 " + new Date().toLocaleString("en-PH", { timeZone: "Asia/Manila" });
}
setInterval(updateTime, 1000);
updateTime();

// BATTERY
navigator.getBattery().then(b => {
  const update = () => {
    document.getElementById("battery").innerText =
      `🔋 Battery: ${Math.round(b.level*100)}%` +
      (b.charging ? " ⚡ Charging" : "");
  };
  update();
  b.onlevelchange = update;
  b.onchargingchange = update;
});

// MUSIC
const btn = document.getElementById("musicBtn");
const frame = document.getElementById("musicFrame");
let playing = false;

btn.onclick = () => {
  playing = !playing;
  frame.style.display = playing ? "block" : "none";
  btn.innerText = playing ? "⏸ Pause Music" : "▶ Enable Background Music";
};