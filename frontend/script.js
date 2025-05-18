document.getElementById('chatbot-toggle').addEventListener('click', function() {
  const chatbotWindow = document.getElementById('chatbot-window');
  chatbotWindow.classList.toggle('hidden');
});

document.getElementById('send-button').addEventListener('click', async function() {
  const inputcoment = document.getElementById('user-input').value;
  if (!inputcoment) return;

  
  const response = await fetch('http://localhost:3000/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question: inputcoment })
  });
  const data = await response.json();

  
  const messagesDiv = document.getElementById('chatbot-messages');
  messagesDiv.innerHTML += `<div><strong>You:</strong> ${inputcoment}</div>`;
  messagesDiv.innerHTML += `<div><strong>FLIN:</strong> ${data.answer}</div>`;
});