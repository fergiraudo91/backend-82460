class TickerManager{
    #precioBaseDeGanancia = 0.15;
    constructor(){
        this.eventos = [];
    }

    getEventos(){
        return this.eventos;
    }

    agregarEventos(nombre, lugar, precio, capacidad = 50, fecha = new Date().toISOString()){
        const id = this.eventos.length + 1;
        const participantes = [];
        this.eventos.push({id, nombre, lugar, precio: precio * (1 + this.#precioBaseDeGanancia), capacidad, fecha, participantes});
    }

    agregarUsuarios(eventId, userId){
        const event = this.eventos.find(evento => evento.id === eventId);
        if(!event){
            throw new Error('El evento no existe');
        }
        const usuarioExiste = event.participantes.includes(userId);
        if(usuarioExiste){
            throw new Error('El usuario ya esta registrado');
        }
        event.participantes.push(userId);
    }

    ponerEventoEnGira(eventId, lugar, fecha){
        const event = this.eventos.find(ev => ev.id === eventId);
        if(!event){
            throw new Error('El evento no existe');
        }
        this.eventos.push({...event, id: this.eventos.length + 1, participantes: [], lugar, fecha});
    }
}

const ticketera = new TickerManager();

ticketera.agregarEventos("Recital de Madonna", "Cordoba", 30000, 10000);
ticketera.agregarUsuarios(1, 33);
const events = ticketera.getEventos();

ticketera.ponerEventoEnGira(1, "Buenos Aires", "22/03/2025");

const newEvents = ticketera.getEventos();

console.log({newEvents});