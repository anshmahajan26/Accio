const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

    const data = url.parse(req.url, true);

    // Home Page
    if (data.pathname === "/") {

        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(`
            <h1>Calculator</h1>

            <a href="/add">Addition</a><br><br>

            <a href="/sub">Subtraction</a><br><br>

            <a href="/mul">Multiplication</a><br><br>

            <a href="/div">Division</a>
        `);
    }

    // Addition Page
    else if (data.pathname === "/add") {

        let ans = "";

        if (data.query.num1 && data.query.num2) {
            ans = Number(data.query.num1) + Number(data.query.num2);
        }

        res.end(`
            <h1>Addition</h1>

            <form>

                Number 1 :
                <input type="number" name="num1"><br><br>

                Number 2 :
                <input type="number" name="num2"><br><br>

                <button type="submit">Calculate</button>

            </form>

            <h2>Answer : ${ans}</h2>

            <a href="/">Home</a>
        `);
    }

    // Subtraction Page
    else if (data.pathname === "/sub") {

        let ans = "";

        if (data.query.num1 && data.query.num2) {
            ans = Number(data.query.num1) - Number(data.query.num2);
        }

        res.end(`
            <h1>Subtraction</h1>

            <form>

                Number 1 :
                <input type="number" name="num1"><br><br>

                Number 2 :
                <input type="number" name="num2"><br><br>

                <button type="submit">Calculate</button>

            </form>

            <h2>Answer : ${ans}</h2>

            <a href="/">Home</a>
        `);
    }

    // Multiplication Page
    else if (data.pathname === "/mul") {

        let ans = "";

        if (data.query.num1 && data.query.num2) {
            ans = Number(data.query.num1) * Number(data.query.num2);
        }

        res.end(`
            <h1>Multiplication</h1>

            <form>

                Number 1 :
                <input type="number" name="num1"><br><br>

                Number 2 :
                <input type="number" name="num2"><br><br>

                <button type="submit">Calculate</button>

            </form>

            <h2>Answer : ${ans}</h2>

            <a href="/">Home</a>
        `);
    }

    // Division Page
    else if (data.pathname === "/div") {

        let ans = "";

        if (data.query.num1 && data.query.num2) {
            ans = Number(data.query.num1) / Number(data.query.num2);
        }

        res.end(`
            <h1>Division</h1>

            <form>

                Number 1 :
                <input type="number" name="num1"><br><br>

                Number 2 :
                <input type="number" name="num2"><br><br>

                <button type="submit">Calculate</button>

            </form>

            <h2>Answer : ${ans}</h2>

            <a href="/">Home</a>
        `);
    }

});

server.listen(3000, () => {
    console.log("Server Running at http://localhost:3000");
});