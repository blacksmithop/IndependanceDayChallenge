const express = require('express')
const auth = require('./routes/auth');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views')

app.use(express.static(__dirname + '/public'));

app.use(auth)

const port = (process.env.PORT ||3000)

app.listen(port, () => {
    console.log(`\nListening to port: ${port}\nLive at: http://localhost:${3000}/\n`);
});