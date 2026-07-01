export interface WebhookPayload {
  fullName: string
  email: string
  phone?: string
  interest: string
  source: 'PulseAI Band Landing Page'
  submittedAt: string
}

export type WebhookResponse = {
  status: 'success' | 'demo' | 'error'
  message?: string
}

export async function submitToWebhook(payload: WebhookPayload): Promise<WebhookResponse> {
  const url = import.meta.env.VITE_WEBHOOK_URL
  const provider = import.meta.env.VITE_WEBHOOK_PROVIDER || 'generic'
  const accessKey = import.meta.env.VITE_WEBHOOK_ACCESS_KEY

  if (!url) {
    console.log('Demo mode payload:', payload)
    return { status: 'demo' }
  }

  try {
    let fetchOptions: RequestInit = {
      method: 'POST',
    }

    if (provider === 'web3forms') {
      if (!accessKey) {
        console.error('Webhook config missing: VITE_WEBHOOK_ACCESS_KEY is required for web3forms.')
        return { 
          status: 'error', 
          message: 'Webhook chưa được cấu hình đầy đủ. Vui lòng kiểm tra VITE_WEBHOOK_ACCESS_KEY.' 
        }
      }
      
      fetchOptions.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
      fetchOptions.body = JSON.stringify({
        access_key: accessKey,
        name: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        interest: payload.interest,
        source: payload.source,
        submittedAt: payload.submittedAt
      })
    } else if (provider === 'formspree') {
      fetchOptions.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
      fetchOptions.body = JSON.stringify(payload)
    } else {
      // generic, make, google-sheets
      fetchOptions.headers = {
        'Content-Type': 'application/json'
      }
      fetchOptions.body = JSON.stringify(payload)
    }

    // Google Sheets apps script doesn't handle CORS nicely for simple POST sometimes (requires no-cors),
    // but typically fetch with standard json is enough if the apps script is configured with `doPost` 
    // and returns permissive CORS headers. 
    // We assume the user has correctly setup their endpoint.
    
    if (provider === 'google-sheets') {
      // Some simple google sheets scripts fail on CORS when sending Content-Type json, 
      // standard text/plain is a common workaround, but standard json works if server permits.
      // We will stick to the user's requirement.
    }

    const response = await fetch(url, fetchOptions)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return { status: 'success' }
  } catch (error) {
    console.error('Webhook submission error:', error)
    return { status: 'error' }
  }
}
