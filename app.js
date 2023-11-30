const socket = io();

const codeInput = document.getElementById('code');

codeInput.addEventListener('input', () => {
    const code = codeInput.value;
    socket.emit('codeChange', code);
});

socket.on('codeChange', (data) => {
    codeInput.value = data;
});