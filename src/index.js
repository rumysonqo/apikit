const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
app.use(require('./routes/api'));

//iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('servidor en puerto:', app.get('port'));
});