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
     else if (req.url === "/add") {

        let ans = 10 + 20;

        res.end(`<h1>Addition = ${ans}</h1>`);

    }

    else if (req.url === "/sub") {

        let ans = 20 - 10;

        res.end(`<h1>Subtraction = ${ans}</h1>`);

    }

    else if (req.url === "/mul") {

        let ans = 10 * 20;

        res.end(`<h1>Multiplication = ${ans}</h1>`);

    }

    else if (req.url === "/div") {

        let ans = 20 / 10;

        res.end(`<h1>Division = ${ans}</h1>`);

    }

    else {

        res.statusCode = 404;
        res.end("<h1>Page Not Found</h1>");

    }

});