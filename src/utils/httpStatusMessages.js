const httpStatusMessages = {
    100: "Continue",
    101: "Switching Protocol",
    102: "Procesando",
    103: "Early Hints",
    200: "Solicitud realizada de forma exitosa",
    201: "Se ha creado un nuevo recurso exitosamente",
    202: "La solicitud se ha recibido, pero aún no se ha actuado",
    203: "La petición se ha completado con éxito, pero su contenido no se ha obtenido de la fuente originalmente solicitada, sino que se recoge de una copia local o de un tercero",
    204: "La petición se ha completado con éxito pero su respuesta no tiene ningún contenido",
    205: "La petición se ha completado con éxito, pero su respuesta no tiene contenidos",
    206: "La petición servirá parcialmente el contenido solicitado",
    207: "Una respuesta Multi-Estado transmite información sobre varios recursos en situaciones en las que varios códigos de estado podrían ser apropiados",
    208: "Una respuesta Multi-Estado transmite información sobre varios recursos en situaciones en las que varios códigos de estado podrían ser apropiados",
    226: "El servidor ha cumplido una petición GET para el recurso y la respuesta es una representación del resultado de una o más manipulaciones de instancia aplicadas a la instancia actual",
    300: "Esta solicitud tiene más de una posible respuesta",
    301: "La URI del recurso solicitado ha sido cambiado",
    302: "El recurso de la URI solicitada ha sido cambiado temporalmente",
    303: "El servidor envía esta respuesta para dirigir al cliente a un nuevo recurso solicitado a otra dirección usando una petición GET",
    304: 'Esta es usada para propósitos de "caché". Le indica al cliente que la respuesta no ha sido modificada',
    307: "Dirigir al cliente a obtener el recurso solicitado a otra URI con el mismo método que se usó la petición anterior",
    308: "El recurso ahora se encuentra permanentemente en otra URI",
    400: "El servidor no pudo interpretar la solicitud dada una sintaxis inválida",
    401: "Es necesario autenticar para obtener la respuesta solicitada",
    402: "Payment Required",
    403: "El cliente no posee los permisos necesarios para cierto contenido",
    404: "El servidor no pudo encontrar el contenido solicitado",
    405: "El método solicitado es conocido por el servidor pero ha sido deshabilitado y no puede ser utilizado",
    406: "Not Acceptable",
    407: "La autenticación debe estar hecha a partir de un proxy",
    408: "Conexión inactiva",
    409: "Existe un conflicto con el estado actual del servidor",
    410: "El contenido solicitado ha sido borrado del servidor",
    411: "El servidor rechaza la petición porque el campo de encabezado Content-Length no esta definido y el servidor lo requiere",
    412: "El cliente ha indicado pre-condiciones en sus encabezados la cual el servidor no cumple",
    413: "La entidad de petición es más larga que los límites definidos por el servidor; el servidor puede cerrar la conexión o retornar un campo de encabezado Retry-After",
    414: "La URI solicitada por el cliente es más larga de lo que el servidor está dispuesto a interpretar",
    415: "El formato multimedia de los datos solicitados no está soportado por el servidor, por lo cual el servidor rechaza la solicitud",
    416: "El rango especificado por el campo de encabezado Range en la solicitud no cumple; es posible que el rango está fuera del tamaño de los datos objetivo del URI",
    417: "Significa que la expectativa indicada por el campo de encabezado Expect solicitada no puede ser cumplida por el servidor",
    418: "El servidor se rehúsa a intentar hacer café con una tetera",
    421: "La petición fue dirigida a un servidor que no es capaz de producir una respuesta",
    422: "La petición estaba bien formada pero no se pudo seguir debido a errores de semántica",
    423: "El recurso que está siendo accedido está bloqueado",
    424: "La petición falló debido a una falla de una petición previa",
    426: "El servidor se rehúsa a aplicar la solicitud usando el protocolo actual pero puede estar dispuesto a hacerlo después que el cliente se actualice a un protocolo diferente",
    428: "El servidor origen requiere que la solicitud sea condicional",
    429: "El usuario ha enviado demasiadas solicitudes en un periodo de tiempo dado",
    431: "El servidor no está dispuesto a procesar la solicitud porque los campos de encabezado son demasiado largos",
    451: "El usuario solicita un recurso ilegal",
    500: "El servidor ha encontrado una situación que no sabe cómo manejarla",
    501: "El método solicitado no está soportado por el servidor y no puede ser manejado",
    502: "El servidor obtuvo una respuesta inválida",
    503: "El servidor no está listo para manejar la petición",
    504: "Esta respuesta de error es dada cuando el servidor está actuando como una puerta de enlace y no puede obtener una respuesta a tiempo",
    505: "La versión de HTTP usada en la petición no está soportada por el servidor",
    506: "El servidor tiene un error de configuración interna: negociación de contenido transparente para la petición resulta en una referencia circular",
    507: "El servidor tiene un error de configuración interna: la variable de recurso escogida está configurada para acoplar la negociación de contenido transparente misma, y no es por lo tanto un punto final adecuado para el proceso de negociación",
    508: "El servidor detectó un ciclo infinito mientras procesaba la solicitud",
    510: "Extensiones adicionales para la solicitud son requeridas para que el servidor las cumpla",
    511: "El cliente necesita autenticar para obtener acceso a la red",
    default: "El codigo de error no coincide con los existentes",
};

export default httpStatusMessages;