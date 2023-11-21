function onLoad(callback) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      // Если документ уже загружен или находится в процессе загрузки
      callback();
    } else {
      window.addEventListener('DOMContentLoaded', callback);
    }
  }
  
  onLoad(function() {
    console.log('Страница загружена!');
  });

// в ТЗ было указано "Javascript не использовать", но я не удержался и добавил функционал отправки сообщений.
let sendButton = document.getElementById('send');
let messages = document.querySelector('.messages');
let messageInput = document.querySelector('textarea');

function sendMessage() {
    let time = new Date();
    let messageText = messageInput.value;
    messages.insertAdjacentHTML('beforeend', '<div class="message from-user"><div class="message__time">'+time.getHours()+':'+time.getMinutes()+'</div><div class="message__name">Вы</div><div class="message__text">'+messageText+'</div></div>');
    messageInput.value = '';
    messages.scrollTop = messages.scrollHeight;
}

sendButton.addEventListener('click', function() {
    sendMessage();
})

messageInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        sendMessage();
    }
});