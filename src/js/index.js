import regex, { nameRegex } from "./name-regex.js";
import { createFixedWhats } from "./fixed-whats.js";

/* REGEX */
nameRegex.forEach(input => {
  input.addEventListener("keypress", e => {
    regex(e);
  });
});

/* COPYRIGHT YEAR */
const copyYear = document.querySelector("#copy-year");
let data = new Date();
copyYear.innerHTML = data.getFullYear();

/* CREATE FIXED WHATS */
createFixedWhats();

/* TEST PRODUCTS DATABASE */
import { tb_siageProducts, tb_divaProducts } from "./db-products.js";
tb_siageProducts.forEach(itens => {
  console.log(itens.installments);
});