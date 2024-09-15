import express from 'express';
import fileRoutes from './routes/fileRoutes'; // Импорт маршрутов

const app = express();
const port = 3000;

app.use('/api/files', fileRoutes); // Префикс для маршрутов

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
