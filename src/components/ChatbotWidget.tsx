import { useState, useRef, useEffect, useCallback } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import toast from 'react-hot-toast'
import { chatbotAnswers, findAnswer, WELCOME_MESSAGE } from '../data/chatbotAnswers'
import { trackEvent } from '../utils/tracking'

interface Message {
  id: number
  text: string
  sender: 'bot' | 'user'
}

let nextId = 1
let hasShownOpenToast = false

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: nextId++, text: WELCOME_MESSAGE, sender: 'bot' },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to latest message
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping, scrollToBottom])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  function handleOpen() {
    setIsOpen(true)
    trackEvent('chatbot_open')
    if (!hasShownOpenToast) {
      hasShownOpenToast = true
      toast('PulseAI Assistant đã sẵn sàng tư vấn cho bạn.', {
        icon: '🤖',
        duration: 2500,
        style: {
          background: '#f0fdfa',
          color: '#0f766e',
          border: '1px solid #99f6e4',
          fontSize: '14px',
        },
      })
    }
  }

  function handleClose() {
    setIsOpen(false)
    trackEvent('chatbot_close')
  }

  function addBotReply(userMessage: string, isFromSuggestion: boolean) {
    setIsTyping(true)

    const delay = isFromSuggestion ? 400 : 600

    setTimeout(() => {
      const { answer, isFallback } = findAnswer(userMessage)

      if (isFallback) {
        trackEvent('chatbot_fallback', { message: userMessage })
      }

      setMessages((prev) => [
        ...prev,
        { id: nextId++, text: answer, sender: 'bot' },
      ])
      setIsTyping(false)
    }, delay)
  }

  function handleSuggestionClick(question: string) {
    trackEvent('chatbot_suggestion_click', { question })

    setMessages((prev) => [
      ...prev,
      { id: nextId++, text: question, sender: 'user' },
    ])

    addBotReply(question, true)
  }

  function handleSend() {
    const trimmed = input.trim()
    if (!trimmed) return

    trackEvent('chatbot_message_send', { message: trimmed })

    setMessages((prev) => [
      ...prev,
      { id: nextId++, text: trimmed, sender: 'user' },
    ])
    setInput('')

    addBotReply(trimmed, false)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Only show suggestions if conversation is short (welcome + maybe 1 exchange)
  const showSuggestions = messages.length <= 3

  return (
    <>
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-96 max-h-[calc(100vh-120px)] flex flex-col rounded-2xl bg-white border border-slate-200/80 shadow-2xl shadow-slate-900/10 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">PulseAI Assistant</div>
                <div className="text-[11px] text-teal-100/80">Tư vấn nhanh về PulseAI Band</div>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 rounded-lg hover:bg-white/15 transition-colors"
              aria-label="Đóng chatbot"
            >
              <X size={18} className="text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0" style={{ maxHeight: 'calc(100vh - 300px)' }}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start gap-2 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  {/* Avatar */}
                  <div
                    className={`w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center ${
                      msg.sender === 'bot'
                        ? 'bg-teal-100 text-teal-600'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {msg.sender === 'bot' ? <Bot size={14} /> : <User size={14} />}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'bot'
                        ? 'bg-slate-100 text-slate-700 rounded-tl-md'
                        : 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-tr-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2 max-w-[85%]">
                  <div className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center bg-teal-100 text-teal-600">
                    <Bot size={14} />
                  </div>
                  <div className="px-4 py-3 rounded-2xl rounded-tl-md bg-slate-100">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {showSuggestions && (
            <div className="px-4 pb-2 flex-shrink-0">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Câu hỏi gợi ý
              </div>
              <div className="flex flex-wrap gap-1.5">
                {chatbotAnswers.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestionClick(item.question)}
                    disabled={isTyping}
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-teal-700 bg-teal-50 border border-teal-200/60 hover:bg-teal-100 hover:border-teal-300/60 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="px-4 py-3 border-t border-slate-100 flex-shrink-0">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Nhập câu hỏi của bạn..."
                disabled={isTyping}
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 text-sm text-slate-700 placeholder-slate-400 border border-transparent focus:border-teal-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all disabled:opacity-60"
              />
              <button
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 hover:shadow-lg hover:shadow-teal-500/30 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                aria-label="Gửi"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={isOpen ? handleClose : handleOpen}
        className={`fixed bottom-5 right-4 sm:right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all ${
          isOpen
            ? 'bg-slate-700 hover:bg-slate-800 shadow-slate-700/30'
            : 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 shadow-teal-500/30 hover:shadow-teal-500/40 hover:scale-105'
        }`}
        aria-label={isOpen ? 'Đóng chatbot' : 'Mở chatbot'}
      >
        {isOpen ? (
          <X size={22} className="text-white" />
        ) : (
          <MessageCircle size={22} className="text-white" />
        )}
      </button>
    </>
  )
}
