import { Router } from 'express';
import path from 'path';
import fs from 'fs';

const router = Router();

// Универсальный маршрут для получения файлов JSON
router.get('/:filename', (req, res) => {
  const filename = req.params.filename;
  const jsonFilePath = path.join(__dirname, '../basic', `${filename}.json`);

  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(404).json({ message: 'File not found' });
    }
    
    try {
      const jsonData = JSON.parse(data);
      res.status(200).json(jsonData);
    } catch (parseError) {
      res.status(500).json({ message: 'Error parsing JSON' });
    }
  });
});

export default router;
