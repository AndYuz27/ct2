console.log("Server is starting")
const http = require("http");
const fs = require("fs");
const url = require("url");
const PORT = 8003;
const mimeTypes = {
    ".js": "text/javascript",
    ".jpg": "image/jpeg",
    ".png": "image/png"
}
const array = fs.readFileSync("ppl2.csv", "utf8").split("\n");
const server = http.createServer((rq, rs) => {
    if (rq.url === "/") {
        rs.writeHead(200, {'Content-Type': 'text/html'});
            array.forEach((e) => {rs.write(`<img src=${e} alt=${e} width="640">`)})
            rs.end()
    } else {
        let flExt = rq.url.split(".");
        console.log(flExt)
        flExt = "." + flExt[flExt.length - 1];
        console.log(flExt)
        if (flExt === ".png" || flExt === ".jpg") {
            fs.readFile("./" + rq.url, (err, data) => {
                if (err) console.log('Эммм... У вас Ошибка в коде' + err)
                console.log(data)
                rs.write(data);
                rs.end();
            })
        }
    }
});
server.listen(PORT, err => !err && console.log('So YEAH! Server is worked.   PORT:' + PORT));