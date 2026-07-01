import {
  Monitor,
  BatteryFull,
  Droplets,
  Bluetooth,
  HeartPulse,
  Brain,
  Feather,
  Smartphone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Spec {
  icon: LucideIcon
  label: string
  value: string
}

export const specs: Spec[] = [
  {
    icon: Monitor,
    label: 'Màn hình',
    value: 'AMOLED 1.8 inch',
  },
  {
    icon: BatteryFull,
    label: 'Pin',
    value: 'Lên đến 10 ngày',
  },
  {
    icon: Droplets,
    label: 'Chống nước',
    value: 'IP68',
  },
  {
    icon: Bluetooth,
    label: 'Kết nối',
    value: 'Bluetooth 5.3',
  },
  {
    icon: HeartPulse,
    label: 'Cảm biến',
    value: 'Nhịp tim, SpO2, giấc ngủ, vận động',
  },
  {
    icon: Brain,
    label: 'AI',
    value: 'Gợi ý sức khỏe cá nhân hóa',
  },
  {
    icon: Feather,
    label: 'Trọng lượng',
    value: '38g',
  },
  {
    icon: Smartphone,
    label: 'Tương thích',
    value: 'iOS và Android',
  },
]
