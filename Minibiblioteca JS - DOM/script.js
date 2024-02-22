const books = [
  {
    author: "Chinua Achebe",
    country: "Nigeria",
    imageLink: "images/things-fall-apart.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    pages: 209,
    title: "Things Fall Apart",
    year: 1958,
  },
  {
    author: "Hans Christian Andersen",
    country: "Denmark",
    imageLink: "images/fairy-tales.jpg",
    language: "Danish",
    link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    pages: 784,
    title: "Fairy tales",
    year: 1836,
  },
  {
    author: "Dante Alighieri",
    country: "Italy",
    imageLink: "images/the-divine-comedy.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    pages: 928,
    title: "The Divine Comedy",
    year: 1315,
  },
  {
    author: "Unknown",
    country: "Sumer and Akkadian Empire",
    imageLink: "images/the-epic-of-gilgamesh.jpg",
    language: "Akkadian",
    link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    pages: 160,
    title: "The Epic Of Gilgamesh",
    year: -1700,
  },
  {
    author: "Unknown",
    country: "Achaemenid Empire",
    imageLink: "images/the-book-of-job.jpg",
    language: "Hebrew",
    link: "https://en.wikipedia.org/wiki/Book_of_Job\n",
    pages: 176,
    title: "The Book Of Job",
    year: -600,
  },
];

const body = document.getElementsByTagName("body")[0];
const main = document.createElement("main");
main.setAttribute("id", "container");
body.appendChild(main);

let contenedor = document.getElementById("container");

//  FASE 2 -- Template Strings

let lista = "<section>";

for (let i = 0; i < books.length; i++) {
  lista += `<article>
              <h2>${books[i].author}</h2>
              <h4>${books[i].country}</h4>
              <img src=/${books[i].imageLink}></img>
              <h4>${books[i].language}</h4>
              <a href="${books[i].link}">Link a wikipedia</a>
              <p>${books[i].pages}</p>
              <h3>${books[i].title}</h3>
              <p>${books[i].year}</p>



            </article>`;
}
lista += "</section>";
document.getElementById("container").innerHTML = lista;

//  FASE 1 -- Old Style

let lista2 = document.createElement("section");
lista2.setAttribute("class", "fase_1");
let lista2T = document.createElement("h1");
let textoLista2 = document.createTextNode("Old Style");
lista2T.appendChild(textoLista2);
contenedor.appendChild(lista2T);
contenedor.appendChild(lista2);

for (let i = 0; i < books.length; i++) {
  let article = document.createElement("article");

  let author = document.createElement("h2");
  author.setAttribute("class", "author");
  let authorText = document.createTextNode(`${books[i].author}`);
  author.appendChild(authorText);
  article.appendChild(author);
  lista2.appendChild(article);

  let country = document.createElement("h4");
  country.setAttribute("class", "country");
  let countryText = document.createTextNode(`${books[i].country}`);
  country.appendChild(countryText);
  article.appendChild(country);
  lista2.appendChild(article);

  let image = document.createElement("img");
  image.setAttribute("class", "image");
  image.setAttribute("src", `/${books[i].imageLink}`);
  article.appendChild(image);
  lista2.appendChild(article);

  let language = document.createElement("h4");
  language.setAttribute("class", "language");
  let languageText = document.createTextNode(`${books[i].language}`);
  language.appendChild(languageText);
  article.appendChild(language);
  lista2.appendChild(article);

  let link = document.createElement("a");
  link.setAttribute("class", "link");
  link.setAttribute("href", `${books[i].link}`);
  let linkText = document.createTextNode("Link a wikipedia");
  link.appendChild(linkText);
  article.appendChild(link);
  lista2.appendChild(article);

  let pages = document.createElement("p");
  pages.setAttribute("class", "pages");
  let pagesText = document.createTextNode(`${books[i].pages}`);
  pages.appendChild(pagesText);
  article.appendChild(pages);
  lista2.appendChild(article);

  let title = document.createElement("h4");
  title.setAttribute("class", "title");
  let titleText = document.createTextNode(`${books[i].title}`);
  title.appendChild(titleText);
  article.appendChild(title);
  lista2.appendChild(article);

  let year = document.createElement("p");
  year.setAttribute("class", "year");
  let yearText = document.createTextNode(`${books[i].year}`);
  year.appendChild(yearText);
  article.appendChild(year);
  lista2.appendChild(article);
}
