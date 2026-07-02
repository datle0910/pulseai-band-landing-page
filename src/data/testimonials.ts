export interface Testimonial {
  name: string
  role: string
  quote: string
  metric: string
  metricLabel: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Minh Anh',
    role: 'Nhân viên văn phòng',
    quote:
      'Sau 2 tuần đeo PulseAI Band, tôi phát hiện mức stress tăng cao vào buổi chiều. Giờ tôi dành 5 phút nghỉ ngơi lúc 15:00 và cảm thấy khác biệt rõ rệt.',
    metric: '↓ 23%',
    metricLabel: 'Stress giảm',
  },
  {
    name: 'Đức Huy',
    role: 'Người tập gym 4 buổi/tuần',
    quote:
      'Recovery Score giúp tôi biết khi nào nên tập nặng, khi nào nên nghỉ. Không còn tập quá sức rồi đau cơ cả tuần nữa.',
    metric: '92',
    metricLabel: 'Recovery Score',
  },
  {
    name: 'Thu Hà',
    role: 'Hay mất ngủ, khó ngủ sâu',
    quote:
      'Sleep Score cho tôi thấy giấc ngủ sâu chỉ chiếm 15% tổng thời gian ngủ. AI gợi ý tôi bỏ cafe sau 14:00 và giờ tỉ lệ ngủ sâu đã tăng lên 28%.',
    metric: '86',
    metricLabel: 'Sleep Score',
  },
]
