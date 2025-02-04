import express from "express";
import { mainController } from "../controllers/mainController.js";
import { genreController } from "../controllers/genreController.js";
import { artistController } from "../controllers/artistController.js";
import { chartsController } from "../controllers/chartsController.js";
import { albumController } from "../controllers/albumController.js";

const router = express.Router();

router.get("/", mainController);
router.get("/charts", chartsController);
router.get("/genre/:number", genreController);
router.get("/artist/:artist", artistController);
router.get("/album/:album", albumController);

export default router;
