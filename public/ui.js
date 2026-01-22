// ---------- COPY BUTTON ----------
function addCopyButton(messageDiv) {
  const btn = document.createElement('button');
  btn.textContent = 'Copy';
  btn.classList.add('copy-btn');
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(messageDiv.textContent)
      .then(()=> alert('Copied to clipboard!'))
      .catch(()=> alert('Failed to copy'));
  });
  messageDiv.appendChild(btn);
}

// ---------- CLEAR CHAT ----------
const clearBtn = document.getElementById('clear-chat');
clearBtn.addEventListener('click', () => {
  chat.innerHTML = '';
});
