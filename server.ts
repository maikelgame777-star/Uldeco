import 'dotenv/config';
import express from 'express';
import chatHandler from './api/chat.js';

const app = express();
app.use(express.json());

app.post('/api/chat', chatHandler);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
