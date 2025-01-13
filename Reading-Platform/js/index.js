const books = [
  {
    "title": "Lord Of The Mysteries",
    "synopsis": "guy dies becomes god",
    "authorName": "cuttlefish",
    "bookImg": "blah blah blah",
    "genres": ["Mystery", "Horror"],
    'rating': 3.4,
    metadata: {
      "views": 78324799,
      "bookmarks": 43289
    }
  },
  {
    "title": "Shadow Slave",
    "synopsis": "guy is slave becomes free shadow",
    "authorName": "guiltythree",
    bookImg: "/stock/placeholder.jpg",
    "genres": ["Action", "Suspense", "Isekai"],
    'rating': 3.4,
    metadata: {
      "views": 9237423,
      "bookmarks": 124431
    }
  },
  {
    "title": "Lost in Transaction",
    "synopsis": "kid talks to tree, fae and becomes bard",
    "authorName": "dunno",
    "bookImg": "blah blah blah",
    "genres": ["Supernatural", "LitRPG", "Action"],
    'rating': 3.4,
    metadata: {
      "views": 45023420,
      "bookmarks": 3244
    }
  }
];

const comments = [
  {
    profileImg: "/stock/user.png",
    profileName: "Random Joe",
    rating: "3.4",
    like: 39,
    dislike: 20,
    chapterNumber: "1918. Lord of Shadows",
    content: "orem ipsum dolor sit amet consectetur adipisicing elit. Eius, consectetur error? Cupiditate error deleniti inventore obcaecati, aspernatur natus, cumque optio nostrum totam nobis unde, eveniet facere impedit ducimus quo perferendis."
  },
  {
    profileImg: "/stock/user.png",
    profileName: "Random Joe",
    rating: "3.4",
    like: 39,
    dislike: 20,
    chapterNumber: "1918. Lord of Shadows",
    content: "orem ipsum dolor sit amet consectetur adipisicing elit. Eius, consectetur error? Cupiditate error deleniti inventore obcaecati, aspernatur natus, cumque optio nostrum totam nobis unde, eveniet facere impedit ducimus quo perferendis."
  },
  {
    profileImg: "/stock/user.png",
    profileName: "Random Joe",
    rating: "3.4",
    like: 39,
    dislike: 20,
    chapterNumber: "1918. Lord of Shadows",
    content: "orem ipsum dolor sit amet consectetur adipisicing elit. Eius, consectetur error? Cupiditate error deleniti inventore obcaecati, aspernatur natus, cumque optio nostrum totam nobis unde, eveniet facere impedit ducimus quo perferendis."
  },
  {
    profileImg: "/stock/user.png",
    profileName: "Random Joe",
    rating: "3.4",
    like: 39,
    dislike: 20,
    chapterNumber: "1918. Lord of Shadows",
    content: "orem ipsum dolor sit amet consectetur adipisicing elit. Eius, consectetur error? Cupiditate error deleniti inventore obcaecati, aspernatur natus, cumque optio nostrum totam nobis unde, eveniet facere impedit ducimus quo perferendis."
  },
  {
    profileImg: "/stock/user.png",
    profileName: "Random Joe",
    rating: "3.4",
    like: 39,
    dislike: 20,
    chapterNumber: "1918. Lord of Shadows",
    content: "orem ipsum dolor sit amet consectetur adipisicing elit. Eius, consectetur error? Cupiditate error deleniti inventore obcaecati, aspernatur natus, cumque optio nostrum totam nobis unde, eveniet facere impedit ducimus quo perferendis."
  },
  {
    profileImg: "/stock/user.png",
    profileName: "Random Joe",
    rating: "3.4",
    like: 39,
    dislike: 20,
    chapterNumber: "1918. Lord of Shadows",
    content: "orem ipsum dolor sit amet consectetur adipisicing elit. Eius, consectetur error? Cupiditate error deleniti inventore obcaecati, aspernatur natus, cumque optio nostrum totam nobis unde, eveniet facere impedit ducimus quo perferendis."
  }
];

