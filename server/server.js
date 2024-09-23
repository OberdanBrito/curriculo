#!/usr/bin/env node --experimental-modules

import express from "express";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app = express();
const port = 10000;

app.use(
  express.static(path.join(__dirname, "..", "public"), {
    setHeaders: function (res) {
      // Serve arquivos estáticos sem cache
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.setHeader("Pragma", "no-cache");
      res.setHeader("Expires", "0");
    },
  })
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
