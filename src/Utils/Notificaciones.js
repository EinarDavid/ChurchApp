import notifee, { TimestampTrigger, TriggerType } from '@notifee/react-native';

function Notificaciones() {
    this.nuevaFecha = async (fecha, contenido) => {
        const date = new Date(fecha);
        console.log("fecha")
        console.log(date)
        const trigger = {
            type: TriggerType.TIMESTAMP,
            timestamp: date.getTime()
        };
        await notifee.createTriggerNotification(
            {
                ...contenido,
                android: {
                    channelId: "default",
                },
            },
            trigger,
        );
        this.mostrarTodas();
    }
    this.nuevaTiempo = async (tiempo, contenido, ahora) => {
        //const ahora = Date.now();
        //console.log( 'hora', new Date (ahora))
        const nuevoTiempo = new Date(ahora + tiempo);
        console.log("Hora")
        console.log(nuevoTiempo)
        const trigger = {
            type: TriggerType.TIMESTAMP,
            timestamp: nuevoTiempo.getTime()
        };
        await notifee.createTriggerNotification(
            {
                ...contenido,
                android: {
                    channelId: "default",
                },
            },
            trigger,
        );
        this.mostrarTodas();
    }
    this.mostrarTodas = () => {
        notifee.getTriggerNotificationIds().then(ids => console.log('All trigger notifications: ', ids));
    }
    this.eliminar = ()=> {
        
    }
}

module.exports = new Notificaciones();