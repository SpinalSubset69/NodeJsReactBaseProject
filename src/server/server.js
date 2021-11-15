import app from './app';
import config from '../config/config';
import colors from 'colors';


app.listen(config.port, () => {
    console.log(`Server running on port: ${config.port}`.green);
});