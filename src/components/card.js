import axios from "axios";
// import { response } from "express";

const Card = (article) => {
  const cContain = document.createElement('div')
  cContain.classList.add('card');
  

  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = article.headline

  const author = document.createElement('div');
  author.classList.add('author');

  const imgContain = document.createElement('div');
  imgContain.classList.add('img-container');
  

  const image = document.createElement('img');
  image.src = article.authorPhoto ;


  const name = document.createElement('span');
  name.textContent = `By ${article.authorName}`;

  cContain.appendChild(headline);
  cContain.appendChild(author);
  cContain.appendChild(name);
  author.appendChild(imgContain);
  author.appendChild(image);


  cContain.addEventListener('click', () => {
    console.log(article.headline)
  })
  return cContain;
  
}


const cardAppender = (selector) => {
  const mainContainer = document.querySelector(selector);

  axios.get('http://localhost:5000/api/articles')
  .then(response => {
    const articleData = response.data.articles;
    // console.log(Object.entries(articleData));
    Object.entries(articleData).forEach((item) => {
    
      item[1].forEach((article) => {
        mainContainer.appendChild(Card(article));
      });
    });
  })
  .catch(error => {
    console.log(error)
  });

} 

// TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


export { Card, cardAppender }
