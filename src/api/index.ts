import express, { Router, Request, Response } from 'express';
import { routerHandler } from './router';

export default (): Router => {
    const app = express();
    const app2 = express();
    let path = require('path');
    let dirname = __dirname;
    let l = dirname.length;
    let path3 = dirname.substring(0, l - 10);
    let path1 = path.join(path3, '/src', '/views');
    app.set('views', path1);
    app.set('view engine', 'ejs');

    //TODO: add routes here...

    app.use(routerHandler());
    //alexa ka kaam
    return app;
};
