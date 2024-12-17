import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';
import viewsRoutes from './routes/views.routes.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.engine('handlebars', handlebars.engine());
app.set('views', 'src/views');
app.set('view engine', 'handlebars');
app.use('/', viewsRoutes);


const httpServer = app.listen(8081, (req, res) => {
    console.log('Escuchandho en 8081');
})

const socketServer = new Server(httpServer);
const messages = [];

socketServer.on('connection', (socket) => {
    console.log("Se ha conectado un cliente");
    socket.emit('message', messages);
    socket.on('message', data => {
        messages.push({id: socket.id, message: data});
        socketServer.emit('message', messages);
    })
})

