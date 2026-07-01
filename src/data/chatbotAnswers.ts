export interface ChatbotAnswer {
  question: string
  answer: string
  keywords: string[]
}

export const chatbotAnswers: ChatbotAnswer[] = [
  {
    question: 'PulseAI Band dùng được bao lâu?',
    answer:
      'PulseAI Band có thời lượng pin lên đến 10 ngày trong điều kiện sử dụng thông thường, phù hợp để theo dõi sức khỏe liên tục mà không cần sạc mỗi ngày.',
    keywords: ['pin', 'sạc', 'dùng được bao lâu', 'battery', 'bao lâu', 'thời lượng'],
  },
  {
    question: 'Thiết bị có chống nước không?',
    answer:
      'PulseAI Band hỗ trợ chuẩn chống nước IP68, giúp bạn yên tâm sử dụng khi rửa tay, đi mưa hoặc luyện tập hằng ngày.',
    keywords: ['chống nước', 'ip68', 'nước', 'waterproof', 'bơi', 'mưa'],
  },
  {
    question: 'Có hỗ trợ theo dõi giấc ngủ không?',
    answer:
      'Có. PulseAI Band sử dụng AI Health Insight để phân tích thời lượng ngủ, giấc ngủ sâu và xu hướng phục hồi, từ đó đưa ra gợi ý cải thiện thói quen nghỉ ngơi.',
    keywords: ['giấc ngủ', 'ngủ', 'sleep', 'nghỉ ngơi', 'phân tích giấc ngủ'],
  },
  {
    question: 'Có dùng được với iPhone không?',
    answer:
      'PulseAI Band tương thích với cả iOS và Android thông qua kết nối Bluetooth 5.3.',
    keywords: ['iphone', 'ios', 'android', 'tương thích', 'điện thoại', 'kết nối', 'bluetooth'],
  },
  {
    question: 'PulseAI Band có theo dõi nhịp tim không?',
    answer:
      'Có. Thiết bị hỗ trợ theo dõi nhịp tim 24/7, giúp người dùng nắm bắt trạng thái sức khỏe trong ngày.',
    keywords: ['nhịp tim', 'tim', 'heart', 'heart rate', 'bpm'],
  },
  {
    question: 'Sản phẩm phù hợp với ai?',
    answer:
      'PulseAI Band phù hợp với người muốn theo dõi sức khỏe hằng ngày, dân văn phòng, người tập luyện thể thao và những ai muốn cải thiện giấc ngủ bằng dữ liệu cá nhân hóa.',
    keywords: ['phù hợp', 'ai dùng', 'đối tượng', 'cho ai', 'người dùng'],
  },
]

export const FALLBACK_ANSWER =
  'Mình có thể tư vấn về pin, chống nước, giấc ngủ, nhịp tim, khả năng tương thích và các tính năng AI của PulseAI Band. Bạn hãy thử hỏi theo một trong các chủ đề này nhé.'

export const WELCOME_MESSAGE =
  'Xin chào! Mình là PulseAI Assistant. Mình có thể giúp bạn tìm hiểu nhanh về pin, chống nước, giấc ngủ, nhịp tim và tính năng AI của PulseAI Band.'

/**
 * Find the best matching answer for a user message by keyword matching.
 * Returns the answer string, or the fallback if no match found.
 */
export function findAnswer(message: string): { answer: string; isFallback: boolean } {
  const lowerMessage = message.toLowerCase().trim()

  for (const item of chatbotAnswers) {
    const matched = item.keywords.some((keyword) =>
      lowerMessage.includes(keyword.toLowerCase())
    )
    if (matched) {
      return { answer: item.answer, isFallback: false }
    }
  }

  return { answer: FALLBACK_ANSWER, isFallback: true }
}
