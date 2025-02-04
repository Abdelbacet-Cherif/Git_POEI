import express from "express";
import dotenv from 'dotenv';
import routes from './routes/routes.js';

const app = express();

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 3000;

app.use('', routes);

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
