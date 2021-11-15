import express from 'express';
import webpack  from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import  webpackConfig  from './../../webpack.config';

const app = express();

//Middlewares
//Webpack Config
app.use(WebpackDevMiddleware(webpack(webpackConfig)));


export default app;