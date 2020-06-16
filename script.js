let body = document.body;
let button = document.getElementById('click');
let container = document.getElementById('container');
show();
function show(){
  let output = document.getElementById('quote');
  let author = document.getElementById('author');
  fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
  .then(res => res.json())
  .then(resp => {
    let randomNumber = Math.floor(Math.random() * 102)
    output.textContent = resp.quotes[randomNumber].quote
    author.textContent = '- ' + resp.quotes[randomNumber].author
  })
  let col1 = generateColor();
  let col2 = generateColor();
  let col3 = generateColor();
  let color = `rgb(${col1}, ${col2}, ${col3})`;
  body.style.background = color;
  button.style.background = color;
  container.style.color = color;
}
function generateColor() {
  return Math.floor(Math.random() * 255)
}