const socket = io();

const button = document.getElementById('add');
const input = document.getElementById('textInput');
const div = document.getElementById('textOutput');

button.addEventListener('click', (event) => {
    socket.emit('message', input.value);
});

socket.on('message', data => {
    console.log(data)
    div.innerHTML = `
        <ul>
            ${data.map(p => `<li>id: ${p.id} data: ${p.message}</li>`)}
        </ul>
    `;
})

// socket.emit('message','Hola desde el cliente!!!');

// socket.on('message_individual', data => {
//     console.log(data);
// })

// socket.on('mensaje_masivo', data => {
//     console.log(data);
// })

// socket.on('mensaje_para_todos', data => {
//     console.log(data);
// })