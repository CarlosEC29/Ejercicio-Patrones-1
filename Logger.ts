// Clase Logger para representar un registro de acceso a una aplicación.
class Logger {
    private static instance: Logger;
    private entradasLog: string[] = [];

    public constructor() {
    }

    // Método estático que controla el acceso a la instancia Singleton.
    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    // Método Acceder Sistema.
    public accederSistema(usuario: string): void {
        const mensaje = `Acceso de usuario '${usuario} ' registrado.`;
        this.entradasLog.push(mensaje);
    }

    // Método Mostrar Registro.
    public mostrarRegistros(): void {
        this.entradasLog.forEach((entrada) => {
            console.log(entrada);
        });
    }
}

const logger = Logger.getInstance();

// Acceso a la aplicación.
logger.accederSistema("Usuario 1");
logger.accederSistema("Usuario 2");
logger.accederSistema("Usuario 3");

// Mostrar registros.
logger.mostrarRegistros();