function loadPage(book, comments) {
  const book_img = document.querySelector(".book_img");
  book_img.src = book.bookImg;
  const book_title = document.querySelector(".book-title");
  book_title.textContent = book.title;
  const book_author = document.querySelector(".book-author");
  book_author.textContent = book.authorName;

  const views = document.querySelector(".views p");
  views.textContent = formatedNums(book.metadata.views);
  const bookmarks = document.querySelector(".bookmarks p");
  bookmarks.textContent = formatedNums(book.metadata.bookmarks);

  // Clear previous reviews before adding new ones
  const reviewsContainer = document.querySelector(".reviews");
  reviewsContainer.innerHTML = ''; // Clears all previous reviews

  comments.forEach(comment => {
    const review = document.createElement("div");
    review.classList.add("review");
    reviewsContainer.appendChild(review);

    const review_header = document.createElement("div");
    review_header.classList.add("review-header");
    review.appendChild(review_header);

    const review_user = document.createElement("div");
    review_user.classList.add("review-user");
    review_header.appendChild(review_user);

    const profile_img = document.createElement("img");
    profile_img.src = comment.profileImg;
    review_user.appendChild(profile_img);

    const profile_name = document.createElement("p");
    profile_name.textContent = comment.profileName;
    review_user.appendChild(profile_name);

    const review_rate = document.createElement("div");
    review_rate.classList.add("review-rate");
    review_header.appendChild(review_rate);

    const rate = document.createElement("p");
    rate.textContent = comment.rating;
    review_rate.appendChild(rate);

    const stars1 = document.createElement("img");
    const stars2 = document.createElement("img");
    const stars3 = document.createElement("img");
    const stars4 = document.createElement("img");
    const stars5 = document.createElement("img");

    stars1.src = "/stock/favorito.png";
    stars2.src = "/stock/favorito.png";
    stars3.src = "/stock/favorito.png";
    stars4.src = "/stock/favorito.png";
    stars5.src = "/stock/favorito.png";

    review_rate.appendChild(stars1);
    review_rate.appendChild(stars2);
    review_rate.appendChild(stars3);
    review_rate.appendChild(stars4);
    review_rate.appendChild(stars5);

    const review_main = document.createElement("div");
    review_main.classList.add("review-main");
    review.appendChild(review_main);

    const chapterName = document.createElement("p");
    chapterName.textContent = comment.chapterNumber;
    review_main.appendChild(chapterName);

    const content = document.createElement("p");
    content.textContent = comment.content;
    review_main.appendChild(content);

    const review_footer = document.createElement("div");
    review_footer.classList.add("review-footer");
    review.appendChild(review_footer);

    const report_button = document.createElement("button");
    report_button.type = "submit";
    report_button.classList.add("report-button");
    report_button.textContent = "REPORT";
    review_footer.appendChild(report_button);

    const review_like_images = document.createElement("div");
    review_like_images.classList.add("review-like-images");
    review_footer.appendChild(review_like_images);

    const like = document.createElement("p");
    like.textContent = "("+comment.like+")";
    review_like_images.appendChild(like);

    const like_img = document.createElement("img");
    like_img.src = "/stock/like.png";
    like_img.classList.add("like");
    review_like_images.appendChild(like_img);
    
    const dislike_img = document.createElement("img");
    dislike_img.src = "/stock/dislike.png";
    dislike_img.classList.add("like");
    review_like_images.appendChild(dislike_img);

    const dislike = document.createElement("p");
    dislike.textContent = "("+comment.dislike+")";
    review_like_images.appendChild(dislike);
  });
}

function formatedNums(book_views) {
  if (book_views >= 1000000) {
    return (book_views / 1000000).toFixed(1) + "M";
  } else if (book_views >= 1000) {
    return (book_views / 1000).toFixed(1) + "K";
  } else {
    return book_views;
  }
}

loadPage(books[1], comments);
