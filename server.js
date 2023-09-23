const express = require('express');

const app = express();

app.set('port', process.env.port || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.set('port', process.env.port || 3000);
}

app.get('/api/send', (req, res) => {
  res.send({ value: 'new value' });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
