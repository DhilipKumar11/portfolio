🌍 Deployment Architecture

This portfolio follows a decoupled cloud-native deployment architecture, where the frontend and backend are hosted independently for performance, scalability, and reliability.

🔹 Frontend Deployment

Hosted on Amazon S3 using static website hosting

Distributed globally using Amazon CloudFront for faster load times and low latency


Frontend URL (Live):
👉 https://dkmxhoc2c0jgg.cloudfront.net

Frontend Tech:

HTML, CSS, JavaScript, TypeScript

CDN-based caching and global delivery



---

🔹 Backend Deployment

Backend API deployed on Vercel

Uses serverless functions for automatic scaling and zero server maintenance


Backend URL (Live):
👉 https://portfolio-vercel-kohl.vercel.app

Backend Tech:

Node.js

Express.js

TypeScript



---

🧩 System Architecture

Client Browser
     |
     | HTTPS
     ▼
CloudFront (CDN)
     |
     ▼
Amazon S3 (Static Frontend)
     |
     └── API Calls ─────────▶ Vercel (Backend API)


---

✅ Key Benefits

Independent frontend and backend scaling

Global CDN-based content delivery

Reduced latency and faster page loads

Cost-efficient and production-ready

Modern cloud deployment best practices



---
