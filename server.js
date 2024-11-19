import express from 'express';

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/api', (req, res) => {
  res.status(200).send('Boas vindas à imersão!');
});


/**
 * Para realizar boas perguntas a uma IA passe contextos.
 * To ask good questions to an IA, pass contexts
 * - Eu estou estudando, // I am studying
 * - Eu quero ganhar dinheiro, // I want to make money
 */