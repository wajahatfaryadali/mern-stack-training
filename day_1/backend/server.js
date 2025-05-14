import express from "express"

const app = express();

const PORT = 3000

const jokes = [
    { id: 1, joke: "Why don't programmers like nature? It has too many bugs." },
    { id: 2, joke: "Why did the function break up with the variable? It had too many arguments." },
    { id: 3, joke: "How do you comfort a JavaScript bug? You console it." },
    { id: 4, joke: "Why do Java developers wear glasses? Because they don't C#." },
    { id: 5, joke: "I would tell you a joke about recursion... but you'd have to hear it again." }
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