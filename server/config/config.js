//PUERTO
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Conexion a la base de datos
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafeteria'
} else {
    urlDB = 'mongodb+srv://user:92duHqBFzwjJQYf@cluster0-fh2p2.mongodb.net/cafeteria';
}

//Firma de JWT
process.env.SEED = process.env.SEED || 'firma-super-secreta';

//Expire time JWT
process.env.EXP = process.env.EXP || '3h';


process.env.URLDB = urlDB;