# Hướng dẫn Deploy

## Các platform phù hợp cho project này:

### 1. Frontend (HTML/CSS/JS)
- **Vercel**: Tự động deploy từ GitHub, miễn phí
- **Netlify**: Tự động deploy, miễn phí với custom domain
- **GitHub Pages**: Miễn phí, tích hợp sẵn với GitHub

### 2. Backend (Node.js)
- **Render**: Miễn phí tier, tự động deploy từ GitHub
- **Railway**: Dễ sử dụng, có free tier
- **Heroku**: Platform phổ biến (có phí)

### 3. Database
- **JSON file**: Đơn giản cho demo (như hiện tại)
- **MongoDB Atlas**: Free tier 512MB
- **PostgreSQL**: Render/Railway cung cấp free tier

## Cách deploy lên các platform:

### Vercel (Frontend + Backend)
1. Kết nối GitHub repo với Vercel
2. Vercel tự động detect Node.js project
3. Deploy tự động khi push code

### Netlify (Frontend only)
1. Drag & drop folder hoặc kết nối GitHub
2. Cấu hình build command nếu cần
3. Tự động deploy

### Render (Full-stack)
1. Tạo Web Service từ GitHub repo
2. Build command: `npm install`
3. Start command: `npm start`
4. Tự động deploy khi push

## GitHub Actions đã được cấu hình:
- Tự động test khi có push/PR
- Deploy lên GitHub Pages
- Có thể mở rộng để deploy lên các platform khác