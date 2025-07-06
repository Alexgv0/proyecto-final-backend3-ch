import httpStatusMessages from "./httpStatusMessages.js";

// Respondedor de Codigos HTTP con respuestas genericas
const responseHandler = (res, status, message = "", data = {}) => {
    if (!message) {
        message = httpStatusMessages[status] || httpStatusMessages.default;
    }

    const consoleResponse = { status, message, data };
    const serverResponse = { status, message };

    if (status >= 100 && status < 200) {
        console.info(consoleResponse);
    } else if (status >= 200 && status < 300) {
        console.log(consoleResponse);
    } else if (status >= 300 && status < 400) {
        console.log(consoleResponse);
    } else if (status >= 400 && status < 500) {
        console.warn(consoleResponse);
    } else if (status >= 500 && status < 600) {
        console.error(consoleResponse);
    }

    return res.status(status).json(serverResponse);
};

export default responseHandler;