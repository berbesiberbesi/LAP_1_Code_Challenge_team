const express = require('express')
const app = express()
const cors = require("cors");
const port = 2000;

// app.use(cors());

const searches = [
    "cat", "dog", "giraffe", "elephant", "lion", "pig", "sea lion", "cheetah", "bear"
    

]

function getRandomSearch () {
    let arrLength = searches.length - 1;
    let randomNum = Math.floor(Math.random() * arrLength)
  return searches[randomNum]
}

app.use(express.json())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


app.get("/", (req, res) => {
    res.send("Welcome Anisha and Luis!")
});

// To allow the user to access the 10 searches
app.get("/search", (req, res) => {
    res.send(searches)
})

// To allow the user to access each indivdual search, by using the id 
// app.get("/search/:id", (req, res) => {
//     const idx = parseInt(req.params.id)
//     const matcher = searches.find( search => search.id === idx)
//     res.json(matcher)
// })

app.get('/search/random', (req, res) => {
    let randomWord = getRandomSearch()
    res.send(randomWord)
  })
