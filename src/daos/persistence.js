import { DATABASE } from "../config/config.js";
import { ConnectMongoDB } from "./mongodb/connection.js";
import UserDaoMongo from "./mongodb/UserDao.js";
import CartsDaoMongo from "./mongodb/CartsDao.js";
import ProductsDaoMongo from "./mongodb/ProductsDao.js";

const persistence = DATABASE;
export let userDao = null;
export let prodDao = null;
export let cartDao = null;

try {
    switch (persistence) {
        case "MONGO":
            try {
                ConnectMongoDB.getInstance();
                userDao = new UserDaoMongo();
                prodDao = new ProductsDaoMongo();
                cartDao = new CartsDaoMongo();
            } catch (error) {
                console.error("Error al conectar con MongoDB en la :", error.message);
                process.exit(1);
            }
            
            break;

        case "SQL": // TODO:
            console.log("Not working");
            process.exit(1);

        default:
            throw new Error(`Tipo de persistencia no soportado: ${persistence}`);
    }
} catch (error) {
    console.error(error.message);
}

export default {
    userDao,
    prodDao,
    cartDao,
};
