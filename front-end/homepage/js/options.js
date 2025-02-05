const indexNumber = 0;

function createBooks(book, indexNumber) {
  for (let i = indexNumber; i<indexNumber+4; i++) {
    const sec_books = document.getElementById("sec_books");

    const book_container = document.createElement("div");
    book_container.classList.add("book_container");

    const bookImage = document.createElement("img");
    bookImage.classList.add("bookImage");
    bookImage.src = book[i].imageSrc;

    const book_container_inside = document.createElement("div");
    book_container_inside.classList.add("book_container_inside");

    const book_title = document.createElement("p");
    book_title.classList.add("book_title");
    book_title.textContent = book[i].bookName;

    const book_author = document.createElement("p");
    book_author.classList.add("book_author");
    book_author.textContent = "Author: "+book[i].author;

    const container_metadata = document.createElement("div");
    container_metadata.classList.add("container_metadata");

    const ranking = document.createElement("p");
    ranking.appendChild(document.createElement("strong"));
    ranking.id = "ranking";
    ranking.firstChild.textContent = "Ranking: "+book[i].metadata.ranking;

    const rating = document.createElement("p");
    rating.appendChild(document.createElement("strong"));
    rating.id = "rating";
    rating.firstChild.textContent = "Rating: "+book[i].metadata.rating;

    const views = document.createElement("p");
    views.appendChild(document.createElement("strong"));
    views.id = "views";
    views.firstChild.textContent = "Views: "+book[i].metadata.views;

    const chapters = document.createElement("p");
    chapters.appendChild(document.createElement("strong"));
    chapters.id = "chapters";
    chapters.firstChild.textContent = "Chapters: "+book[i].metadata.chapters;

    const container_genres = document.createElement("div");
    container_genres.classList.add("container_genres");
    container_genres.id = "genres";

    book[i].genres.forEach((genre) => {
      const genreElement = document.createElement("a");
      genreElement.textContent = genre;
      container_genres.appendChild(genreElement);
    });

    const read_btn = document.createElement("button");
    read_btn.classList.add("read_btn");
    read_btn.type = "button";
    read_btn.textContent = "Read";

    const bookmark_btn = document.createElement("button");
    bookmark_btn.classList.add("read_btn");
    bookmark_btn.id = "bookmark_id";
    bookmark_btn.type = "button";
    bookmark_btn.textContent = "Bookmark";

    sec_books.appendChild(book_container);
    book_container.appendChild(bookImage);
    book_container.appendChild(book_container_inside);
    book_container_inside.appendChild(book_title);
    book_container_inside.appendChild(book_author);
    book_container_inside.appendChild(container_metadata);
    container_metadata.appendChild(ranking);
    container_metadata.appendChild(rating);
    container_metadata.appendChild(views);
    container_metadata.appendChild(chapters);
    book_container_inside.appendChild(container_genres);
    book_container_inside.appendChild(read_btn);
    book_container_inside.appendChild(bookmark_btn);
  }
  return indexNumber = indexNumber+4;
}
createBooks(arrayOfBooks, indexNumber);