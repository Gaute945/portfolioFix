const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post("/", (req, res) => {
  res.redirect('/repos');
})

app.get('/repos', async (req, res) => { 
  async function repoData() {
    const data = await fetch(
      "https://api.github.com/users/Gaute945/repos"
    );
    const json = await data.json(); 
    return json;
  };

  const json = await repoData();

  res.render('repos', { json });
});

app.listen(port, () => {
  console.log(`Server er startet her: http://localhost:${port}`)
});
