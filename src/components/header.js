const Header = (title, date, temp) => {

  const contain = document.createElement('div');
  const containDate = document.createElement('span');
  const heading = document.createElement('h1');
  const temperature = document.createElement('span');

  contain.classList.add('header');
  containDate.classList.add('date');
  temperature.classList.add('temp');

  contain.appendChild(containDate);
  contain.appendChild(heading);
  contain.appendChild(temperature);

  containDate.textContent = date;
  heading.textContent = title;
  temperature.textContent = temp;

  return contain
}  


const headerAppender = (selector) => {
  const container = document.querySelector(selector)
  container.appendChild(elem);
} 
const elem = Header('Lambda Times', 'October 29th, 2021', '55°');
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //


//   TASK 2
//   ---------------------
//   Implement this function taking a css selector as its only argument.
//   It should create a header using the Header component above, passing arguments of your choosing.
//   It should append the header to the element in the DOM that matches the given selector.
  


export { Header, headerAppender }
