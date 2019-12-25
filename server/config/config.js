//PORT
process.env.PORT = process.env.PORT || 3000;

//Environment
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Connection string to MongoDB
let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafeteria'
}else{
    urlDB = 'mongodb+srv://user:<password>@cluster.mongodb.net/cafeteria'; //your mongodb atlas cluster (this is an example)
}

process.env.URLDB = urlDB;
