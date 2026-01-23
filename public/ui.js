export function showTyping(container) {
  const el = document.createElement("div");
  el.className = "msg bot typing";
  el.innerHTML = "AssistVisionAi is analyzing<span class='dots'>.</span>";
  container.appendChild(el);

  let dots = 1;
  el._interval = setInterval(() => {
    dots = (dots % 3) + 1;
    el.querySelector(".dots").innerText = ".".repeat(dots);
  }, 500);

  container.scrollTop = container.scrollHeight;
  return el;
}

export function removeTyping(el) {
  clearInterval(el._interval);
  el.remove();
}

export function addCopyButton(msgEl) {
  const btn = document.createElement("button");
  btn.className = "copy-btn";
  btn.innerText = "Copy";

  btn.onclick = () => {
    navigator.clipboard.writeText(msgEl.innerText);
    btn.innerText = "Copied!";
    setTimeout(() => (btn.innerText = "Copy"), 1200);
  };

  msgEl.appendChild(btn);
}