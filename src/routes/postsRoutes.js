import express from "express";
import { criarPost, listarPosts } from "../controllers/postsController.js";

export const routes = (app) => {
  app.use(express.json());

  app.get("/posts", listarPosts);
  app.post("/posts", criarPost);
};
