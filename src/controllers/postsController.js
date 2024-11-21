import { getTodosPosts, criarNovoPost } from "../models/postsModel.js";

export async function listarPosts(req, res) {
  const posts = await getTodosPosts();

  res.status(200).json(posts);
}

export async function criarPost(req, res) {
  const novoPost = req.body;

  try {
    const postCriado = await criarNovoPost(novoPost);

    res.status(200).json(postCriado);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({ message: "Falha ao salvar o post" });
  }
}
