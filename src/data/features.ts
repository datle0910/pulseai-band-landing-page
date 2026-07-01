import { Heart, Moon, Activity, Brain, ShieldAlert, BatteryFull } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: Heart,
    title: 'Theo dõi nhịp tim 24/7',
    description:
      'Cảm biến quang học chính xác cao liên tục đo nhịp tim, phát hiện bất thường và gửi cảnh báo kịp thời.',
  },
  {
    icon: Moon,
    title: 'Phân tích giấc ngủ bằng AI',
    description:
      'AI phân tích các giai đoạn giấc ngủ sâu, nông, REM và đưa ra gợi ý cải thiện chất lượng giấc ngủ.',
  },
  {
    icon: Activity,
    title: 'Đo SpO2 và mức độ căng thẳng',
    description:
      'Theo dõi nồng độ oxy trong máu và chỉ số stress giúp bạn chủ động quản lý sức khỏe tinh thần.',
  },
  {
    icon: Brain,
    title: 'Gợi ý vận động cá nhân hóa',
    description:
      'Dựa trên dữ liệu sức khỏe, AI đề xuất bài tập và cường độ vận động phù hợp với từng người.',
  },
  {
    icon: ShieldAlert,
    title: 'Cảnh báo sức khỏe thông minh',
    description:
      'Nhận thông báo khi nhịp tim bất thường, SpO2 giảm hoặc phát hiện dấu hiệu cần chú ý.',
  },
  {
    icon: BatteryFull,
    title: 'Pin lên đến 10 ngày',
    description:
      'Sử dụng liên tục đến 10 ngày không cần sạc, phù hợp cho người bận rộn và hay di chuyển.',
  },
]
