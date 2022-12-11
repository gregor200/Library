


 let library = [];
 let titles = [];
 let authors = [];

const Book = function(title, author, pages, status) {
   this.title = title
   this.author = author
   this.pages = pages
   this.status = status
}

const book2 = new Book("crp", "fyd", "200", "read");




let title = document.getElementById("title");
let form = document.getElementById("form");
let stat = document.getElementById("stat");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let button1 = document.getElementById("button1");
let books = document.getElementById("books");
let error = document.getElementById("error");


function addbook() {
   form.style.cssText = "display: flex;";
   button1.style.cssText = "display: none";
   error.style.cssText = "display: none";

}



form.addEventListener('submit', function(event){
   event.preventDefault()

   

   if(titles.indexOf(title.value) > -1 && authors.indexOf(author.value) > -1) {
      if(titles.indexOf(title.value) == authors.indexOf(author.value)) {
         error.style.cssText = "display: flex";
      }
   }

   else {
      error.style.cssText = "display: none";

   titles.push(title.value);
   authors.push(author.value);
  

  const book1 = new Book(title.value, author.value, pages.value, stat.value);
  library.push(book1);
 

  
  let book = document.createElement("div");
  book.setAttribute("id", "book");

  let h = document.createElement("h");
  h.innerText = book1.title;
 

  let span0 = document.createElement("span");
  span0.innerText = book1.author;


  let span1 = document.createElement("span");
  span1.innerText = book1.pages +" pages";

  let button2 = document.createElement("button");
  if(stat.checked == false) {
   stat.value = "Not read";
  }
  else {stat.value = "Read"}
  button2.innerText = stat.value;
  button2.setAttribute("id", "statusB");
 
 
  let remove = document.createElement("button");
  remove.innerText = "Remove";
  remove.setAttribute("id", "remove");
  remove.addEventListener("click", function() {
    library.splice(library.indexOf(book1), 1);
    book.remove(); h.remove(); span0.remove(); span1.remove(); button2.remove(); remove.remove();
  })

  book.append(h);
  book.append(span0);
  book.append(span1);
  book.append(button2);
  book.append(remove);

  books.append(book);

  form.style.cssText = "display: none;";
  button1.style.cssText = "display: normal";

  title.value = "";
  author.value = "";
  pages.value = "";
  stat.checked = false;

 
   }
})









 


