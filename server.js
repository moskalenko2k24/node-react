const path = require('path');
const express = require('express');

const app = express();

app.set('port', process.env.port || 3001);

app.get('/api/send', (req, res) => {
  res.send({ value: 'new value' });
});

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.set('port', process.env.port || 3000);
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
