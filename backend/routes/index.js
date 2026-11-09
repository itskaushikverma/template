import { Router } from 'express';

const router = Router();

router.get('/health', (req, res) => {
  return res.status(200).json({ status: 'ok', timestamp: new Date() });
});
export default router;
