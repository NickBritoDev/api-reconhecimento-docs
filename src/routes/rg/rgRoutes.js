import express from 'express';
import multer from 'multer';
import { FiltrarDocController } from '../../controllers/rg/FiltrarDocController.js';

const router = express.Router();


const upload = multer({ dest: 'uploads/' });


router.post('/rg', upload.single('imagem'), FiltrarDocController);

export default router;
