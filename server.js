import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// 간단한 API
app.get("/api/hello", (req, res) => {
  res.json({ ok: true, message: "Hello from Node.js Docker!" });
});

// 헬스체크 엔드포인트
app.get("/healthz", (req, res) => res.send("ok"));

// 정적 페이지(필요시)
app.get("/", (req, res) => {
  res.send(`
    <h1>My Node App</h1>
    <p>It works 🎉</p>
    <p><a href="/api/hello">/api/hello</a></p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});

