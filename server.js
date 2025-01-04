// const path = require('path');
// const express = require('express');
import path from 'path';
import express from 'express'
import bodyParser from 'body-parser';
import { sum } from './api.js';

const app = express();
app.set('port', process.env.port || 3001);
app.use(bodyParser.json());

app.get('/api/send', (req, res) => {
  res.send({ value: sum([5]) });
  // res.send({ value: 'new another value' });
});


let todoItems = [
  { text: 'Learn CSS', done: false },
  { text: 'Learn JS', done: true },
  { text: 'Learn React', done: false },
  { text: 'Learn Mobx', done: false },
];

app.get('/api/todo', (req, res) => {
  const time = 900;
  res.setTimeout(time, () => {
    res.json(todoItems);
  });
});

app.put('/api/todo', (req, res) => {
  const { itemIndex } = req.body;
  todoItems[itemIndex].done = !todoItems[itemIndex].done;
  res.status(200);
  res.end();
});

app.delete('/api/todo', (req, res) => {
  const { itemIndex } = req.body;
  todoItems.splice(itemIndex, 1);
  res.status(200);
  res.end();
})

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
