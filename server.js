
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const SHOP_NAME = process.env.SHOP_NAME || "TireShop";

const publicDirectory = path.join(__dirname, "public");

const mimeTypes = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".svg": "image/svg+xml"
};

const server = http.createServer((req, res) => {
    if (req.url === "/api/config") {
        res.writeHead(200, {
            "Content-Type": "application/json; charset=utf-8"
        });

        res.end(JSON.stringify({
            shopName: SHOP_NAME,
            status: "online"
        }));

        return;
    }

    const requestedPath = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname
    );

    const relativePath = requestedPath === "/"
        ? "index.html"
        : requestedPath.replace(/^\/+/, "");

    const filePath = path.resolve(publicDirectory, relativePath);

    if (!filePath.startsWith(publicDirectory + path.sep) &&
        filePath !== path.join(publicDirectory, "index.html")) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(error.code === "ENOENT" ? 404 : 500);
            res.end("File not found");
            return;
        }

        const extension = path.extname(filePath);

        res.writeHead(200, {
            "Content-Type": mimeTypes[extension] || "application/octet-stream"
        });

        res.end(content);
    });
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`${SHOP_NAME} запущено на порту ${PORT}`);
});

