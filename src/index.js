const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const { engine } = require('express-handlebars');
const route = require('./router/home');

route(app);
app.use(express.static('./src/public'));
app.use(morgan('combined'));
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './src/resource/views');

// require('./router/home')(app);
// require('./router/games')(app);

require('http').createServer(app).listen(process.env.HTTP_PORT || 3000, () => {
        console.log(
            `Server http chạy ở http://localhost:${
                process.env.HTTP_PORT || 3000
            }`
        );
    });
