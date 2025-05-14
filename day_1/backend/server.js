import express from "express"

const app = express();

const PORT = 3000

const jokes = [
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the function break up with the variable? It had too many arguments.",
    "How do you comfort a JavaScript bug? You console it.",
    "Why do Java developers wear glasses? Because they don't C#.",
    "I would tell you a joke about recursion... but you'd have to hear it again."
];


app.get("/", (req, res) => {
    res.send("hello!")
})

app.get("/jokes", (req, res) => {
    res.json(jokes)
})



app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})