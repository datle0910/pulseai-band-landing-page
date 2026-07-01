export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.trim())
}

export function isValidVietnamPhone(phone: string): boolean {
  if (!phone.trim()) return true // not required, empty is valid
  const phoneRegex = /^(0|\+84)(3[2-9]|5[25689]|7[06-9]|8[1-9]|9[0-46-9])\d{7}$/
  return phoneRegex.test(phone.trim().replace(/\s+/g, ''))
}

export interface NewsletterFormData {
  fullName: string
  email: string
  phone: string
  interest: string
}

export interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
  interest?: string
}

export function validateNewsletterForm(data: NewsletterFormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.fullName.trim()) {
    errors.fullName = 'Vui lòng nhập họ tên.'
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = 'Họ tên phải có ít nhất 2 ký tự.'
  }

  if (!data.email.trim()) {
    errors.email = 'Vui lòng nhập email.'
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Email không đúng định dạng.'
  }

  if (data.phone.trim() && !isValidVietnamPhone(data.phone)) {
    errors.phone = 'Số điện thoại không hợp lệ (VD: 0912345678).'
  }

  if (!data.interest) {
    errors.interest = 'Vui lòng chọn nhu cầu quan tâm.'
  }

  return errors
}
