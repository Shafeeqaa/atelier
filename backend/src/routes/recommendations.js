import { Router } from 'express';
import { recommend } from '../services/recommender.js';

const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const { occasion, style, temperature = 26, budget = Infinity } = req.body;

    if (!occasion || !style) {
      return res.status(400).json({ message: 'occasion and style are required' });
    }

    const outfit = await recommend({ occasion, style, temperature, budget });
    return res.json({ outfit });
  } catch (error) {
    next(error);
  }
});

export default router;
