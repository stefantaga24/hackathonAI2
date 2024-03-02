// server.js
const express = require('express');
const { spawn } = require('child_process');
const app = express();
const cors = require('cors');
app.use(cors());



app.get('/run-script', (req, res) => {
   const arg = req.query.arg;
  const child = spawn('python', ['./promptAI.py',arg]);

  let scriptOutput = "";

  child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    scriptOutput += data.toString();
  });

  child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    res.send(scriptOutput);
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});