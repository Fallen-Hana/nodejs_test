const express = require('express');
const morgan = require('morgan');
const app = express();
var methodOverride = require('method-override')
const { engine } = require('express-handlebars');
const route = require('./router/home');

app.use(express.json());
app.use(express.static('./src/public'));
// app.use(morgan('combined'));
app.use(express.urlencoded({extended: true,}));

app.engine('.hbs', engine({ 
    extname: '.hbs',
    helpers: {
        sum:(a,b) => a + b,
    }
}));
app.set('view engine', '.hbs');
app.set('views', './src/resource/views');
app.use(methodOverride('_method'));
// require('./router/home')(app);
// require('./router/games')(app);

route(app);

require('http').createServer(app).listen(process.env.HTTP_PORT || 3000, () => {
        console.log(
            `Server http chạy ở http://localhost:${
                process.env.HTTP_PORT || 3000
            }`
        );
    });
