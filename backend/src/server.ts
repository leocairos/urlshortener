import app from './app';
import database from './database';

// database.sync({ force: true });
database.sync();
console.log('Database ruuning');

app.listen(8001);

console.log('Server running at port 8001');
