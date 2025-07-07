// Importando Commander para manejar argumentos de línea de comandos
import { program } from "commander";
// Configuración de Commander
program
    .option(
        "-e, --env <string>",
        "Entorno de proyecto",
        value => value.toUpperCase(),
    )
    .option(
        "-p, --port <number>", 
        "Puerto del servidor",
    )
    .option(
        "-db, --database <string>",
        "Base de datos",
        value => value.toUpperCase(),
    );
    
    program.parse(process.argv);

export default program.opts();
