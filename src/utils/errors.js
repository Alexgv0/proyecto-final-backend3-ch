export class HttpError extends Error {
    constructor(message, status) {
        super(message);
        this.name = this.constructor.name; // Asigna el nombre de la clase al error
        this.status = status;

        // Captura el stack trace correctamente
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export class BadRequestError extends HttpError {
    constructor(message = "Solicitud incorrecta") {
        super(message, 400);
    }
}

export class UnauthorizedError extends HttpError {
    constructor(message = "No autorizado") {
        super(message, 401);
    }
}

export class NotFoundError extends HttpError {
    constructor(message = "Recurso no encontrado") {
        super(message, 404);
    }
}

export class InternalServerError extends HttpError {
    constructor(message = "Error interno del servidor") {
        super(message, 500);
    }
}
