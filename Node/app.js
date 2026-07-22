const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        res.end(`
            <h1>Simple Calculator</h1>

            <a href="/add">Addition</a><br><br>

            <a href="/sub">Subtraction</a><br><br>

            <a href="/mul">Multiplication</a><br><br>

            <a href="/div">Division</a>
        `);

    }