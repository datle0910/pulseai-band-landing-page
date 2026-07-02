export interface Product {
  id: string
  name: string
  label: string
  price: number
  description: string
  bestFor: string
  battery: string
  sensors: string[]
  strap: string
  color: string
  warranty: string
  features: string[]
  isBestValue?: boolean
}

export const products: Product[] = [
  {
    id: 'pulseai-lite',
    name: 'PulseAI Band Lite',
    label: 'Essential Tracking',
    price: 1490000,
    description: 'Theo dõi sức khỏe cơ bản hằng ngày với thiết kế gọn nhẹ, phù hợp cho người mới bắt đầu.',
    bestFor: 'Người mới bắt đầu theo dõi sức khỏe',
    battery: '7 ngày',
    sensors: ['Heart Rate', 'Sleep', 'Activity'],
    strap: 'Soft silicone',
    color: 'Mist Graphite',
    warranty: '12 tháng',
    features: [
      'Theo dõi nhịp tim 24/7',
      'Phân tích giấc ngủ cơ bản',
      'Đếm bước chân & calo',
      'Thông báo cuộc gọi & tin nhắn',
      'Pin 7 ngày liên tục',
      'Chống nước IP67',
    ],
  },
  {
    id: 'pulseai-pro',
    name: 'PulseAI Band Pro',
    label: 'Best for Everyday Health',
    price: 2490000,
    description: 'Phiên bản cân bằng nhất với AI Health Insight đầy đủ, theo dõi SpO2 và mức stress.',
    bestFor: 'Người muốn AI Insight đầy đủ',
    battery: '10 ngày',
    sensors: ['Heart Rate', 'SpO2', 'Stress', 'Sleep', 'Recovery'],
    strap: 'Premium silicone',
    color: 'Deep Teal',
    warranty: '12 tháng',
    features: [
      'AI Health Insight cá nhân hóa',
      'SpO2 & Stress Tracking liên tục',
      'Phân tích giấc ngủ sâu / nông / REM',
      'Gợi ý vận động theo dữ liệu',
      'Pin 10 ngày, sạc nhanh 45 phút',
      'Chống nước IP68',
    ],
    isBestValue: true,
  },
  {
    id: 'pulseai-elite',
    name: 'PulseAI Band Elite',
    label: 'Advanced Recovery',
    price: 3490000,
    description: 'Phiên bản cao cấp với phân tích HRV chuyên sâu, dành cho người tập luyện và tối ưu phục hồi.',
    bestFor: 'Người tập luyện & tối ưu phục hồi',
    battery: '14 ngày',
    sensors: ['Advanced HRV', 'SpO2', 'Sleep', 'Stress', 'Recovery', 'Skin Temp'],
    strap: 'Hybrid woven strap',
    color: 'Titanium Black',
    warranty: '18 tháng',
    features: [
      'AI Recovery Score chuyên sâu',
      'Advanced HRV & Skin Temperature',
      'Báo cáo giấc ngủ chi tiết từng giai đoạn',
      'Phân tích vùng nhịp tim khi tập',
      'Pin 14 ngày, sạc không dây',
      'Chống nước IP68 + bơi lội',
    ],
  },
]
