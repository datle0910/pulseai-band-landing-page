export interface Product {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  isBestValue?: boolean
}

export const products: Product[] = [
  {
    id: 'pulseai-lite',
    name: 'PulseAI Band Lite',
    price: 1490000,
    description: 'Phiên bản cơ bản cho người mới bắt đầu theo dõi sức khỏe.',
    features: ['Theo dõi nhịp tim 24/7', 'Phân tích giấc ngủ', 'Pin 7 ngày'],
  },
  {
    id: 'pulseai-pro',
    name: 'PulseAI Band Pro',
    price: 2490000,
    description: 'Phiên bản cân bằng nhất với AI Health Insight đầy đủ.',
    features: [
      'AI Health Insight',
      'SpO2 & Stress Tracking',
      'Pin 10 ngày',
      'Chống nước IP68',
    ],
    isBestValue: true,
  },
  {
    id: 'pulseai-elite',
    name: 'PulseAI Band Elite',
    price: 3490000,
    description:
      'Phiên bản cao cấp cho người tập luyện và tối ưu sức khỏe chuyên sâu.',
    features: [
      'AI Recovery Score',
      'Advanced Sleep Report',
      'Premium Strap',
      'Pin 14 ngày',
    ],
  },
]
