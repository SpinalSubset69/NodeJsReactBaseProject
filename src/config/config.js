import dotenv from 'dotenv';

//Gets .env Variables
dotenv.config();

const config = {
    port: process.env.PORT || 4000
}

export default config;