const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URI = 'mongodb://127.0.0.1:27017';
    mongoose.connect(DB_URI)
        .then(() => {
            console.log('**** CONEXIÓN EXITOSA ****');
        })
        .catch((err) => {
            console.error('***** ERROR DE CONEXIÓN ****', err);
        });
}

module.exports = { dbConnect };
  
// const dbConnect = async () => {
//     const DB_URI = 'mongodb://127.0.0.1:27017'
//     mongoose.connect(DB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }, (err, res) => {
//         if (!err) {
//             console.log('**** CONEXION CORRECTA ****')
//         } else {
//             console.log('***** ERROR DE CONEXION ****')
//         }
//     })
// }

module.exports = { dbConnect }