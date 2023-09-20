// Clase Logger para representar un registro de acceso a una aplicación.
var Logger = /** @class */ (function () {
    function Logger() {
        this.entradasLog = [];
    }
    // Método estático que controla el acceso a la instancia Singleton.
    Logger.getInstance = function () {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    };
    // Método Acceder Sistema.
    Logger.prototype.accederSistema = function (usuario) {
        var mensaje = "Acceso de usuario '".concat(usuario, " ' registrado.");
        this.entradasLog.push(mensaje);
    };
    // Método Mostrar Registro.
    Logger.prototype.mostrarRegistros = function () {
        this.entradasLog.forEach(function (entrada) {
            console.log(entrada);
        });
    };
    return Logger;
}());
var logger = Logger.getInstance();
// Acceso a la aplicación.
logger.accederSistema("Usuario 1");
logger.accederSistema("Usuario 2");
logger.accederSistema("Usuario 3");
// Mostrar registros.
logger.mostrarRegistros();
