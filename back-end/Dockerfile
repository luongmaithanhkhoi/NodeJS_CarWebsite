# DÙNG NODE 20 (LTS)
FROM node:20-alpine

WORKDIR /app

# chỉ copy file manifest trước để cache layer npm
COPY package.json package-lock.json ./

# cài deps (dùng npm ci nếu có lockfile)
RUN npm ci

# copy nốt mã nguồn
COPY . .

# đảm bảo server lắng nghe 0.0.0.0
ENV PORT=3000
EXPOSE 3000

# đổi theo script của bạn nếu có "start"
# CMD ["npm","start"]
CMD ["sh", "-c", "node scripts/seed.cars.js && npm start"]
# hoặc: CMD ["node","server.js"]
