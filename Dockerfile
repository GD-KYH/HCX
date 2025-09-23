# Node 20 alpine 경량 이미지
FROM node:20-alpine

# 보안상 non-root 사용자 생성
RUN addgroup -S app && adduser -S app -G app
WORKDIR /app

# 의존성만 먼저 복사 → 캐시 활용
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev || npm i --omit=dev

# 앱 소스 복사
COPY . .

# 헬스체크(컨테이너 내부 3000 포트)
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/healthz || exit 1

# non-root로 실행
USER app

EXPOSE 3000
CMD ["npm", "start"]

