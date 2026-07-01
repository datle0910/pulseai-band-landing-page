# PulseAI Band Landing Page

> Vòng tay thông minh theo dõi sức khỏe bằng AI.

PulseAI Band là vòng tay thông minh hỗ trợ theo dõi nhịp tim, giấc ngủ, vận động và đưa ra gợi ý sức khỏe cá nhân hóa bằng AI.

## Công nghệ sử dụng

- [React](https://react.dev/) – UI Library
- [Vite](https://vite.dev/) – Build tool
- [TypeScript](https://www.typescriptlang.org/) – Type safety
- [Tailwind CSS v4](https://tailwindcss.com/) – Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) – Animation & Micro-interactions
- [Lucide React](https://lucide.dev/) – Icon library
- [React Hot Toast](https://react-hot-toast.com/) – Toast notifications

## Tính năng chính

- **Landing Page UI Hiện Đại**: Giao diện đẹp, chuyên nghiệp, responsive hoàn toàn trên Mobile, Tablet và Desktop. Thiết kế bóng bẩy với gradient, glassmorphism và shadow chuẩn mực.
- **Dark Mode**: Chế độ tối hoàn chỉnh, tích hợp tính năng ngăn FOUC (chớp trắng) khi tải trang, tự lưu trữ vào `localStorage` và tự động nhận diện giao diện hệ thống.
- **Newsletter Form**: Form đăng ký email có validation chặt chẽ, hỗ trợ webhook qua `.env` và có fallback UX thông minh khi không có webhook.
- **Rule-based Chatbot**: Tích hợp Assistant nổi ở góc trang với giao diện chat trực quan, tự động gợi ý câu hỏi và phản hồi thông minh, linh hoạt.
- **Animations & Micro-interactions**: Tối ưu cuộn trang mượt mà (Scrollytelling) và tạo hiệu ứng tương tác tinh tế trên nút bấm, các thẻ sản phẩm và khung chat bằng `framer-motion`.
- **User Tracking**: Gắn các sự kiện (track events) cho CTA click, form submit, chatbot interactions, và section view.

## Điểm cộng đã làm (Bonus)

- Code chia theo components, hooks, và utils rất clean.
- Đảm bảo TypeScript type an toàn 100%.
- Không dùng bừa bãi nhiều thư viện nặng ngoài Framer Motion cần thiết cho animation mượt.
- Viewport animation được cấu hình để chỉ chạy một lần, tránh giật lag hoặc ngốn CPU khi scroll lên xuống nhiều.
- Các file chuẩn bị sẵn sàng cho deploy (có `.env.example`, file `index.html` có cấu hình SEO chuẩn).

## Cách chạy local

```bash
# Clone repository
git clone https://github.com/datle0910/pulseai-band-landing-page.git
cd pulseai-band-landing-page

# Cài dependencies
npm install

# (Tuỳ chọn) Thiết lập biến môi trường
cp .env.example .env

# Chạy dev server
npm run dev
```

Mở trình duyệt tại `http://localhost:5173`

## Cách build project

```bash
npm run build
```

Output sẽ nằm trong thư mục `dist/`. Để xem bản production ở local:
```bash
npm run preview
```

## Links

- **GitHub**: [https://github.com/datle0910/pulseai-band-landing-page](https://github.com/datle0910/pulseai-band-landing-page)
- **Deploy**: _Coming soon_
