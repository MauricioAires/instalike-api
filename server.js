import express from "express";
import { routes } from "./src/routes/postsRoutes.js";

const app = express();

routes(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
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
