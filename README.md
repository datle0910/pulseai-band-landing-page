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
- [Vercel](https://vercel.com/) – Deployment platform

## Tính năng chính

- **Hero Section**: Mở đầu ấn tượng với 3D-like Mockup và thông điệp nổi bật.
- **Feature Section**: Các tính năng theo dõi sức khỏe.
- **AI Insight Section**: Thể hiện khả năng phân tích dữ liệu chuyên sâu bằng AI.
- **Technical Specs**: Trình bày thông số kỹ thuật rõ ràng.
- **Scrollytelling Story Section**: Kể chuyện trải nghiệm người dùng theo thời gian trong ngày.
- **Newsletter Form**: Form đăng ký nhận tin với validation chặt chẽ.
- **Webhook-ready integration**: Hỗ trợ gửi data về webhook (Discord, Make, Zapier...).
- **User behavior tracking**: Theo dõi các hành động (click, submit, cuộn tới vùng nội dung).
- **Dark Mode**: Chế độ nền tối chuẩn mực, hỗ trợ lưu trữ và đồng bộ với OS.
- **Chatbot Widget**: Assistant ảo với các rule cơ bản gợi ý tư vấn.
- **Scroll animations**: Chuyển động xuất hiện mượt mà bằng Framer Motion.
- **Responsive Design**: Tương thích tốt với Mobile, Tablet và Desktop.
- **SEO Meta Tags**: Cấu hình đầy đủ thẻ Meta, Open Graph, Twitter Cards.

## Điểm cộng đã làm (Bonus)

- Dark Mode hoàn chỉnh không bị FOUC.
- Webhook-ready form (có mock fallback).
- Click/scroll tracking mechanism.
- Micro-interactions (hover, tap state mượt mà).
- Scrollytelling section.
- Rule-based chatbot.

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

Output sẽ nằm trong thư mục `dist/`.

Để xem bản production preview ở local:
```bash
npm run preview
```

## Environment variables

Bạn có thể cấu hình link nhận dữ liệu từ form bằng cách sửa file `.env`:
```txt
VITE_WEBHOOK_URL=
```

## Deployment note

- **Platform**: Vercel
- **Build command**: `npm run build`
- **Output directory**: `dist`

## Links

- **GitHub**: [https://github.com/datle0910/pulseai-band-landing-page](https://github.com/datle0910/pulseai-band-landing-page)
- **Deploy**: _Updating after Vercel deployment_
