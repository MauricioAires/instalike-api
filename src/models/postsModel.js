import { conectarAoBanco } from "../config/mongo.js";

const conexao = await conectarAoBanco(process.env.STRING_CONNECTION);
export async function getTodosPosts() {
  const db = conexao.db("imersao-instabytes");

  const colecao = db.collection("posts");

  return colecao.find().toArray();
}
