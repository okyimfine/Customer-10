export default async function handler(req, res) {
  const fs = require('fs');
  const path = require('path');
  const filePath = path.join(process.cwd(), 'public', 'start.json');
  const data = fs.readFileSync(filePath, 'utf8');
  const json = JSON.parse(data);
  res.status(200).json({ startTime: json.startTime });
}
