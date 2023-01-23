import express from 'express';
import config from './config.js';

const app = express();
let server = null;

app.get('/hello/:name', (req, res) => {
  const { name } = req.params;

  res.json({
    msg: `Hello ${name} from express`
  });
});

console.log('test')

export default {
  start() {
    server = app.listen(config.port, () => {
      console.log(``);
    });
  },

  stop() {
    server.close()
  }
}
