import { showTyping, removeTyping, addCopyButton } from "./ui.js";

const messages = document.getElementById("messages");
const input = document.getElementById("input");
const send = document.getElementById("send");

/* 🧠 MEMORY */
const memory = [];
const MAX_MEMORY = 10;

send.onclick = async () => {
  if (!input.value.trim()) return;

  addMsg(input.value, "user");
  memory.push({ role: "user", content: input.value });
  trimMemory();

  const typing = showTyping(messages);
  input.value = "";

  try {
    const prompt = buildPrompt();
    const res = await fetch(
      "https://urangkapolka.vercel.app/api/chatgpt4?prompt=" +
      encodeURIComponent(prompt)
    );
    const data = await res.json();

    removeTyping(typing);

    memory.push({ role: "assistant", content: data.response });
    trimMemory();

    const bot = addMsg(formatAI(data.response), "bot");
    addCopyButton(bot);

  } catch {
    removeTyping(typing);
    addMsg("⚠️ Connection error.", "bot");
  }
};

function buildPrompt() {
  return memory.map(m =>
    `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`
  ).join("\n");
}

function trimMemory() {
  if (memory.length > MAX_MEMORY) {
    memory.splice(0, memory.length - MAX_MEMORY);
  }
}

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

/* ⏰ PH TIME */
function updateTime() {
  document.getElementById("time").innerText =
    "🕒 " + new Date().toLocaleString("en-PH", { timeZone: "Asia/Manila" });
}
setInterval(updateTime, 1000);
updateTime();

/* 🔋 BATTERY */
navigator.getBattery().then(b => {
  const update = () => {
    document.getElementById("battery").innerText =
      `🔋 ${Math.round(b.level * 100)}%` + (b.charging ? " ⚡" : "");
  };
  update();
  b.onlevelchange = update;
  b.onchargingchange = update;
});