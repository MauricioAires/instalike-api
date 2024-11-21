import express from 'express';

// mock / array em memória
const posts = [
  {
    id: 1,
    descricao: 'Uma foto testes',
    imagem: 'https://placecats.com/300/200'
  },
  {
    id: 2,
    descricao: 'Paisagem montanhosa',
    imagem: 'https://placecats.com/300/200'
  },
  {
    id: 3,
    descricao: 'Cachorro brincando',
    imagem: 'https://placecats.com/300/200'
  },
  {
    id: 4,
    descricao: 'Citação inspiradora',
    imagem: 'https://placecats.com/300/200'
  },
  {
    id: 5,
    descricao: 'Comida deliciosa',
    imagem: 'https://placecats.com/300/200'
  },
  {
    id: 6,
    descricao: 'Cidade à noite',
    imagem: 'https://placecats.com/300/200'
  }
];


const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});



function buscarPostPorID(id){
  return posts.find(post => post.id === parseInt(id));
}

app.get('/posts/:id', (req, res) => {

  const post = buscarPostPorID(req.params.id);

  res.status(200).json(post);
});


/**
 * Para realizar boas perguntas a uma IA passe contextos.
 * To ask good questions to an IA, pass contexts
 * - Eu estou estudando, // I am studying
 * - Eu quero ganhar dinheiro, // I want to make money
 */

/**
 *  Site com exemplos de códigos HTTP:
 *  @see https://http.cat/
 */

/**
 * Site com imagens de gatos para teste:
 *
 * @see https://placecats.com/300/200
 */

/**
 * Banco de dados
 *
 * MongoDB Atlas
 */