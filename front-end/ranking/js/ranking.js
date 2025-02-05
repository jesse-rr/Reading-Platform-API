const arrayOfBooks = [
  {
    imageSrc: "/homepage/stock/book_rec_image.jpg",
    bookName: "I’m an Infinite Regressor, But I’ve Got Stories to Tell",
    author: "Sinnoa",
    genres: ["ACTION", "DRAMA", "FANTASY", "SEINEN", "TRAGEDY"],
    metadata: {
        ranking: 162,
        rating: 4.9,
        chapters: 268,
        views: 612000,
        bookmarks: 7150,
        readLater: 15230,
        status: "ON_GOING"
    }
  },
  {
    imageSrc: "/homepage/stock/book_rec_image.jpg",
    bookName: "Legends of the Last Horizon",
    author: "Ava Lee",
    genres: ["ADVENTURE", "FANTASY", "MYSTERY"],
    metadata: {
        ranking: 85,
        rating: 4.7,
        chapters: 120,
        views: 432000,
        bookmarks: 5320,
        readLater: 10800,
        status: "ON_GOING"
    }
  },
  {
    imageSrc: "/homepage/stock/book_rec_image.jpg",
    bookName: "The Final Eclipse",
    author: "J.K. Rowan",
    genres: ["SCI-FI", "THRILLER", "MYSTERY"],
    metadata: {
        ranking: 23,
        rating: 4.8,
        chapters: 310,
        views: 1000000,
        bookmarks: 20000,
        readLater: 25000,
        status: "COMPLETED"
    }
  },
  {
    imageSrc: "/homepage/stock/book_rec_image.jpg",
    bookName: "The Shadows Beneath",
    author: "Lucius Thorne",
    genres: ["HORROR", "MYSTERY", "THRILLER"],
    metadata: {
        ranking: 34,
        rating: 4.5,
        chapters: 75,
        views: 220000,
        bookmarks: 12000,
        readLater: 8000,
        status: "COMPLETED"
    }
  },
  {
    imageSrc: "/homepage/stock/book_rec_image.jpg",
    bookName: "Whispers of the Forgotten",
    author: "Elsie Finch",
    genres: ["DRAMA", "ROMANCE", "MYSTERY"],
    metadata: {
        ranking: 12,
        rating: 4.6,
        chapters: 220,
        views: 567000,
        bookmarks: 8900,
        readLater: 11000,
        status: "ON_GOING"
    }
  },
  {
    imageSrc: "/homepage/stock/book_rec_image.jpg",
    bookName: "Into the Abyss",
    author: "Markus J.",
    genres: ["ACTION", "FANTASY", "MYSTERY"],
    metadata: {
        ranking: 70,
        rating: 4.4,
        chapters: 198,
        views: 380000,
        bookmarks: 6000,
        readLater: 14500,
        status: "ON_GOING"
    }
  },
  {
    imageSrc: "/homepage/stock/book_rec_image.jpg",
    bookName: "The Heart of the Ocean",
    author: "Eleanor Kingsley",
    genres: ["ADVENTURE", "ROMANCE", "DRAMA"],
    metadata: {
        ranking: 51,
        rating: 4.7,
        chapters: 135,
        views: 525000,
        bookmarks: 4200,
        readLater: 12500,
        status: "COMPLETED"
    }
  },
  {
    imageSrc: "/homepage/stock/book_rec_image.jpg",
    bookName: "The Iron Throne",
    author: "Gregory Stone",
    genres: ["FANTASY", "ACTION", "DRAMA"],
    metadata: {
        ranking: 9,
        rating: 5.0,
        chapters: 450,
        views: 1200000,
        bookmarks: 50000,
        readLater: 30000,
        status: "COMPLETED"
    }
  },
  {
    imageSrc: "/homepage/stock/book_rec_image.jpg",
    bookName: "Under the Northern Lights",
    author: "Isla Harper",
    genres: ["ROMANCE", "DRAMA", "MYSTERY"],
    metadata: {
        ranking: 57,
        rating: 4.3,
        chapters: 180,
        views: 620000,
        bookmarks: 7000,
        readLater: 16000,
        status: "ON_GOING"
    }
  },
  {
    imageSrc: "/homepage/stock/book_rec_image.jpg",
    bookName: "Fallen Kingdoms",
    author: "Reed T. Grant",
    genres: ["FANTASY", "ACTION", "ADVENTURE"],
    metadata: {
        ranking: 3,
        rating: 4.9,
        chapters: 350,
        views: 2100000,
        bookmarks: 75000,
        readLater: 40000,
        status: "COMPLETED"
    }
  }
];
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