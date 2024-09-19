document.querySelectorAll('.suggestion').forEach(function(element) {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        var message = this.getAttribute('data-message');
        // Set the value of the textarea to the selected question
        document.getElementById('messageInput').value = message;
    });
});

document.getElementById('sendButton').addEventListener('click', function() {
    var messageInput = document.getElementById('messageInput');
    var messageText = messageInput.value.trim();
    
    if (messageText) {
       
        messageInput.disabled = true;
        this.disabled = true;

        
        addMessageToChat(messageText, 'user');

        
        messageInput.value = '';

        
        setTimeout(function() {
            var botMessage = '- '+`welcome, This is a bot response for the question you asked`+'.';
            addMessageToChat(botMessage, 'bot');

            
            messageInput.disabled = false;
            document.getElementById('sendButton').disabled = false;

            
            messageInput.focus();
        }, 1000);
    }
});

function addMessageToChat(message, type) {
    var chatMessages = document.getElementById('chatMessages');
    var chatMessage = document.createElement('div');
    chatMessage.className = 'chat-message ' + type;
    chatMessage.textContent = message;
    chatMessages.appendChild(chatMessage);

    // Scroll to the bottom of the chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
