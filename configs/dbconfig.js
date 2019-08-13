const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/api-mongo-machineair'

const options = {
  useNewUrlParser: true,
  auto_reconnect: true,
  poolSize: 15,
  keepAlive: true,
  keepAliveInitialDelay: 270000
}

mongoose.connect(uri, options)
.then(() => {
  console.log('Mongodb Connected : )');

  mongoose.connection.on('error', (err) => {
    console.log('mongoose connection ::;' , err);
  });
  mongoose.connection.on('reconnected', () => {
    console.log('Reconnected to MongoDB');
  });
})
.catch((err) => {
  console.log('rejected promise ::; ', err);
  mongoose.disconnect();
});
// process.on('SIGINT', () => {
//   mongoose.connection.close(() => {
//     console.log('Mongodb: bye : )');
//     process.exit(0);
//   });
// });


module.exports = mongoose;
