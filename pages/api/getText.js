import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.resolve(process.cwd(), 'public', 'status.txt');
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    res.status(200).json({ content: data.split('\n') });
  } catch (error) {
    res.status(500).json({ error: 'Error reading file' });
  }
}