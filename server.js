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
    <h1>HAHAHAHHAHAHAHAHAAHAHAHAHHHAH YOU DID IT!!!!!!!</h1>
    <p>It works 🎉</p>
    <p><a href="/api/hello">/api/hello</a></p>
    <img src="https://thumbnews.nateimg.co.kr/view610///news.nateimg.co.kr/orgImg/sp/2025/04/22/news-p.v1.20250422.f66d1bafedc6415f8ba30932f1992231_P1.jpg" 
    alt="news image" style="max-width:100%;height:auto;" />
  `);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});

