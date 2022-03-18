import fetch from 'node-fetch';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const PORT = 3001;

/* ============= TEST ============ */
// Test App is running
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Test get by id
app.get("/mov", async (req, res) => {
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.API_KEY}`;
    const options = {
        method: 'GET',
    };
    const response = await fetch(url, options)
    const data = await response.json();

    console.log("Response: ", data);
    res.json(data)
});
/* ================================= */

/* ======== MOVIE DETAILS ========== */
//Get movie details by id
app.get("/mov/:id", async (req, res) => {
    const url = `http://www.omdbapi.com/?i=${req.params.id}&apikey=${process.env.API_KEY}`;
    const options = {
        method: 'GET',
    };
    const response = await fetch(url, options)
    const data = await response.json();
    res.status(200).json(data)
});

//Get movie details by TITLE
app.get("/mov/title/:title", async (req, res) => {
    const url = `http://www.omdbapi.com/?t=${req.params.title}&apikey=${process.env.API_KEY}`;
    const options = {
        method: 'GET',
    };
    const response = await fetch(url, options)
    const data = await response.json();
    res.status(200).json(data)
});
/* ================================= */

/* ===== SEARCH FOR TITLE  ========= */
//Get movie list by TITLE
app.get("/mov/list/:s", async (req, res) => {
    const url = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${req.params.s}`;
    const options = {
        method: 'GET',
    };
    const response = await fetch(url, options)
    const data = await response.json();
    res.status(200).json(data)
});

//Get movie list by TITLE and YEAR
app.get("/mov/list/:s/:y", async (req, res) => {
    const url = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${req.params.s}&y=${req.params.y}`;
    const options = {
        method: 'GET',
    };
    const response = await fetch(url, options)
    const data = await response.json();
    res.status(200).json(data)
});

//Get movie list by TITLE and specify PAGE result
app.get("/mov/listpage/:s/:p", async (req, res) => {
    const url = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${req.params.s}&page=${req.params.p}`;
    const options = {
        method: 'GET',
    };
    const response = await fetch(url, options)
    const data = await response.json();
    res.status(200).json(data)
});
/* ================================= */

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});