show();
function show(){
  let output = document.getElementById('quote');
  let author = document.getElementById('author');
  fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
  .then(res => res.json())
  .then(resp => {
    console.log(resp)
    let randomNumber = Math.floor(Math.random() * 102)
    output.textContent = resp.quotes[randomNumber].quote
    author.textContent = '- ' + resp.quotes[randomNumber].author
  })
}